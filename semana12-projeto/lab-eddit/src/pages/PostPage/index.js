import {useEffect, useState} from 'react'
import { useHistory, useParams } from "react-router-dom"
import axios from 'axios'
import Header from '../../components/header'
import CardPost from '../../components/cardPost'
import CardComentario from '../../components/cardComentario'
import {BoxEscreverComentario, Coluna1, Coluna2, Linha, BoxComentario} from './styled'
import {Sessao, Container, Flutuante} from '../../components/components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {linkLogin} from '../../routes/coordinator'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function PostPage() {

    const history = useHistory()
    const {id} = useParams()
    const [infosPost, setInfosPost] = useState([])
    const [pegarComentarios, setPegarComentarios] = useState([])
    const [inputComentario, setInputComentario] = useState('')

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            linkLogin(history)
        } else {
            detalhesPost()
        }
    }, []
    )

    const Logout = () => { 
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        linkLogin(history)    
    }

    const onChangeComentario = (event) => {
        setInputComentario(event.target.value)
    }
    
    const detalhesPost = () => {
        var config = {
            method: 'get',
            url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/'+id,
            headers: { 
              'Authorization': localStorage.getItem('token')
            }
          };
          
          axios(config)
          .then(function (response) {
              setInfosPost(response.data.post)
              setPegarComentarios(response.data.post.comments)
          })
          .catch(function (error) {
          });
    }

    const publicarComentario = () => {
        var data = JSON.stringify({
            "text": inputComentario
        });

        var config = {
            method: 'post',
            url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/'+id+'/comment',
            headers: { 
                'Authorization': localStorage.getItem('token'), 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            setInputComentario('')
            detalhesPost()
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
                    
                    <CardPost id={infosPost.id} nomeUsuario={infosPost.username} qtdComentarios={infosPost.commentsCount} titulo={infosPost.title} texto={infosPost.text} votos={infosPost.votesCount}/>
                    
                    <BoxEscreverComentario>
                        <Coluna1> 
                            <BoxComentario onChange={onChangeComentario} value={inputComentario} placeholder="Escreva seu comentário" />
                        </Coluna1>

                        <Coluna2 onClick={() => publicarComentario()}> 
                            <ArrowForwardIcon style={{color: 'white', fontSize: '30px'}} />
                        </Coluna2>
                    </BoxEscreverComentario>
                    
                    <Linha/>

                    {pegarComentarios.length > 0 ?         

                        pegarComentarios.map((comentario) => (
                            <CardComentario comentario={comentario} idPost={id}/>
                        ))
                     : ''
                }         
                    <Flutuante onClick={() => Logout()}><ExitToAppIcon style={{color: 'white', fontSize: '30px'}} /></Flutuante>          
                </Container>
            </Sessao>
        </div>
    )
}

export default PostPage