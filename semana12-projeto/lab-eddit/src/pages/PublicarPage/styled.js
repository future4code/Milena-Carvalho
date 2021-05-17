import styled from 'styled-components'

export const BoxEscreverConteudo = styled.div` 
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    background-color: white;
    display: flex;
`

export const BoxTitulo = styled.input`
    border: 1px solid #efefef;
    width: 100%;
    height: auto;
    outline: none;
    padding: 10px;
    margin-bottom: 10px;
`

export const BoxConteudo = styled.textarea`
    border: 1px solid #efefef;
    width: 100%;
    height: auto;
    outline: none;
    padding: 10px;
`

export const Coluna1 = styled.div`
    flex: 20;
    display: flex;
    flex-flow: column;
    padding: 20px;
`

export const Coluna2 = styled.a`
    flex: 1;
    background: #EFE0E2;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background: #8E325E;
    }
`
