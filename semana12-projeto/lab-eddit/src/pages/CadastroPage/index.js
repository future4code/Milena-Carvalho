import styled from 'styled-components'
import logo from '../../assets/imgs/logo.png'
import { useHistory } from "react-router-dom"
import {linkFeed, linkLogin} from '../../routes/coordinator'
import { Container, Input, CaixaBotao, Sessao } from '../../components/components'
import {useState} from 'react'
import axios from 'axios'
import {message} from 'antd'
import 'antd/dist/antd.css'

const BoxLogin = styled.div` 
    padding: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
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

const DivCadastro = styled.div`
    margin-top: 30px;
    display: flex;
    /* flex-flow: column;
    align-items: center; */

` 

const TextoCadastro = styled.h4`
    font-size: 13px;
    margin-right: 8px;
    color: #370B5B; 
`

const RealizarCadastro = styled.a` 
    font-size: 13px;
    color: #8E325E;
    font-weight: 600;
    :hover{ 
        color: #370B5B;
    }
` 

function CadastroPage() {
    const history = useHistory()
    const [pegarEmail, setPegarEmail] = useState('');
    const [pegarUsuario, setPegarUsuario] = useState('');
    const [pegarSenha, setPegarSenha] = useState('');

    const OnChangeEmail = (email) => {
        setPegarEmail(email.target.value)
    }

    const OnChangeUsuario = (usuario) => {
        setPegarUsuario(usuario.target.value)
    }

    const OnChangeSenha = (senha) => {
        setPegarSenha(senha.target.value)
    }

    const realizarCadastro = () => {
        var data = JSON.stringify({
        "email": pegarEmail,
        "username": pegarUsuario,
        "password": pegarSenha
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup',
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
            message.error('Houve um erro ao realizar o cadastro. Tente novamente!')
        });
    }

    return (
        <Sessao>
            <Container $display='flex' $flexFlow='column' $alignItems='center' $justifyContent='center' $height='100vh'>
                <BoxLogin>
                    <Logo src={logo}/>
                    
                    <DivLogin>
                        <Input onChange={OnChangeEmail} type='email' placeholder="E-mail"></Input>
                        <Input onChange={OnChangeUsuario} type='text' placeholder="Usuário"></Input>
                        <Input onChange={OnChangeSenha} type='password' placeholder="Senha"></Input>
                        
                        <CaixaBotao onClick={() => realizarCadastro()} $width='180px' >Efetuar cadastro</CaixaBotao>
                    </DivLogin>
                    
                    <DivCadastro> 
                        <TextoCadastro>Tem uma conta?</TextoCadastro>
                        <RealizarCadastro onClick={() => linkLogin(history)}>Conecte-se</RealizarCadastro>
                    </DivCadastro>
                </BoxLogin>
            </Container>
        </Sessao>
    )
}

export default CadastroPage;