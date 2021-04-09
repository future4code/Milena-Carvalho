import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { Matchs, Perfis } from './components';
// import {Drawer} from 'antd'
// import 'antd/dist/antd.css';
import { useState } from 'react';
import chat from './imgs/chat.png'
import reset from './imgs/reset.png'

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
`

const IconeLimpar = styled.img`
  width: 90%;
`

function App() {

  const [visibilidadeMatchs, setVisibilidade] = useState(false)

  const abrirMatchs = () => {
    // visibilidadeMatchs ? setVisibilidade(false) : setVisibilidade(true)
    setVisibilidade(!visibilidadeMatchs)
  }


  return (
    <DivPai>
    <Matchs largura={visibilidadeMatchs}></Matchs>
    <CorFundo>
      <BotaoMatchs onClick={abrirMatchs}><IconeMatchs src={chat}/></BotaoMatchs>
      <ContainerPerfis><Perfis/></ContainerPerfis>
      <BotaoLimpar><IconeLimpar src={reset}/></BotaoLimpar>
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