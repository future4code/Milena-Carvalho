import React from 'react'; 
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Lixo from '../../assets/imgs/lixo.png'
import Mais from '../../assets/imgs/mais.png'
import Play from '../../assets/imgs/play.png'

const BackgroudColor = styled.div`
    background-color: #2E2E2E;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const ContainerGeral = styled.div`
    width: 80vw;
`

const Header = styled.div`
    margin-top: 70px;
    display:flex;
    justify-content: space-between;
` 

const BuscarPlaylist = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    opacity: .5;
    border: 1px solid #D3D3D3;
    border-radius: 100px;
    color: #D3D3D3;
    width: 270px;
    height: 35px;
    padding: 0px 0px 0px 20px;
    &:focus {
        border: none;
        opacity: 1;
        border: 1px solid #D3D3D3;
        border-radius: 100px;
    }
    ::placeholder {
        color: #D3D3D3;
    }
`

const BotãoNovaPlaylist = styled.button`
    background-color: white;
    border: 1px solid white;
    border-radius: 100px;
    color: #D3D3D3;
    width: 200px;
    height: 35px;
    color: black;
    outline: none;
    &:hover {
           background-color: orange;
           border: 1px solid orange;
           transform: scale(1.1);
           font-weight: 600;
    }
`

const InputNovaPlaylist = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    opacity: .5;
    border: 1px solid #D3D3D3;
    border-radius: 100px 0px 0px 100px;
    color: #D3D3D3;
    width: 200px;
    height: 35px;
    padding: 0px 0px 0px 20px;
    &:focus {
        border: none;
        opacity: 1;
        border: 1px solid #D3D3D3;
    }
    ::placeholder {
        color: #D3D3D3;
    }
`

const BotaoNovaPlaylist = styled.button`
    width: 50px;
    height: 35px;
    border: 1px solid white;
    border-radius: 0px 100px 100px 0px;
    outline: none;
    &:hover {
           background-color: orange;
           border: 1px solid orange;
           transform: scale(1.05);
           font-weight: 600;
    }
`

const DivFormulario = styled.div`
    display:flex;
    align-items: center;
`

const ListaPlaylists = styled.div`
    margin-top: 50px;
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
`

const PlaylistNome = styled.div`
    display: flex;
    flex-flow: column;
    width: 21%;
    margin: 20px;
    `

const IconesPlaylist = styled.div`
    width: 200px;
    display:flex;
    align-self: center;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    top: 0;
    bottom: 0;
    opacity: 0;
    z-index: 22;
`

const BotaoIcone = styled.button`
    background-color: transparent;
    outline: none;
    border: none;
    &:focus {
        border: none;
        outline: none;
    }
`

const IconePequeno = styled.img`
    width: 35px;
`

const IconeGrande = styled.img`
    width: 60px;
`

const ImagemPlaylist = styled.img`
    background-color: black;
    -webkit-box-shadow: 9px 9px 40px -22px rgba(0,0,0,0.82);
    -moz-box-shadow: 9px 9px 40px -22px rgba(0,0,0,0.82);
    box-shadow: 9px 9px 40px -22px rgba(0,0,0,0.82);
`

const DivImagemPlaylist = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    position: relative;
    &:hover ${ImagemPlaylist}{
           opacity: 20%;
    }
    &:hover ${IconesPlaylist} {
        opacity: 100%
    }
`

const Título = styled.label`
    color: white;
    font-size: 25px;
`

class TodasPlaylists extends React.Component {

    state ={
        aparecerFormulario: false,
        aparecerBotao:  true,
        playlists: '',
        inputPlaylist: '',
    }

    criarNovaPlaylist = () => {
        this.setState({aparecerFormulario: true, aparecerBotao: false})
    }

    onChangeNovaPlaylist = (event) => {
        this.setState({inputPlaylist: event.target.value})
    } 

    componentDidMount () {
        this.retornarPlaylist()
    }

    adicionarPlaylist = () => {
        var axios = require('axios');
        var data = JSON.stringify({
        "name": this.state.inputPlaylist
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        headers: { 
            'Authorization': 'milena-carvalho-cruz', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then((response) => {
            alert('Playlist criada!')
            this.retornarPlaylist()
        })
        .catch(function (error) {
            alert('Crie uma playlist válida.');
        });
    }

    deletarPlaylist = (id) => {
        var axios = require('axios');

        var config = {
        method: 'delete',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/'+id,
        headers: { 
            'Authorization': 'milena-carvalho-cruz'
        }
        };
    
    if (window.confirm("Tem certeza que deseja excluir esta playlist?")) {
            axios(config)
            .then((response) => {
                alert('Playlist removida!')
                this.retornarPlaylist()
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    }

    retornarPlaylist = () => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
        headers: { 
            'Authorization': 'milena-carvalho-cruz'
        }
        };
        axios(config)
        .then(function (response) {
            this.setState({playlists: response.data.result.list})   
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render (){
        return (
            <BackgroudColor>
                <ContainerGeral>
                    <Header>
                        <BuscarPlaylist placeholder='Buscar playlist'/>
                        {this.state.aparecerBotao ? 
                            (<BotãoNovaPlaylist onClick={this.criarNovaPlaylist}>Criar nova playlist</BotãoNovaPlaylist>) 
                            : ( 
                            <DivFormulario>
                                <InputNovaPlaylist onChange={this.onChangeNovaPlaylist} placeholder='Nome da nova playlist'/>
                                <BotaoNovaPlaylist onClick={this.adicionarPlaylist}>Criar</BotaoNovaPlaylist>
                            </DivFormulario>
                            )
                        }
                    </Header>
                    <ListaPlaylists>
                        {this.state.playlists.length > 0 ? 
                            this.state.playlists.map ((playlist, i) => (
                            <PlaylistNome>
                                <DivImagemPlaylist>
                                    <IconesPlaylist>   
                                        <IconePequeno src={Mais}/>
                                        <IconeGrande src={Play}/>
                                        <BotaoIcone onClick={() => this.deletarPlaylist(playlist.id)}><IconePequeno src={Lixo}/></BotaoIcone>
                                    </IconesPlaylist>
                                    <ImagemPlaylist src={`https://picsum.photos/400/?random=${i}`}/>
                                </DivImagemPlaylist>
                                <Título>{playlist.name}</Título>
                            </PlaylistNome>
                        )) : 'Você não tem nenhuma playlist'   
                        }   
                    </ListaPlaylists>
                </ContainerGeral>
            </BackgroudColor>
        )

    }
}

export default TodasPlaylists