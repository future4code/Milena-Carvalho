import styled from 'styled-components'

export const BoxLogin = styled.div` 
    background-color: white;
    padding: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
`

export const Logo = styled.img`
    margin-top: 20px;
    width: 200px;
    align-self: center;  
    margin-bottom: 20px; 
`

export const DivLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export const DivCadastro = styled.div`
    margin-top: 30px;
    display: flex;
    /* flex-flow: column;
    align-items: center; */

` 

export const TextoCadastro = styled.h4`
    font-size: 13px;
    margin-right: 8px;
    color: #370B5B; 
`

export const RealizarCadastro = styled.a` 
    font-size: 13px;
    color: #8E325E;
    font-weight: 600;
    :hover{ 
        color: #370B5B;
    }
` 