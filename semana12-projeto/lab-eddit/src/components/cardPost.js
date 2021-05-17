import { useHistory, useLocation } from "react-router-dom";
import {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Flex } from './components'
import AddCommentIcon from '@material-ui/icons/AddComment';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { linkPost } from '../routes/coordinator';

const Card = styled.div`
    width: 100%;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    margin-bottom: 20px;
    background-color: white;
`

const Coluna1 = styled.div`
    background: #8E325E;
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 20px;
    svg {
        opacity: .9;
        :hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(1.1)
        }
    }
`

const Coluna2 = styled.div`
    flex: 20;
    padding: 20px;
    :hover{
        cursor: ${(props) => props.$cursor || 'pointer'};
    }
`

const NomeUser = styled.label`
    color: #321052;
    font-size: 18px;
`

const TituloPost = styled.h2`
    color: #321052;
    font-weight: 700;
`

const DescricaoPost = styled.p`
    color: #321052;
    display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical; 
    // text-overflow: ellipsis; 
    margin-bottom: 30px;
`

const NumComentarios = styled.label`
    color: #D1D1D1;
    margin-left: 10px;
    font-size: 18px;
`

const NumVotos = styled.label` 
    color: white;
    font-weight: 600;
`  


function CardPost(props) {
    const history = useHistory()
    const location = useLocation()
    const [numeroVotos, setNumeroVotos] = useState(props.votos)

    const votarPost = (voto) => { 
        var data = JSON.stringify({
        "direction": voto
        });

        var config = {
        method: 'put',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/'+props.id+'/vote',
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

    return(
        <Card>
            <Flex>
                <Coluna1>
                    <ArrowUpwardIcon onClick={() => votarPost(1)} style={{color: numeroVotos > 0 ? 'white' : '#CC8AAA', fontSize:'25px'}}/>
                    <NumVotos>{numeroVotos}</NumVotos>
                    <ArrowDownwardIcon onClick={() => votarPost(-1)} style={{color: numeroVotos < 0 ? 'white' : '#CC8AAA', fontSize:'25px'}}/>
                </Coluna1>

                <Coluna2 onClick={()=>linkPost(history, props.id)}>
                    <NomeUser>{props.nomeUsuario}</NomeUser>
                    <TituloPost>{props.titulo}</TituloPost>
                    <DescricaoPost>{typeof(props.texto) ==='string' ? props.texto : "Não é possível exibir este post" }</DescricaoPost>

                    {
                        location.pathname == '/feed' ? (
                            <Flex>
                                <AddCommentIcon style={{color: '#D1D1D1'}} />
                                <NumComentarios>{props.qtdComentarios}</NumComentarios>
                            </Flex>
                        ) : ''
                    }
                </Coluna2>
            </Flex>
        </Card>
    )
}

export default CardPost