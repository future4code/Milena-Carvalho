import logo from '../assets/imgs/logo.png'
import styled from 'styled-components'
import { Sessao, Container, Flex} from './components'
import { useHistory } from "react-router-dom"
import { linkFeed, linkPublicar } from '../routes/coordinator'

const Logo = styled.img`
    height: 30%;
    cursor: pointer;

`

const BoasVindas = styled.h4`
    color: #321052;
    font-size: 16px;
    margin: 0;
`

const NomeUsuario = styled.h4`
    color: #8E325E;
    margin: 0px 40px 0px 10px;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
`

const BotaoPost = styled.button`
    background: #8E325E;
    color: white;
    font-size: 16px;
    border-radius: 50px;
    border: none;
    outline: none;
    padding: 8px 20px 8px 20px;
    :hover{
        cursor: pointer;
        transform: scale(1.05)
    }
`

function Header() {
    const history = useHistory()
    return(
        <Sessao>
            <Container $height='18vh' $justifyContent='space-between' $alignItems="center">
                <Logo onClick={() => linkFeed(history)} src={logo} />
                <Flex $alignItems='center'>
                    <BoasVindas>Bem vindo(a),</BoasVindas>
                    <NomeUsuario>{localStorage.getItem('usuario')}</NomeUsuario>
                    <BotaoPost onClick={() => linkPublicar(history)} $marginTop='0px'>Novo post</BotaoPost>
                </Flex>
            </Container>
        </Sessao>
    )
}

export default Header