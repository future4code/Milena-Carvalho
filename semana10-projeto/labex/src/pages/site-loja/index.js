import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'
import Banner from './banner'
import SobreNos from './sobre-nos'
import Viagens from './viagens'
import Contato from './contato'


function SiteLoja() {

    return (
        <div>
            <Header/>
            <Banner/>
            <SobreNos/>
            <Viagens/>
            <Contato/>
        </div>

    );
}

export default SiteLoja;