import { Link } from "react-router-dom"
import styled from 'styled-components'
import '../../components/antd.css'
import { Secao, Container, Titulo, Input, CaixaDeTexto, CaixaBotao} from '../../components/estilosCompoentes'
import marte from '../../imgs/home/marte.png'
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
    height: 70vh;
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
    height: 30vh;
    background-image: url(${marte});
    padding: 30px;
    position: relative;
    :hover{
        ${Descricao}{
            opacity: 1;
        }
    }
`

const NomeViagem = styled.h4`
    color: white;
    text-align: left;
    font-size: 24px;
    width: 65%;
    font-family: Lexend;
    font-weight: 400;
`

const Linha = styled.hr`
    width: 65%;
    border: none;
    height: .5px;
    background-color: rgba(255,255,255,.42);
    float: left;
`

const Flex = styled.div`
    display: flex;
    :nth-of-type(1){
        margin-top: 10px;
    }
    align-items: center;
`

const Icone = styled.img`
    width: 20px;
    height: 20px;
    object-position: bottom;
`

const Info = styled.label`
    color: ${(props) => props.$cor || 'white'};
    margin-left: 15px;
    font-size: 16px;
`

const DescricaoTexto = styled.p`
    color: black;
    text-align: left;
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
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
                            grid={{ gutter: 1000, column: 2 }}
                            dataSource={todasViagens}
                            pagination={{pageSize: 4}}
                            renderItem={viagem => (
                                <Viagem>        
                                    <NomeViagem $cor="white">{viagem.name}</NomeViagem>
                                    <Linha /><br />
                                    <Flex><Icone src={calendario} /><Info>{viagem.date}</Info></Flex><br />
                                    <Flex><Icone src={pin} /><Info>{viagem.planet}</Info></Flex>
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
