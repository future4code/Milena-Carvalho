import Header from '../../components/header'
import {useState} from 'react'
import axios from 'axios'
import {linkFeed, linkLogin} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import {BoxEscreverConteudo, Coluna1, Coluna2, BoxTitulo, BoxConteudo} from './styled'
import {Sessao, Container, Flutuante} from '../../components/components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function PublicarPage() {
    const history = useHistory()
    const [inputTitulo, setInputTitulo] = useState('')
    const [inputConteudo, setInputConteudo] = useState('')

    const Logout = () => { 
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        linkLogin(history)    
    }
    
    const onChangeConteudo = (event) => {
        setInputConteudo(event.target.value)
    }

    const onChangeTitulo = (event) => {
        setInputTitulo(event.target.value)
    }

    const publicarPost = () => {
        var data = JSON.stringify({
        "title": inputTitulo,
        "text": inputConteudo
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
        headers: { 
            'Authorization': localStorage.getItem('token'), 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            linkFeed(history) 
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    return (
        <div>
            <Header />
            <Sessao $marginTop="4vh">
                <Container $display="block">
                    
                    
                    <BoxEscreverConteudo>
                        <Coluna1> 
                            <BoxTitulo onChange={onChangeTitulo} placeholder="Título do post"/>
                            <BoxConteudo onChange={onChangeConteudo} placeholder="Escreva aqui..."/>
                        </Coluna1>

                        <Coluna2> 
                            <ArrowForwardIcon onClick={() => publicarPost()} style={{color: 'white', fontSize: '30px'}} />
                        </Coluna2>
                    </BoxEscreverConteudo>
                    
                    <Flutuante onClick={() => Logout()}><ExitToAppIcon style={{color: 'white', fontSize: '30px'}} /></Flutuante>
                </Container>
            </Sessao>
        </div>
    )
}

export default PublicarPage