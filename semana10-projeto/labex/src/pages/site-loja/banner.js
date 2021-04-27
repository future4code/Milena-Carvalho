import { Link } from "react-router-dom"
import styled from 'styled-components'
import videoBanner from '../../imgs/home/video.mp4'
import './banner.css'
import logo from '../../imgs/logo.png'
import { CaixaBotao } from "../../components/estilosCompoentes"
import facebook from '../../imgs/redes-sociais/face-branco.png'
import instagram from '../../imgs/redes-sociais/insta-branco.png'
import linkedin from '../../imgs/redes-sociais/linkedin-branco.png'

const DivBanner = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    width: 90%;
    position: absolute;
    top: 0;
    color: white;
    height: 150px;
    display: flex;
    align-items: center;
    z-index: 22;
`

const DivLogo = styled.div`
    flex: 1;
`

const Logo = styled.img`
    height: 40px;
    object-fit: contain;
`

const BotoesMenu = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-around;
`

const BotaoLink = styled.a` 
    color: white;
    font-size: 16px;
    font-weight: 400;
    :hover {
        color: #FEBE1D;
    }
`

const IconeSocial = styled.img`
    width: 25px;
    height: 25px;
    object-fit: cover;
    margin-left: 30px;
    :hover{
        opacity: .85;
        cursor: pointer;
    }
` 

const DivIcones = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Chamada = styled.div` 
    display: flex;
    width: auto;
    position: absolute;
    z-index: 22;
    text-align: center;
    flex-flow: column;
    align-items: center;
`

const TextoChamada = styled.label` 
    font-size: 40px;
    line-height: 65px;
    color: #FFFFFF;
` 

const FiltroBanner = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    background: transparent linear-gradient(0deg, #000000 0%, #11111100 100%) 0% 0% no-repeat padding-box;
`

function Banner() {
    
    return (
        <DivBanner id='banner'>
            <Header> 
             <DivLogo><Logo src={logo}/></DivLogo>
             <BotoesMenu>
                 <BotaoLink href='#sobre-nos'>Sobre nós</BotaoLink>
                 <BotaoLink href='#viagens'>Próximas viagens</BotaoLink>
                 <BotaoLink href='#contato'>Fale conosco</BotaoLink>
             </BotoesMenu>
             <DivIcones>
                <IconeSocial src={facebook} />
                <IconeSocial src={instagram} />
                <IconeSocial src={linkedin} />
             </DivIcones>
            </Header>

            <Chamada>
                <TextoChamada>
                 Para os revolucionários<br/> e prontos para o futuro,<br/>o céu não é o limite.
                </TextoChamada>
                <CaixaBotao $fontSize={'23px'}  $width={'300px'} $height={'60px'}  $marginTop={'25px'}>Viver essa experiência</CaixaBotao>
            </Chamada>

            <FiltroBanner/>
            
            <video class='alturaVideo' autoPlay={true} loop={true} muted={true}>
                <source src={videoBanner} type="video/mp4" />
                </video>
        </DivBanner>

    )
}

export default Banner;