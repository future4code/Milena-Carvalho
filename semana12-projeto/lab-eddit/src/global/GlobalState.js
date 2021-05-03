import {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [retornarPosts, setRetornarPosts] = useState([])

    useEffect(() => {
        postsPublicados()
    }, []
    )

    const postsPublicados = () => {
        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts',
        headers: { 
            'Authorization': localStorage.getItem('token')
        }
        };

        axios(config)
        .then(function (response) {
            setRetornarPosts(response.data.posts)
        })
        .catch(function (error) {
        console.log(error);
        });
    }

    const data = {
        retornarPosts,
        setRetornarPosts
    }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState