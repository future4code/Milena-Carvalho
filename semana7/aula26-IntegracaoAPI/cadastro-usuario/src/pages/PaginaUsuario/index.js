import React, {Component} from 'react'
import './usuario.css'
import {Link} from 'react-router-dom'


class PaginaUsuario extends Component {
    state={
        idUsuario: this.props.location.state.idUsuario,
        nomeUsuario: this.props.location.state.nomeUsuario,
        emailUsuario: '',
        aparecerInput: false,
        aparecerBotao: true,
        inputNome: this.props.location.state.nomeUsuario,
        inputEmail: ''
    }
    
    componentDidMount(){
        this.pegarInfos()
    }

    editarUsuario = () => {
        this.setState({aparecerInput: true, aparecerBotao: false})
    }

    onChangeInput = (event) => {
        if (event.target.id === 'nome'){
            this.setState({inputNome:event.target.value})
        } else {
            this.setState({inputEmail:event.target.value})
    }}

    salvarEdicao = () => {
        var axios = require('axios');
        var data = JSON.stringify({"name":this.state.inputNome,"email":this.state.inputEmail});

        var config = {
        method: 'put',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'+this.state.idUsuario,
        headers: { 
            'Authorization': 'milena-carvalho-cruz', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            alert('Usuário atualizado.')
            this.setState({aparecerInput: false, aparecerBotao: true})
            this.pegarInfos()
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });    
    }

    deletarUsuario = (id) => {
        if(window.confirm("Tem certeza de que deseja deletar este usuário?")){
      
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
            window.location='/lista-de-usuarios';
        })
        .catch(function (error) {
            alert('Erro ao deletar o usuário.')
        });

        }
    }

    pegarInfos() {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/'+this.state.idUsuario,
        headers: { 
            'Authorization': 'milena-carvalho-cruz'
    }
        };

        axios(config)
        .then(function (response) {
        this.setState({emailUsuario:response.data.email, nomeUsuario:response.data.name, inputEmail:response.data.email})
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render (){  
        return (
            <div className='containerPaginaUsuario'>

                <div className='boxPaginaUsuarios'>
                    
                    <div className="boxTitulo">
                        <p>Perfil de Usuário</p>
                    </div>
                    
                    <div className="listaUsuarios"> 
                        {this.state.aparecerInput ?
                            (<div>
                                <input onChange={this.onChangeInput} id='nome' placeholder='Novo nome' value={this.state.inputNome}/>
                                <input onChange={this.onChangeInput} id='email' placeholder='Novo e-mail'value={this.state.inputEmail}/>
                                <button onClick={this.salvarEdicao}>Salvar edição</button>
                            </div>) : ''
                        }

                        <div className="infosUsuario">
                            <label>{this.state.nomeUsuario}</label>
                            <label>{this.state.emailUsuario}</label>
                        </div>
                    
                            <div className="botaoLista"> 
                                {this.state.aparecerBotao ?
                                    (<button onClick={this.editarUsuario} className="botao">Editar Usuário</button>) : ''
                                }
                                <button onClick={() => this.deletarUsuario(this.state.idUsuario)}>Deletar Usuário</button>              
                            </div>
                            <div className="botaoLista"> 
                                <Link to='/lista-de-usuarios'><button className="botao">Lista de Usuários</button></Link>
                                <Link to='/'><button className="botao">Novo Usuário</button></Link>                     
                            </div>
                    </div>
                    
                </div>
                
            </div>


        )
  
    }
}


export default PaginaUsuario