import React, {Component} from 'react'
import styled from 'styled-components'
import logo from '../imgs/logo.png'

function Matchs(props) {

const BoxMatchs = styled.div`
    height: 100vh;
    width: ${props.largura ? '40vw' : '0vw'} ;
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;

    @media(max-width: 1024px) {
        width: ${props.largura ? '80vw' : '0vw'}
    }
`

const Matchs = styled.div`
    width: 85%;
`

const InfosPerfil = styled.div`
    display: flex;
    align-items: center;
`

const FotoPerfil = styled.img`
    height: 55px;
    width: 55px;
    border-radius: 100%;
    margin: 0;
    object-fit: cover;
`

const NomePerfil = styled.label`
    margin-left: 20px;
`

const Linha = styled.hr`
    margin-top: 20px;
    margin-bottom: 20px;
    opacity: 0.5;
`

const Logo = styled.img`
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
`
console.log(props.passarMatchs)
    return (
        <BoxMatchs>
            <Logo src={logo}/>
            <Matchs>
                {props.passarCarregandoMatchs ? 'Carregando seus matchs...' : 
                    props.passarMatchs.length > 0 ? 
                        props.passarMatchs.map(perfilMatch => {  return (  
                        <div>
                        <InfosPerfil>
                            <FotoPerfil src={perfilMatch.photo}/>
                            <NomePerfil>{perfilMatch.name}</NomePerfil>
                        </InfosPerfil>
                        <Linha/>    
                        </div>)
                    }) : <label>Poxa, você ainda não tem nenhum match. <br/> Mas, calma, os astros vão ter ajudar!</label>
            
            
            }
            </Matchs>
        </BoxMatchs>
    );
  }
  
  export default Matchs;
  