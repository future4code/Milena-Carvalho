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
import {useState, useEffect} from 'react'
import {message} from 'antd'

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

    const [inputEmail, setInputEmail] = useState('')
    const [inputSenha, setInputSenha] = useState('')

    const onChangeInputEmail = (email) => {
        setInputEmail(email.target.value)
    }

    const onChangeInputSenha = (senha) => {
        setInputSenha(senha.target.value)
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            window.location.href = '/admin/lista-viagens'
        }
    }, []
    )
    

    const RealizarLogin = () => {
        var axios = require('axios');
        var data = JSON.stringify({
        "email": "milenacacaudecarvalho@gmail.com",
        "password": "123456"
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            localStorage.setItem('token', response.data.token)
            window.location.href='/admin/lista-viagens'
        })
        .catch(function (error) {
            message.error('Usuário ou senha incorretos')
        });

    }

    return (
        <SecaoImagemFundo $imagem={Xpreto}>
            <Container $display='flex' $flexFlow='column' $alignitems='center' $justifycontent='center'>
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
                        <Input type='email' onChange={onChangeInputEmail} placeholder="E-mail"></Input>
                        <Input type='password' onChange={onChangeInputSenha} placeholder="Senha"></Input>
                        
                        <CaixaBotao onClick={RealizarLogin} $width='180px' >Efetuar login</CaixaBotao>
                    </DivLogin>
                </BoxLogin>
            </Container>
        </SecaoImagemFundo>
    )
}

export default Login;