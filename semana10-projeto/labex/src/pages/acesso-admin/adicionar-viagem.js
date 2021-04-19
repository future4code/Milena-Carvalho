import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useState, useEffect } from 'react';

import {
    Container,
    SecaoImagemFundo,
    Titulo,
    CaixaDeSelecao,
    Input,
    CaixaDeTexto,
    CaixaBotao
} from '../../components/estilosCompoentes'
import MenuAdmin from "../../components/menu-admin"
import Xpreto from '../../imgs/x-preto.png'
import { message } from 'antd';

const DivTitulos = styled.div`
    display: flex;
    h2:nth-of-type(2){
        margin-left: 15px;
    }
    padding-top: 100px;
`

const DivFormulario = styled.div`
    padding: 50px;
    width: 100%;
    background-color: #1A1A1A;
    border-radius: 10px;
    display: flex;
    input[type=date]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`

const Coluna1 = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding-right: 15px;
    option{
        background: #1A1A1A;
        outline: none;
    }
`

const Coluna2 = styled.div`
    padding-left: 15px;
    flex: 2;
    input{
        margin-top: 35px;
    }
`

function AdicionarViagem() {

    const planetas = [
        'Mercúrio',
        'Vênus',
        'Marte',
        'Júpiter',
        'Saturno',
        'Urano',
        'Netuno'
    ]  

    const [inputPlaneta, setInputPlaneta] = useState('');
    const [inputData, setInputData] = useState('');
    const [inputDuracao, setInputDuracao] = useState();
    const [inputNomeViagem, setInputNomeViagem] = useState ('');
    const [inputDescricaoViagem, setInputDescricaoViagem] = useState ('');

    const onChangeInputPlaneta = (planeta) => {
        setInputPlaneta(planeta.target.value)
    }

    const onChangeInputData = (calendario) => {
        setInputData(calendario.target.value)
    }

    const onChangeInputDuracao = (duracao) => {
        setInputDuracao(duracao.target.value)
    }

    const onChangeInputNomeViagem= (nomeViagem) => {
        setInputNomeViagem(nomeViagem.target.value)
    }

    const onChangeInputDescricaoViagem= (descricaoViagem) => {
        setInputDescricaoViagem(descricaoViagem.target.value)
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
        } else{ 
          window.location.href='/admin'
        }
    }, []
    )

    const AdicionarViagem = () => { 
        var axios = require('axios');
        var data = JSON.stringify({
        "name": inputNomeViagem,
        "planet": inputPlaneta,
        "date": inputData,
        "description": inputDescricaoViagem,
        "durationInDays": inputDuracao
        });

        var config = {
        method: 'post',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/milena-carvalho-cruz/trips',
        headers: { 
            'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0', 
            'Content-Type': 'application/json'
        },
        data : data
        };

        axios(config)
        .then(function (response) {
            message.success('Viagem cadastrada com sucesso')
            setInputPlaneta('')
            setInputData('')
            setInputDuracao()
            setInputNomeViagem('')
            setInputDescricaoViagem('')
        })
        .catch(function (error) {
            message.error('Verifique se preencheu todos os campos corretamente')
        });
    }

    return (
        <div>
            <MenuAdmin></MenuAdmin>
            <SecaoImagemFundo $imagem={Xpreto}>
                <Container $width='85%' $marginLeft='10%'>
                    <DivTitulos>
                        <Titulo $cor='white' $fontSize="42">adicionar</Titulo>
                        <Titulo $cor="#FEBE1D" $fontSize="42" $marginBottom='90px'>viagem</Titulo>
                    </DivTitulos>
                    <DivFormulario>
                        <Coluna1>
                            <CaixaDeSelecao value={inputPlaneta} onChange={onChangeInputPlaneta} $width="100%">^
                                <option>Selecione um planeta</option>
                                {planetas.map((planeta) => 
                                    <option value={planeta}>{planeta}</option>
                                )}
                            </CaixaDeSelecao>
                            <Input value={inputData} onChange={onChangeInputData} $width="100%" type="date" placeholder="Data" />
                            <Input value={inputDuracao} onChange={onChangeInputDuracao} $width="100%" type="number" placeholder="Número de dias" />
                        </Coluna1>
                        <Coluna2>
                            <Input value={inputNomeViagem} onChange={onChangeInputNomeViagem} $width="100%" type="text" placeholder="Nome da viagem"/>
                            <CaixaDeTexto value={inputDescricaoViagem} onChange={onChangeInputDescricaoViagem} maxLength="150" $width="100%" placeholder="Uma breve descrição da viagem" $height="100px"/>
                            <CaixaBotao onClick={AdicionarViagem} $width="100%" $marginTop="40px" $scale="1">Enviar</CaixaBotao>
                        </Coluna2>
                    </DivFormulario>
                </Container>
            </SecaoImagemFundo>
        </div>
    )
}

export default AdicionarViagem;