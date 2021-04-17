import styled from 'styled-components'

export const Secao = styled.div`
    background-color: ${(props) => props.$cor || 'black'};
    width: 100%;
    min-height: 100vh;
`

export const SecaoImagemFundo = styled.div`
    min-height: 100vh;
    width: 100%;
    background-image: url(${(props) => props.$imagem});
    background-size: 100vh;
    background-repeat: no-repeat;
    background-position: top right;
    background-color: black;
`

export const Container = styled.div`
    width: 90vw;
    height: 100vh;
    margin: auto;
    display: ${(props) => props.$display || 'block'};
    justify-content: ${(props) => props.$justifycontent || 'flex-start'};
    align-items: ${(props) => props.$alignitems || 'flex-start'};
    flex-flow: ${(props) => props.$flexflow || 'row'};
`

export const Titulo = styled.h2`
    color: ${(props) => props.$cor || 'white'};
    font-size: ${(props) => props.$fontSize}px;
    line-height: ${(props) => props.$fontSize/2}px;
    margin-bottom: ${(props) => props.$marginBottom || '0px'};
`

export const CaixaDeTexto = styled.textarea` 
    width: ${(props) => props.$width || '100%'};
    height: ${(props) => props.$height || '300px'};
    font-size: 16px;
    font-weight: 300;
    outline: none;
    background-color: transparent;
    border: 0.5px solid #bbbbbb;
    color: white;
    opacity: 0.5;
    margin-top: ${(props) => props.$marginTop || '40px'};
    padding: 10px;
    padding-left: 10px;
    ::placeholder {
        color: #bbbbbb;
    }
    :focus {
        opacity: 1;
    }
`

export const Input = styled.input` 
width: ${(props) => props.$width || '480px'};
font-size: 16px;
font-weight: 300;
border: none;
outline: none;
background-color: transparent;
border-bottom: 0.5px solid #bbbbbb;
color: white;
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

export const CaixaDeSelecao = styled.select` 
    width: ${(props) => props.$width || '480px'};
    font-size: 16px;
    font-weight: 300;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 0.5px solid #bbbbbb;
    color: white;
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
    width: ${(props) => props.$width || '100px'};
    height: 50px;
    margin-top: ${(props) => props.$marginTop || '50px'};
    border: 2px solid ${(props) => props.$corBorda || '#FEBE1D'};
    background-color: transparent;
    color: #FEBE1D;
    font-size: ${(props) => props.$fontSize || '16px'};
    :hover{
        background-color: ${(props) => props.$corBackground || '#FEBE1D'};
        transform: scale(${(props) => props.$scale || '1.05'});
        color: black;
        font-weight: 600;
        cursor: pointer;
    }
`

export const IconeBotao = styled.button`
    width: 5vw;
    height: 5vw;
    background-color: transparent;
    border: none;
    outline: none;
    background-image: url(${(props) => props.$icone});
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
    :hover{
        background-image: url(${(props) => props.$iconeHover});
        cursor: pointer;
    }
` 