import React from 'react'
import style from 'styled-components'

const Container = style.div `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Teste = style.div `
    background-color: blue;
    width: 100px;
    heigth: 100px;
`

export default class Formulario extends React.Component {
    
    render(){
        
        return (

            <Container>
                <input Cep placeholder='Digite seu cep'/>
            </Container>

        )
    }
}