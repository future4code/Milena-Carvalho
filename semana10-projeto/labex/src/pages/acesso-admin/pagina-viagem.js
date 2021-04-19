import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import {Tabs, Table, message} from 'antd'
import 'antd/dist/antd.css'
import '../../components/antd.css'
import {
    SecaoImagemFundo, Container, Titulo, AvisoTexto
} from '../../components/estilosCompoentes'
import MenuAdmin from "../../components/menu-admin"
import Xpreto from '../../imgs/x-preto.png'
import local from '../../imgs/infosviagem/local.png' 
import calendario from '../../imgs/infosviagem/data.png' 
import duracao from '../../imgs/infosviagem/duracao.png' 
import check from '../../imgs/pagina-viagem/aprovar.png'
import checkHover from '../../imgs/pagina-viagem/aprovarHover.png'
import recusar from '../../imgs/pagina-viagem/excluir.png'
import recusarHover from '../../imgs/pagina-viagem/excluirHover.png'

const DivTitulos = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 100px;
`

const DivInfosViagem = styled.div` 
    display: flex;
    height: 130px;
    float: left;
    width: 32%;
`

const BoxInfosBasicas = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    width: 40%;
`

const LinhaInfos = styled.div`
    display: flex;
    align-items: center;
`

const IconeInfo = styled.img`
    height: 25px;
    margin-right: 15px;
`

const TextoInfo = styled.label`
    color: white;
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    white-space: nowrap;
`

const BoxDescrição = styled.label`
    color: white;
    font-size: 18px;
    width: auto;
    height: 120px;
    font-weight: 300;
    line-height: 25px;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const LinhaVertical = styled.hr` 
    height: 130px;
    margin: 0px 30px 0px 30px;
    border: 1px solid #393939;
`

const ListaPassageiros = styled.div`
    margin-top: 100px;
    width: 100%;
    margin-bottom: 150px;
`

const BoxAprovados = styled.div` 
    width: 100%;
    margin: auto;
`

const BoxPendentes = styled.div` 
    display: grid; 
    justify-content: space-between;
    grid-row-gap: 60px;
    margin: 60px;
    grid-template-columns: 30% 30% 30%;
`

const Card = styled.div`
    padding: 30px;
    padding-top: 50px;
    background: #000000;
    min-height: 400px;
    width: 100%;
    box-shadow: 0px 3px 6px #141414;
` 

const DivInfos = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    padding-right: 50px;
`

const DivBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`

const Info = styled.label`
    color: rgba(255,255,255,.43);
    font-size: 16px;
    font-weight: 300;
`

const Conteudo = styled.label`
    color: white;
    font-size: 16px;
`

const Linha = styled.hr`
    width: 100%;
    height: .5px;
    border: none;
    background: #393939;
    margin-top: 30px;
    margin-bottom: 30px;
`

const Descricao = styled.p`
    color: white;
    font-size: 16px;
    line-height: 25px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Icone = styled.div`
    width: 40%;
    height: 40%;
    background-image: url(${(props) => props.$background});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const BotaoIcone = styled.button`
    width: ${(props) => props.$width || '100px'};
    height:  50px;
    margin-top: 0px;
    border: 1px solid #393939;
    background-color: transparent;
    display: flex;
    align-items: center;
    color: #393939;
    font-size: 14px;
    font-weight: 500;
    :hover{
        border-color: ${(props) => props.$cor};
        color: ${(props) => props.$cor};
        cursor: pointer;
        ${Icone}{
            background-image: url(${(props) => props.$backgroundHover})
        }
    }
`
const { TabPane } = Tabs;

function PaginaViagem(props) {

    
    const [infosViagem, setInfosViagem] = useState({})
    const [carregandoCandidatos, setCarregandoCandidatos] = useState(false);


    useEffect(() => {
        if(localStorage.getItem('token')) {
          DetalhesViagem() 
        } else{ 
          window.location.href='/admin'
        }
    }, []
    )
    
    const DetalhesViagem = () => {
        setCarregandoCandidatos(true)
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trip/'+props.location.state.idViagem,
        headers: { 
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0', 
            'Authorization': 'Basic bWlsZW5hLWNhcnZhbGhvLWNydXo6'
    }
    };
    axios(config)
    .then(function (response) {
        setInfosViagem(response.data.trip)
        setCarregandoCandidatos(false)
    })
    .catch(function (error) {
    console.log(error);
    });
    }

    const AnalisarCandidato = (idCandidato, aprovado) => {
        var axios = require('axios');
        var data = JSON.stringify({
        "approve": aprovado
        });

        var config = {
        method: 'put',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trips/'+props.location.state.idViagem+'/candidates/'+idCandidato+'/decide',
        headers: { 
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            if(aprovado) {
                message.success('Candidato aprovado com sucesso!')
            } else { message.error ('Candidatura reprovada.')}
            DetalhesViagem()
        })
        .catch(function (error) {
        console.log(error);
        });

    }

      const columns = [
      {
          title: "Nome",
          dataIndex: "name",
          key: "nome",
          width:'5%',
          },
      {
          title: "Idade",
          dataIndex: "age",
          key: "idade",
          width:'5%',
          },
      {
          title: "Profissão",
          dataIndex: "profession",
          key: "profissao",
          width:'5%',
          },
      {
          title: "País",
          dataIndex: "country",
          key: "pais",
          width:'5%',
          },
      ]
    
    return (
        <div>
        <MenuAdmin></MenuAdmin>
        <SecaoImagemFundo $imagem={Xpreto} $backgroundSize={'none'}>
            <Container $width='85%' $marginLeft='10%' $display='flex' $flexFlow='column' $height='auto'>
                <DivTitulos>
                    <Titulo $cor="#FEBE1D" $marginBottom='20px' $fontSize="25">viagem</Titulo>
                    <br/>
                    <Titulo $cor='white'  $fontSize="42" $marginBottom='50px'>{infosViagem.name}</Titulo> 
                </DivTitulos>
                <DivInfosViagem>
                    <BoxInfosBasicas>
                        <LinhaInfos>
                            <IconeInfo src={local}/>
                            <TextoInfo>{infosViagem.planet}</TextoInfo>
                        </LinhaInfos>
                        <LinhaInfos>
                            <IconeInfo src={calendario}/>
                            <TextoInfo>{infosViagem.date}</TextoInfo>
                        </LinhaInfos>
                        <LinhaInfos>
                            <IconeInfo src={duracao}/>
                            <TextoInfo>{infosViagem.durationInDays} dias</TextoInfo>
                        </LinhaInfos>
                    </BoxInfosBasicas>
                    <LinhaVertical/>
                    <BoxDescrição>
                    {infosViagem.description}
                    </BoxDescrição>
                </DivInfosViagem>

                <ListaPassageiros>
                    <Tabs type="card">
                    <TabPane tab="Inscritos aprovados" key="1" styled={{textAlign:'center'}}>
                        
                        <BoxAprovados>
                            <Table
                                columns={columns}
                                dataSource={infosViagem.approved}
                                pagination={{pageSize: 10}}
                            />
                        </BoxAprovados>
                    </TabPane>

                    <TabPane tab="Inscritos pendentes" key="2">
                        <BoxPendentes> 
                            {carregandoCandidatos ? <AvisoTexto>Buscando candidatos...</AvisoTexto> : 
                            infosViagem.candidates !== undefined &&
                            infosViagem.candidates.length > 0 ? 
                            infosViagem.candidates.map(candidato => (
                            <Card>
                                <Titulo $cor="#FEBE1D" $fontSize="25" $marginBottom="30px" $fontWeight='500'>{candidato.name},</Titulo>
                                <Titulo $cor="white" $fontSize="18" $fontWeight='500'>{candidato.age}</Titulo>
                                <DivInfos>
                                    <div>
                                        <Info>Profissão</Info><br />
                                        <Conteudo>{candidato.profession}</Conteudo>
                                    </div>
                                    <div>
                                        <Info>País</Info><br />
                                        <Conteudo>{candidato.country}</Conteudo>
                                    </div>
                                </DivInfos>
                                <Linha />
                                <Descricao>{candidato.applicationText}</Descricao>
                                <DivBotoes>
                                    <BotaoIcone onClick={() => AnalisarCandidato(candidato.id, true)} $alignitems="center" $cor="#00F2C3" $display="flex" $width="48%" $backgroundHover={checkHover}><Icone $background={check} ></Icone>Aprovar</BotaoIcone>
                                    <BotaoIcone onClick={() => AnalisarCandidato(candidato.id, false)} $alignitems="center" $cor="#F04061" $display="flex" $width="48%" $backgroundHover={recusarHover}><Icone $background={recusar} ></Icone>Recusar</BotaoIcone>
                                </DivBotoes>
                            </Card>)) : <AvisoTexto>Ainda não há nenhum candidato.</AvisoTexto>
                            }
                        </BoxPendentes>
                    </TabPane>
                    </Tabs>
                </ListaPassageiros>
            </Container>
        </SecaoImagemFundo>
        </div>
        
    )
}

export default PaginaViagem;
