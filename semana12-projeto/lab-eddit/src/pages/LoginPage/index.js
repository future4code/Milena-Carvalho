import styled from 'styled-components'
import logo from '../../assets/imgs/logo.png'
import { useHistory } from "react-router-dom"
import {linkFeed, linkCadastro} from '../../routes/coordinator'
import { Container, Input, CaixaBotao, Sessao } from '../../components/components'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {message} from 'antd'
import 'antd/dist/antd.css'
import {BoxLogin, Logo, DivLogin, DivCadastro, TextoCadastro, RealizarCadastro} from './styled'



function LoginPage() {
    const history = useHistory()
    const [pegarEmail, setPegarEmail] = useState('');
    const [pegarSenha, setPegarSenha] = useState('');

    const OnChangeEmail = (email) => {
        setPegarEmail(email.target.value)
    }

    const OnChangeSenha = (senha) => {
        setPegarSenha(senha.target.value)
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
            linkFeed(history)
        }
    }, []
    )

    const RealizarLogin = () => {
        var data = JSON.stringify({
        "email": pegarEmail,
        "password": pegarSenha
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('usuario', response.data.user.username)
            linkFeed(history)           
        })
        .catch(function (error) {
            message.error('Usuário ou senha incorretos')
        });
    }

    return (
        <Sessao>
            <Container $display='flex' $flexFlow='column' $alignItems='center' $justifyContent='center' $height='100vh'>
                <BoxLogin>
                    <Logo src={logo}/>
                    
                    <DivLogin>
                        <Input type='email' onChange={OnChangeEmail} placeholder="E-mail"></Input>
                        <Input type='password' onChange={OnChangeSenha} placeholder="Senha"></Input>
                        
                        <CaixaBotao onClick={() => RealizarLogin()} $width='180px' >Efetuar login</CaixaBotao>
                    </DivLogin>
                    
                    <DivCadastro> 
                        <TextoCadastro>Não tem uma conta?</TextoCadastro>
                        <RealizarCadastro onClick={() => linkCadastro(history)}>Cadastre-se</RealizarCadastro>
                    </DivCadastro>
                </BoxLogin>
            </Container>
        </Sessao>
    )
}

export default LoginPage;