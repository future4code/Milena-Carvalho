import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Banner from './banner'
import SobreNos from './sobre-nos'
import Viagens from './viagens'
import Contato from './contato'

const MenuLateral = styled.div` 
    position: fixed;
    height: 200px;
    display:flex;
    flex-flow: column;
    justify-content: space-between;
    right: 2.5%;
    bottom: -webkit-calc(50% - 100px);;
    margin-right: 5vw;
    z-index: 99;
`

const BolinhaMenu = styled.a` 
    display: block;
    height: 7px;
    width: 7px;
    border-radius: 100%;
    background-color: #FFFFFF;
    opacity: 0.5;
    :hover {
        background-color: yellow;
        opacity: 1;
        transform: scale(1.5);
    }
    .active span:after {
        background-color: blue;
    }

`

function SiteLoja() {

    return (
        <div>
            <MenuLateral>
                <BolinhaMenu  href='#banner'/>
                <BolinhaMenu  href='#sobre-nos'/>
                <BolinhaMenu  href='#viagens'/>
                <BolinhaMenu  href='#contato'/>
            </MenuLateral>

            <Banner/>
            <SobreNos/>
            <Viagens/>
            <Contato/>
        </div>

    );
}

export default SiteLoja;