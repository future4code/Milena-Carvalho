import styled from 'styled-components'

export const Sessao = styled.div`
    margin-top: ${(props) => props.$marginTop || '0px'};
`

export const Container = styled.div`
    width: ${(props) => props.$width || '80%'};
    height:  ${(props) => props.$height};
    margin: ${(props) => props.$margin || 'auto'};
    display: ${(props) => props.$display || 'flex'};
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
    flex-flow: ${(props) => props.$flexFlow || 'row'};
`

export const Flex = styled.div`
    display: flex;
    align-items: ${(props) => props.$alignItems};
`

export const Input = styled.input` 
    width: ${(props) => props.$width || '480px'};
    font-size: 16px;
    font-weight: 300;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 0.5px solid #bbbbbb;
    color: #bbbbbb;
    opacity: 0.5;
    margin-top: 40px;
    padding-left: 5px;
    ::placeholder {
        color: #bbbbbb;
    }
    :focus {
        opacity: 1;
    }
`

export const CaixaBotao = styled.button`
    padding: ${(props) => props.$padding || '8px 15px 8px 15px'};
    margin-top: ${(props) => props.$marginTop || '40px'};
    border: 2px solid ${(props) => props.$corBorda || '#8E325E'};
    background-color: transparent;
    color: ${(props) => props.$color || '#8E325E'};
    font-size: ${(props) => props.$fontSize || '16px'};
    :hover{
        background-color: ${(props) => props.$corBackground || '#8E325E'};
        transform: scale(${(props) => props.$scale || '1.08'});
        color: white;
        cursor: pointer;
        border: 2px solid ${(props) => props.$corBorda || '#8E325E'};
    }
`

export const Flutuante = styled.button`
    background: #8E325E;
    border: none;
    outline: none;
    height: 60px;
    width: 60px;
    position: fixed;
    right: 40px;
    bottom: 40px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
    cursor: pointer;
    transform: scale(1.1);
    }
`