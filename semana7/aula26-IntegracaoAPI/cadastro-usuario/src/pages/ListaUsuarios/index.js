import React, {Component} from 'react'
import './lista.css'
import {Link} from 'react-router-dom'


class ListaUsuarios extends Component {
    
    state={
        listaDeUsuarios: {},
        carregando: true
    }

    listaAtualizada(){
        this.setState({carregando: true})
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        headers: { 
            'Authorization': 'milena-carvalho-cruz'
        }
        };
        axios(config)
        .then(function (response) {
            this.setState({listaDeUsuarios: response.data, carregando: false})
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount(){
        console.log('montou')
        this.listaAtualizada()
    }
    
    deletarUsuario = (id) => {
        var axios = require('axios');

        var config = {
        method: 'delete',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'+id,
        headers: { 
            'Authorization': 'milena-carvalho-cruz'
        }
        };

        axios(config)
        .then((response) => {
            alert('O usuário foi deletado.')
            this.listaAtualizada()
        })
        .catch(function (error) {
            alert('Erro ao deletar o usuário.')
        });

    }

    render (){
        return (
            <div className='containerUsuarios'>

                <div className='boxUsuarios'>
                    
                    <div className="boxTitulo">
                        <p>Lista de Usuários</p>
                        <label>{this.state.horario}</label>
                    </div>
                    
                    <div className="listaUsuarios"> 
                        
                        <div className="infosUsuario">
                            {
                            this.state.listaDeUsuarios.length > 0 ? 
                                this.state.listaDeUsuarios.map((usuario) => (
                                    <div>
                                        <label>{usuario.name}</label>
                                        <button onClick={() => this.deletarUsuario(usuario.id)}>Deletar Usuário</button>
                                    </div>
                                )) : (
                                    this.state.carregando ? 'Carregando...' : 'Não há usuários cadastrados.'
                                )
                            }
                        </div>
                    
                        <div className="botaoLista"> 
                                <Link to='/'><button className="botao">Novo Usuário</button></Link>                   
                        </div>
                    </div>
                    
                </div>
                
            </div>


        )

    }
}

export default ListaUsuarios