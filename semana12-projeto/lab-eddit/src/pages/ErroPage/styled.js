import styled from 'styled-components'

export const Erro = styled.h1`
    background: linear-gradient(to bottom, #8E325E, #321052);
    font-size: 150px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 0;
`

export const TextoErro = styled.h2`
    color: #321052;
`

export const BtnVoltar = styled.button`
    background: #8E325E;
    color: white;
    border-radius: 50px;
    border: none;
    outline: none;
    width: 130px;
    height: 40px;
    :hover{
        cursor: pointer;
        transform: scale(1.05)
    }
    margin-top: 20px;
`