import { useState, useEffect } from 'react'
import { Input, CaixaDeSelecao, Titulo, CaixaBotao } from '../../components/estilosCompoentes'
import styled from 'styled-components'
import './modal.css'
import { message } from 'antd'

const DivForm = styled.div`
    option{
        background: #1A1A1A;
        outline: none;
    }
`


function FormAplicacao(props) {

    const [viagem, setViagem] = useState('')
    const [nome, setNome] = useState('')
    const [profissao, setProfissao] = useState('')
    const [pais, setPais] = useState('')
    const [descricao, setDescricao] = useState('')
    const [idade, setIdade] = useState('')

    const onChangeViagem = (event) => {
        setViagem(event.target.value)
    }

    const onChangeIdade = (event) => {
        setIdade(event.target.value)
    }

    const onChangeNome = (event) => {
        setNome(event.target.value)
    }

    const onChangeProfissao = (event) => {
        setProfissao(event.target.value)
    }

    const onChangePais = (event) => {
        setPais(event.target.value)
    }

    const onChangeDescricao = (event) => {
        setDescricao(event.target.value)
    }

    const Inscrever = () => {
        var axios = require('axios');
        var data = JSON.stringify({
          "name": nome,
          "age": idade,
          "applicationText": descricao,
          "profession": profissao,
          "country": pais
        });
        
        var config = {
          method: 'post',
          url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trips/'+viagem+'/apply',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          message.success('Inscrição realizada com sucesso')
          setViagem('')
          setNome('')
          setIdade('')
          setProfissao('')
          setPais('')
          setDescricao('')
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
        <DivForm>
            <Titulo $cor="white" $fontSize="28">Inscrição</Titulo>
                <CaixaDeSelecao onChange={onChangeViagem} value={viagem}>
                    <option>Selecione uma viagem</option>
                    {props.viagens.map(viagem => (
                        <option value={viagem.id}>{viagem.name}</option>
                    ))}
                </CaixaDeSelecao>
                <Input type="text" placeholder="Nome" value={nome} onChange={onChangeNome} />
                <Input type="text" placeholder="Idade" value={idade} onChange={onChangeIdade} />
                <Input type="text" placeholder="Profissão" value={profissao} onChange={onChangeProfissao} />
                <Input type="text" placeholder="País" value={pais} onChange={onChangePais} />
                <Input type="text" placeholder="Uma breve descrição" value={descricao} onChange={onChangeDescricao} />
                <CaixaBotao onClick={Inscrever} $width="100%" $scale="1">Enviar</CaixaBotao>
        </DivForm>
    )
}

export default FormAplicacao;
