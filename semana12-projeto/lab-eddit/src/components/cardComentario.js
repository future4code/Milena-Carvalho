import { useHistory} from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styled from 'styled-components'


const CardComentarios = styled.div`
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    padding: 20px;
    background-color: white;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin-bottom: 30px;
`

const NomeUser = styled.label`
    color: #321052;
    font-size: 18px;
`

const DivVotosUsuario = styled.div` 
    display: flex;
    align-items: center;
` 

const DivVotos = styled.div` 
    display: flex;
    align-items: center;
    margin-right: 20px;
    svg {
        opacity: .9;
        :hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(1.1)
        }
    }
`

const NumVotos = styled.label` 
    margin: 0px 10px 0px 10px;
` 

const TextoComentario = styled.p`
    color: #321052;
    display: -webkit-box;
    margin: 15px 0px 0px 0px;
`

function CardComentario(props) {

    const [numeroVotos, setNumeroVotos] = useState(props.comentario.votesCount)

    const votarComentario = (voto, idComentario) => { 
        var data = JSON.stringify({
        "direction": voto
        });

        var config = {
        method: 'put',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/'+props.idPost+'/comment/'+idComentario+'/vote',
        headers: { 
            'Authorization': localStorage.getItem('token'), 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            if(voto == 1) {
                setNumeroVotos(numeroVotos + 1)
            } else {
                setNumeroVotos(numeroVotos - 1)
            }
        })
        .catch(function (error) {
        console.log(error);
        });

    }

    return (
        <CardComentarios>
            <DivVotosUsuario> 
                <DivVotos>
                    <ArrowUpwardIcon onClick={() => votarComentario(1, props.comentario.id)} style={{color: numeroVotos > 0 ? '#8E325E' : '#CC8AAA', fontSize:'25px'}}/>
                    <NumVotos>{numeroVotos}</NumVotos>
                    <ArrowDownwardIcon onClick={() => votarComentario(-1, props.comentario.id)} style={{color: numeroVotos < 0 ? '#8E325E' : '#CC8AAA', fontSize:'25px'}}/>
                </DivVotos>
                <NomeUser>{props.comentario.username}</NomeUser>
            </DivVotosUsuario>
            <TextoComentario>{typeof(props.comentario.text) ==='string' ? props.comentario.text : "Não é possível exibir este comentário" }</TextoComentario>
        </CardComentarios>
        )

}


export default CardComentario