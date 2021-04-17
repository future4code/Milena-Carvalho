import {Link} from 'react-router-dom'
import styled from 'styled-components'
import simbolo from  '../imgs/menu/simbolo-logo.png'
import {
    IconeBotao
} from '../components/estilosCompoentes'

// icones menu
import home from '../imgs/menu/home.png'
import homeHover from '../imgs/menu/home-hover.png'
import mais from '../imgs/menu/mais.png'
import maisHover from '../imgs/menu/mais-hover.png'
import sair from '../imgs/menu/sair.png'
import sairHover from '../imgs/menu/sair-hover.png'


const BoxAmarelo = styled.div`
    background-color: #FEBE1D;
    height: 100vh;
    width: 5vw;
    position: fixed;
    display: flex;
    flex-flow: column; 
    justify-content: space-between;
`

const SimboloLogo = styled.img`
    width: 60%;    
    align-self: center;
    margin-top: 20px;
`

const BotoesMenu = styled.div`
`

function MenuAdmin() {
    return(
        <BoxAmarelo>
            <SimboloLogo src={simbolo}/>

            <BotoesMenu>
                <Link to='/admin/lista-viagens'><IconeBotao $icone={home} $iconeHover={homeHover}></IconeBotao></Link>
                <Link to='/admin/nova-viagem'><IconeBotao $icone={mais} $iconeHover={maisHover}></IconeBotao></Link>
            </BotoesMenu>

            <IconeBotao $icone={sair} $iconeHover={sairHover}></IconeBotao>

        </BoxAmarelo>
    )
}

export default MenuAdmin