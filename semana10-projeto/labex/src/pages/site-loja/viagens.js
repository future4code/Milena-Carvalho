import { Link } from "react-router-dom"
import styled from 'styled-components'
import '../../components/antd.css'
import { Secao, Container, Titulo, Input, CaixaDeTexto, CaixaBotao} from '../../components/estilosCompoentes'
import galaxia from '../../imgs/home/galaxia.png'
import calendario from '../../imgs/infosviagem/data.png'
import pin from '../../imgs/infosviagem/local.png'
import duracao from '../../imgs/infosviagem/duracao-preto.png'
import { List, Modal } from 'antd';
import 'antd/dist/antd.css'
import { useState, useEffect } from 'react'
import  FormAplicacao  from './formAplicacao'


const DivTitulo = styled.div`
    margin-bottom: 20px;
`
const Coluna1 = styled.div`
    width: 65%;
    padding-right: 30px;
    text-align: right;
`

const Coluna2 = styled.div` 
    width: 35%;
    padding-left: 30px;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
`

const Descricao = styled.div`
    width: 100%;
    height: 100%;
    background: #FEBE1D;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity .4s;
    padding: 30px;
    display: flex;
    flex-flow: column;
    justify-content: center;
`

const Viagem = styled.div`
    width: 90%;
    height: 35vh;
    background-color: black;
    /* background-image: url(../../imgs/home/${(props)=> props.$imagem}.png); */
    background-image: url(${galaxia});
    background-size: cover;
    padding: 30px;
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    :hover{
        ${Descricao}{
            opacity: 1;
        }
    }
`

const BoxInfos = styled.div` 
    display: flex;
    flex-flow: column;
    text-align: left;
`

const NomeViagem = styled.label`
    color: white;
    text-align: left;
    font-size: 30px;
    width: 80%;
    font-family: Lexend;
    font-weight: 400;
    line-height: 40px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Linha = styled.hr`
    width: 100%;
    border: none;
    height: .5px;
    background-color: rgba(255,255,255,.42);
    margin-top: 20px;
`

const Flex = styled.div`
    display: flex;
    :nth-of-type(1){
        margin-top: 6px;
    }
    align-items: center;
`

const Icone = styled.img`
    width: 25px;
    height: 25px;
    object-position: bottom;
`

const Info = styled.label`
    color: ${(props) => props.$cor || 'white'};
    margin-left: 15px;
    font-size: 20px;
`

const DescricaoTexto = styled.label`
    color: black;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

function Viagens() {

    const [todasViagens, setTodasViagens] = useState([]);
    const [carregandoViagens, setCarregandoViagens] = useState(false);
    const [modalAberto, setModalAberto] = useState(false)

    const abrirModal = () => {
        setModalAberto(true)
    }

    const fecharModal = () => {
        setModalAberto(false)
    }
  
    useEffect(() => {
      RetornarViagens()
  }, []
  )
  
    const RetornarViagens = () => {
      setCarregandoViagens(true)
  
      var axios = require('axios');
  
      var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trips',
        headers: { }
      };
  
      axios(config)
      .then(function (response) {
        setTodasViagens(response.data.trips)
        setCarregandoViagens(false)
      })
      .catch(function (error) {
        console.log(error);
      });
  
    }
    
    return (
        <Secao $cor='#1A1A1A'>
            <Container id='viagens' $paddingRight='10%' $display="flex" $alignitems="center" $justifycontent="center">
                <Coluna1>
                
                    {carregandoViagens ? 'Buscando viagens disponíveis...' :
                        todasViagens.length > 0 ? 
                        <List
                            grid={{column: 2 }}
                            dataSource={todasViagens}
                            pagination={{pageSize: 4}}
                            renderItem={viagem => (
                                <Viagem>    
                                    <BoxInfos>    
                                    <NomeViagem $cor="white">{viagem.name}</NomeViagem>
                                    <Linha /><br />
                                    <Flex><Icone src={calendario} /><Info>{viagem.date}</Info></Flex><br />
                                    <Flex><Icone src={pin} /><Info>{viagem.planet}</Info></Flex>
                                    </BoxInfos>
                                    <Descricao>
                                        <Flex><Icone src={duracao} /><Info $cor="black">{viagem.durationInDays} dias</Info></Flex>
                                        <DescricaoTexto>{viagem.description}</DescricaoTexto>
                                    </Descricao>
                                </Viagem>
                            )}
                        />
                    
                        : 'Nenhuma viagem agendada no momento'
                    }
                </Coluna1>
                <Coluna2>
                    <DivTitulo>
                        <Titulo $textAlign='right' $cor="white" $fontSize="72" $marginBottom="40px">próximas</Titulo>
                        <Titulo $textAlign='right' $cor="#FEBE1D" $fontSize="72" $marginBottom="20px">viagens</Titulo>
                    </DivTitulo>
                    <CaixaBotao onClick={abrirModal} $color={'white'} $corBorda={'white'} $fontSize={'23px'}  $width={'270px'} $height={'60px'}  $marginTop={'25px'}>Quero me inscrever</CaixaBotao>
                </Coluna2>
            </Container>
            <Modal
                title='Inscrever'
                visible={modalAberto}
                onCancel={fecharModal}
                onOk={fecharModal}
            >
                <FormAplicacao viagens={todasViagens} />
            </Modal>  
        </Secao>
    )
}

export default Viagens;
