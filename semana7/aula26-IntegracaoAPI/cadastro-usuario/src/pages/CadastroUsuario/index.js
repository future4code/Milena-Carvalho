import React, {Component} from 'react'
import './cadastro.css'
import {Link} from 'react-router-dom'

class CadastroUsuario extends Component {
    state= {
        inputNome: '',
        inputEmail: ''
    }

    onChangeInput = (event) => {
        if (event.target.id === 'nome'){
            this.setState({inputNome:event.target.value})
        } else {
            this.setState({inputEmail:event.target.value})
    }}

    efetuarCadastro = () => {
        if(this.state.inputEmail == '' && this.state.inputNome == ''){
            alert('Por favor, preencha todos os campos para efetuar o cadastro')
        } else if (this.state.inputEmail == '' && this.state.inputNome != '') {
            alert('Por favor, preencha o campo de e-mail')
        } else if (this.state.inputNome == '' && this.state.inputEmail != '') {
            alert('Por favor, preencha o campo de nome') 
        } else {
            var axios = require('axios');
            var data = JSON.stringify({"name":this.state.inputNome,"email":this.state.inputEmail});

            var config = {
            method: 'post',
            url: 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            headers: { 
                'Authorization': 'milena-carvalho-cruz', 
                'Content-Type': 'application/json'
            },
            data : data
            };

            axios(config)
            .then(function (response) {
            alert('Cadastro efetuado!')
            })
            .catch(function (error) {
            alert('Dados inválidos. Tente novamente!')
            });

        }
    }
    
    render (){
        return (
            <div className='container'>

              

                <div className='boxCadastro'>
                    
                    <div className="boxTitulo">
                        <p>Realizar novo cadastro</p>
                    </div>
                    
                    <div className="containerForm"> 
                        <label>Nome completo</label>
                        <input id='nome' onChange={this.onChangeInput} placeholder='Nome completo' type='text' className="inputUsuario"/>

                        <label>E-mail</label>
                        <input id='email' onChange={this.onChangeInput} placeholder='Ex. joaosilva@contato.com' type='email' className="inputUsuario"/>

                        <div className="botoes"> 
                            <Link to='/lista-de-usuarios'><button className="botao">Lista de Usuários</button></Link>
                            <button onClick={this.efetuarCadastro} className="botao">Efetuar Cadastro</button>
                        </div>
                    </div>
                </div>
                
            </div>


        )

    }
}

export default CadastroUsuario