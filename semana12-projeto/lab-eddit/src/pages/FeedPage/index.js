import {useEffect, useContext} from 'react'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useHistory } from "react-router-dom";
import {linkLogin} from '../../routes/coordinator'
import Header from '../../components/header'
import CardPost from '../../components/cardPost'
import { Sessao, Container, Flutuante } from '../../components/components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { List } from 'antd';

function FeedPage() {
    const history = useHistory()
    const {retornarPosts} = useContext(GlobalStateContext)


    useEffect(() => {
        if(!localStorage.getItem('token')) {
            linkLogin(history)
        }
    }, []
    )

    const Logout = () => { 
        localStorage.removeItem('token')
        localStorage.removeItem('usuario')
        linkLogin(history)    
    }


    return (
        <Sessao>
            <Header />
            <Sessao $marginTop="4vh">
                <Container>
                    <List
                        dataSource={retornarPosts}
                        renderItem={(post) => (
                        <CardPost id={post.id} nomeUsuario={post.username} qtdComentarios={post.commentsCount} titulo={post.title} texto={post.text} votos={post.votesCount}/>
                        )
                        }
                    />                   
                </Container>
                <Flutuante onClick={() => Logout()}><ExitToAppIcon style={{color: 'white', fontSize: '30px'}} /></Flutuante>
            </Sessao>
        </Sessao>
    )
}

export default FeedPage