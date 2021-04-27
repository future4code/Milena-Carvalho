import React, {Component, useEffect, useState} from 'react'
import styled from 'styled-components'
import not from '../imgs/not.png'
import heart from '../imgs/heart.png'
import teste from '../imgs/teste.png'
import axios from "axios";
import {message} from 'antd';
import { PresetColorTypes } from 'antd/lib/_util/colors'

const BoxPerfis = styled.div`
    height: 80vh;
    width: 26vw;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    @media(max-width: 1024px) {
        width: 80vw;
        height: 70vh;
    }
`

const Descricao = styled.div`
    height: 0;
    overflow: hidden;
    /* position: absolute; */
    /* z-index: 34; */
    /* bottom: 0; */
    font-size: 20px;
    font-weight: 400;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
    border-radius: 30px;
    ::before {
        display: block;
        content: ""; 
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent linear-gradient(180deg, #00000000 0%, #00000045 100%) 0% 0% no-repeat padding-box;
        z-index: 22;
        border-radius: 30px;
    }
    :hover{
        :before{
            background: transparent linear-gradient(180deg, #00000000 0%, #00000080 100%) 0% 0% no-repeat padding-box;
        }
        ${Descricao} {height: auto}
    }
`

const PerfilVazio = styled.div`
    height: 90%;
    width: 85%;
    flex-flow: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 30px;
    text-align: center;
`

const FotoPerfil = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 30px;
    opacity: 1;
`

const InfosPerfil = styled.div`
    width: 85%;
    display: flex;
    flex-flow: column;
    position: absolute;
    bottom: 30px;
    color: white;
    font-size: 30px;
    font-weight: 500;
    z-index: 34;
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
    
    @media(max-width: 1024px) {
        bottom: -30px;
        width: 150px;
    }
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
    outline:none;
    :hover{
        cursor: pointer;
    }

    @media(max-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`

const Icone = styled.img`
    width: 70%;
    margin-top: 3px;
`

function Perfis(props) {

    return (
        <BoxPerfis>
            {props.passarCarregando ? <PerfilVazio>Carregando perfil...</PerfilVazio> : (
                props.passarPerfis ? 
                <Perfil>
                        <FotoPerfil src={props.passarPerfis.photo}/> 
                        <InfosPerfil>
                            <div>
                                <NomePerfil>{props.passarPerfis.name},</NomePerfil>
                                <IdadePerfil>{props.passarPerfis.age}</IdadePerfil>
                            </div>
                            <Descricao>{props.passarPerfis.bio}</Descricao>
                        </InfosPerfil>
                </Perfil>
                :   <PerfilVazio>
                        Poxa, não encontramos nenhum perfil 
                        <br/>disponível no momento :(
                        <br/>
                        <br/>
                        Mas, não desanime. Volte mais tarde!
                    </PerfilVazio>
            )
            }
                   
            
            <BoxBranco/>
            
            <Botoes>
                <Botao onClick={() => props.passarEscolha(true)}><Icone src={heart}/></Botao>
                <Botao onClick={() => props.passarEscolha(false)}><Icone src={not}/></Botao>
            </Botoes>
            
        </BoxPerfis>
    );
  }
  
  export default Perfis;
  