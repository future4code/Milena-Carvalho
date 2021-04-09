import React, {Component} from 'react'
import styled from 'styled-components'
import not from '../imgs/not.png'
import heart from '../imgs/heart.png'
import teste from '../imgs/teste.png'
// import axios from "axios";

const BoxPerfis = styled.div`
    height: 80vh;
    width: 26vw;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const Perfil = styled.div`
    height: 90%;
    width: 85%;
    flex-flow: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg, #00000000 0%, #00000045 100%);
    border-radius: 30px;
`

const FotoPerfil = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
    opacity: 1;
    ::before {
        display: block;
        content: ""; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: red;
        z-index: 22;
    }
`

const InfosPerfil = styled.div`
    width: 85%;
    display: flex;
    position: absolute;
    bottom: 30px;
    color: white;
    font-size: 30px;
    font-weight: 500;
`

const NomePerfil = styled.label`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const IdadePerfil = styled.label` 
    margin-left: 20px;
    
`

const BoxBranco= styled.div`
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000054;
    border-radius: 30px;
    height: 85%;
    width: 100%;
`

const Botoes = styled.div`
    position: absolute;
    bottom: -40px;
    width: 190px;
    display: flex;
    justify-content: space-between;
`

const Botao = styled.button`
    height: 80px;
    width: 80px;
    border-radius: 100%;
    background-color: white;
    box-shadow: 0px 3px 6px #00000054;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icone = styled.img`
    width: 70%;
    margin-top: 3px;
`

function Perfis() {

    // var axios = require('axios');
    // var config = {
    // method: 'get',
    // url: 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/milena-carvalho-cruz/person',
    // headers: { }
    // };

    // axios(config)
    // .then(function (response) {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    // console.log(error);
    // });


    return (
        <BoxPerfis>
            <Perfil>
                <FotoPerfil src={teste}/> 
                <InfosPerfil>
                    <NomePerfil>Ana Stinson,</NomePerfil>
                    <IdadePerfil>28</IdadePerfil>
                </InfosPerfil>
            
            </Perfil>
            
            <BoxBranco/>
            
            <Botoes>
                <Botao><Icone src={heart}/></Botao>
                <Botao><Icone src={not}/></Botao>
            </Botoes>
            
        </BoxPerfis>
    );
  }
  
  export default Perfis;
  