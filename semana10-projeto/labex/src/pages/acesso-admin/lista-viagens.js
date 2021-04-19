import { Link } from "react-router-dom"
import styled from 'styled-components'
import {Button, Table, Popconfirm} from 'antd'
import 'antd/dist/antd.css'
import '../../components/antd.css'
import {
    SecaoImagemFundo, Container, Titulo, IconeBotao, AvisoTexto
} from '../../components/estilosCompoentes'
import MenuAdmin from "../../components/menu-admin"
import Xpreto from '../../imgs/x-preto.png'
import abrir from '../../imgs/listaviagens/abrir.png'
import abrirHover from '../../imgs/listaviagens/abrirHover.png'
import excluir from '../../imgs/listaviagens/excluir.png'
import excluirHover from '../../imgs/listaviagens/excluirHover.png'
import { useState, useEffect } from 'react';

const DivTitulos = styled.div`
    display: flex;
    h2:nth-of-type(2){
        margin-left: 15px;
    }
    padding-top: 100px;
`

const DivBotoes = styled.div` 
  display: flex; 
  justify-content: space-around;
  padding-left: 20%;
  padding-right: 20%;

`

function ListaViagens() {

  const [todasViagens, setTodasViagens] = useState([]);
  const [carregandoViagens, setCarregandoViagens] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      RetornarViagens() 
    } else{ 
      window.location.href='/admin'
    }
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

  const DeletarViagem = (id) => {
    var axios = require('axios');
    var config = {
      method: 'delete',
      url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trips/'+id,
      headers: { 
        'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k'
      }
    };

    axios(config)
    .then(function (response) {
      RetornarViagens()
    })
    .catch(function (error) {
      console.log(error);
    });
    }

  // const StatusViagem = (id) => {
  //   var axios = require('axios');

  //   var config = {
  //   method: 'get',
  //   url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trip/'+id,
  //   headers: { 
  //       'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0', 
  //       'Authorization': 'Basic bWlsZW5hLWNhcnZhbGhvLWNydXo6'
  //   }
  //   };
  //   axios(config)
  //   .then(function (response) {
  //     console.log(response.data.trip.approved)
  //     var aprovados = response.data.trip.approved.length
  //     var candidatos = response.data.trip.candidates.length
  //     return{
  //       aprovados,
  //       candidatos
  //     }
  //   })
  //   .catch(function (error) {
  //   console.log(error);
  //   });
  // }

    const columns = [
      {
        title: "Viagem",
        dataIndex: "name",
        key: "viagem",
        width:'5%',
      },
    {
        title: "Planeta",
        dataIndex: "planet",
        key: "Planeta",
        width:'5%',
        },
    {
        title: "Data",
        dataIndex: "date",
        key: "Data",
        width:'5%',
        },
    {
        title: "Duração",
        dataIndex: "durationInDays",
        key: "Duracao",
        width:'5%',
        },
    // {
    //     title: "Pendentes",
    //     dataIndex: "pendentes",
    //     key: "Pendentes",
    //     width:'5%',
    //     },
    // {
    //     title: "Aprovados",
    //     dataIndex: "aprovados",
    //     key: "Aprovados",
    //     width:'5%',
    //     },
        {
        title: "Ações",
        dataIndex: "acoes",
        width:'5%',
        },
    ]
    
    return (
        <div>
        <MenuAdmin></MenuAdmin>
        <SecaoImagemFundo $imagem={Xpreto}>
            <Container $width='85%' $marginLeft='10%'>
                <DivTitulos>
                    <Titulo $cor='white' $marginBottom='90px' $fontSize="42">nossas</Titulo>
                    <Titulo $cor="#FEBE1D" $fontSize="42">viagens</Titulo>
                </DivTitulos>

                {carregandoViagens ? <AvisoTexto>Carregando suas viagens...</AvisoTexto> :
                    todasViagens.length > 0 ? 
                    <Table
                        columns={columns}
                        pagination={{pageSize: 4}}
                        dataSource={todasViagens.map(viagem => ({
                          ...viagem, 
                          // pendentes: console.log(StatusViagem(viagem.id)),
                        acoes: (
                          <DivBotoes> 
                            
                          <Link to={{pathname:'/admin/viagem', state:{idViagem: viagem.id}}}><IconeBotao $width='2vw' $height='2vw' $backgroundSize='60%' $icone={abrir} $iconeHover={abrirHover}></IconeBotao></Link>
                          
                          <Popconfirm placement="top" title='Deseja excluir esta viagem?' onConfirm={() => DeletarViagem(viagem.id)} okText="Sim" cancelText="Não">
                            <IconeBotao $width='2vw' $height='2vw' $backgroundSize='60%' $icone={excluir} $iconeHover={excluirHover}></IconeBotao>
                          </Popconfirm>
                          
                          </DivBotoes>
                          
                        )

                        }))}
                        />
                        : <AvisoTexto>Nenhuma viagem cadastrada.</AvisoTexto>
                }

            </Container>

        </SecaoImagemFundo>
        </div>
        
    )
}

export default ListaViagens;