import React from 'react'
import style from 'styled-components'
import ViaCep from 'react-via-cep'

const Container = style.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-flow: column
`

const Teste = style.div `
    background-color: blue;
    width: auto;
    heigth: auto;
    padding: 10px
`

const Cep = style.input `
    background-color: white;
`

const BotaoPesquisar = style.button`
`

const Resultados = style.div`
    background-color: red;
    width: auto;
    heigth: auto;
    padding: 10px;
    display: flex;
    flex-flow: column
`


export default class Formulario extends React.Component {

    state={
        Cep: '',
        Cidade: '',
        UF: '',
        Bairro: '',
        Logradouro: '',
        RespostasCep: false
    }

    pesquisarCep = () => {
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://viacep.com.br/ws/'+this.state.Cep+'/json/',
        headers: { }
        };

        axios(config)
        .then(function (response) {
            this.setState({Cep: response.data.cep, Cidade: response.data.localidade, UF: response.data.uf, Bairro: response.data.bairro, Logradouro: response.data.logradouro, RespostasCep: true})
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    onChangeCep = (event) => {
        this.setState({Cep:event.target.value})
    }
    
    render(){
        
        return (
            <Container>
                <Teste>
                    <Cep onChange={this.onChangeCep} placeholder='Digite seu cep'/>
                    <BotaoPesquisar onClick={this.pesquisarCep}>Pesquisar</BotaoPesquisar>
                </Teste>
                {this.state.RespostasCep ? (
                    <Resultados>
                        <label>Cep: {this.state.Cep}</label>
                        <label>Cidade: {this.state.Cidade}</label>
                        <label>UF: {this.state.UF}</label>
                        <label>Bairro: {this.state.Bairrp}</label>
                        <label>Logradouro: {this.state.Logradouro}</label>
                    </Resultados>
                ) : ''
                }
            </Container>

        )
    }
}