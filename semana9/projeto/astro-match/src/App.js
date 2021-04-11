import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Matchs, Perfis } from './components';
// import {Drawer} from 'antd'
// import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import chat from './imgs/chat.png'
import reset from './imgs/reset.png'
import axios from "axios";

const DivPai = styled.div`
  display:flex;
`

const CorFundo = styled.div`
  background: transparent linear-gradient(125deg, #FF5E96 0%, #8E44AD 100%) 0% 0% no-repeat padding-box;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const BotaoMatchs = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  top: 50px;
  left: 0;  
  box-shadow: 3px 3px 3px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover{
    cursor: pointer;
  }

  @media(max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`

const IconeMatchs = styled.img`
  width: 90%;
`

const ContainerPerfis = styled.div`
  width: auto;
`

const BotaoLimpar = styled.button`
  width: 70px;
  height: 70px;
  border: none;
  outline: none;
  background-color: white;
  border-radius: 10px 0px 0px 10px;
  position: absolute;
  bottom: 50px;
  right: 0;  
  box-shadow: 3px 3px 3px #00000029;
  display: flex;
  justify-content: center;
  align-items: center;
  
  :hover{
    cursor: pointer;
  }

  @media(max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`

const IconeLimpar = styled.img`
  width: 90%;
`

function App() {

  const [visibilidadeMatchs, setVisibilidade] = useState(false)
  const [perfis, setBuscarPerfis] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [carregandoMatchs, setCarregandoMatchs] = useState(false);
  const [matchs, setMatchs] = useState([])

  useEffect(() => {
      BuscarPerfis();
      RetornarMatchs()
  }, []
  )

  const abrirMatchs = () => {
    // visibilidadeMatchs ? setVisibilidade(false) : setVisibilidade(true)
    setVisibilidade(!visibilidadeMatchs)
  }

  
  const BuscarPerfis = () => {
    setCarregando(true)
    var config = {
        method: 'get',
        url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-carvalho-cruz/person',
        headers: { }
        };
    
        axios(config)
        .then(function (response) {
            setBuscarPerfis(response.data.profile);
            console.log(perfis)
            setCarregando(false)
        })
        .catch(function (error) {
        console.log(error);
        });
}

  const EscolherPessoa = (escolha) => {
    var data = JSON.stringify({
    "id": perfis.id,
    "choice": escolha
    });

    var config = {
    method: 'post',
    url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-carvalho-cruz/choose-person',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
        // console.log(response.data.isMatch)
        // if(response.data.isMatch){
        //     message.success('Isso é um Match!')
        // } 
        BuscarPerfis()
        RetornarMatchs()
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  const RetornarMatchs = () => {
    setCarregandoMatchs(true)
    var config = {
      method: 'get',
      url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-carvalho-cruz/matches',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      setMatchs(response.data.matches)
      console.log(matchs)
    setCarregandoMatchs(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const ResetarApi = () => {
    var config = {
      method: 'put',
      url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-carvalho-cruz/clear',
      headers: { }
    };

    axios(config)
    .then(function (response) {
      BuscarPerfis()
      RetornarMatchs()
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  return (
    <DivPai>
    <Matchs largura={visibilidadeMatchs} passarMatchs={matchs} passarCarregandoMatchs={carregandoMatchs}></Matchs>
    <CorFundo>
      <BotaoMatchs onClick={abrirMatchs}><IconeMatchs src={chat}/></BotaoMatchs>
      <ContainerPerfis><Perfis passarPerfis={perfis} passarCarregando={carregando} passarBusca={BuscarPerfis} passarEscolha={EscolherPessoa}/></ContainerPerfis>
      <BotaoLimpar onClick={ResetarApi}><IconeLimpar src={reset}/></BotaoLimpar>
    </CorFundo>
    </DivPai>
    
  );
}

export default App;



{/* <Drawer
          title="Basic Drawer"
          placement="left"
          push={true}
          closable={true}
          onClose={abrirMatchs}
          visible={visibilidadeMatchs}
          key="left"
        ></Drawer> */}