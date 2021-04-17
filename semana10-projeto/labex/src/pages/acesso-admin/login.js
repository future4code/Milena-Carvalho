import { Link } from "react-router-dom"
import styled from 'styled-components'
import {
    CaixaBotao,
    Container,
    SecaoImagemFundo,
    Input
} from '../../components/estilosCompoentes'
import Xpreto from '../../imgs/x-preto.png'
import setaEsquerda from '../../imgs/login/seta-esquerda.png'
import logo from '../../imgs/logo.png'

const BoxLogin = styled.div` 
    background-color: #1A1A1A;
    width: 550px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

const DivBotaoVoltar = styled.div`
    display: flex;
    float: left;
    width: 480px;
`

const BotaoVoltar = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    opacity: 0.5;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    :hover{
        opacity: 1;
        cursor: pointer;
    }
`

const SetaEsquerda = styled.img`
    width: 15px;
    margin-right: 5px;
`


const Logo = styled.img`
    margin-top: 20px;
    width: 200px;
    align-self: center;  
    margin-bottom: 20px; 
`

const DivLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

function Login() {
    
    return (
        <SecaoImagemFundo $imagem={Xpreto}>
            <Container $display='flex' $flexflow='column' $alignitems='center' $justifycontent='center'>
                <BoxLogin>
                    <DivBotaoVoltar>
                        <Link to=''>
                            <BotaoVoltar>
                                <SetaEsquerda src={setaEsquerda}></SetaEsquerda>Voltar
                            </BotaoVoltar>   
                        </Link>                    
                    </DivBotaoVoltar>

                    <Logo src={logo}/>
                    
                    <DivLogin>
                        <Input  placeholder="E-mail"></Input>
                        <Input  placeholder="Senha"></Input>
                        
                        <Link to='/admin/lista-viagens' ><CaixaBotao $width='180px' >Efetuar login</CaixaBotao></Link>
                    </DivLogin>
                </BoxLogin>
            </Container>
        </SecaoImagemFundo>
    )
}

export default Login;