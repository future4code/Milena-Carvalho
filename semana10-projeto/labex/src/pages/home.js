import { Link } from "react-router-dom"
import styled from 'styled-components'
import {notification, Tooltip,} from 'antd'
import 'antd/dist/antd.css'
import '../components/antd.css'

import {
    Container,
    SecaoImagemFundo
} from '../components/estilosCompoentes'
import Xpreto from '../imgs/x-preto.png'
import logo from '../imgs/logo.png'
import setaDireita from '../imgs/home/seta-direita.png' 
import info from '../imgs/home/info.png'

const Logo = styled.img`
    width: 25%;
    align-self: center;
    margin-bottom: 50px;
`

const DivBotoes = styled.div`
    width: 45vw;
    display: flex;
    a{
        display: block;
        width:48%
    }
    justify-content: space-between;
`

const TextoBranco = styled.label`
    color: white;
    font-size: 35px;
    font-weight: 300;
    cursor: pointer;
`

const TextoAmarelo = styled.label`
    color: #FEBE1D;
    font-size: 35px;
    font-weight: 300;
    cursor: pointer;
`

const SetaDireita = styled.img`
    margin-top: 10px;
`

const BotaoAcessos = styled.button`
    background: #1A1A1A;
    box-shadow: 0px 3px 6px #000000;    
    width: 100%;
    height: 30vh;
    text-align: left;
    padding-left: 3vw;
    outline: none;
    border: none;
    :hover{
        ${TextoAmarelo} {
            color: black;
        }
    background: #FEBE1D;
    cursor: pointer;
    }
`

const BotaoInfo = styled.button`
    position: absolute;
    bottom: 6vh;
    left: 5vw;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: none;
`

const IconeInfo = styled.img`
    width: 40px;
    height: 40px;
    opacity: .5;
    :hover {
        opacity: 1;
    }
`

function Home() {

    const text = <span>Está página existe somente para melhor organização da apresentação de um projeto fictício. Tendo em vista o desenvolvimento de um projeto real, o acesso ao painel admin seria feito por um link direto enquanto a página principal seria o site propriamente dito.</span>;
   
    return (
        <SecaoImagemFundo $imagem={Xpreto}>
            <Container $display='flex' $flexFlow='column' $alignitems='center' $justifycontent='center'>
                <Logo src={logo}/>
                <DivBotoes>
                    <Link to='/admin/'> <BotaoAcessos>
                        <TextoBranco>Painel</TextoBranco>
                        <br/>
                        <TextoAmarelo>Administrativo</TextoAmarelo>
                        <br/>
                        <SetaDireita src={setaDireita}/>
                    </BotaoAcessos> </Link>

                    <Link to='/loja'><BotaoAcessos>
                        <TextoBranco>Site</TextoBranco>
                        <br/>
                        <TextoAmarelo>LabeX</TextoAmarelo>
                        <br/>
                        <SetaDireita src={setaDireita}/>
                    </BotaoAcessos>
                    </Link>
                </DivBotoes>
                
                <Tooltip placement="right" title={text}>
                    <BotaoInfo><IconeInfo src={info}/></BotaoInfo>
                </Tooltip>
            </Container>
        </SecaoImagemFundo>
    )
}

export default Home;