import { Link } from "react-router-dom"
import styled from 'styled-components'
import { SecaoImagemFundo, Container, Titulo, Input, CaixaDeTexto, CaixaBotao} from '../../components/estilosCompoentes'
import Xamarelo from '../../imgs/x-amarelo.png'

const DivTitulo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
`
const Coluna1 = styled.div`
    padding-right: 30px;
    text-align: right;
`

const Coluna2 = styled.div`
    flex: 1;
    padding-left: 30px;
    display: flex;
    flex-flow: column;
`

const Citacao = styled.label`
    color: #BBBBBB;
    font: 30px/49px Lexend;
`

const Creditos = styled.label` 
    color: #BBBBBB;
    font: 18px/49px Lexend;
    font-weight: 300;
`

const TextoSobreNos = styled.label` 
    color: #BBBBBB;
    font-size: 20px;
    width: 450px;
`

function SobreNos() {
    
    return (
        <SecaoImagemFundo id='sobre-nos' $imagem={Xamarelo}>
            <Container $display="flex" $alignitems="center" $justifycontent="center">
                <Coluna1>
                    <Citacao>"O destino do homem é <br/>ir a outro planeta"</Citacao>
                    <br/>
                    <Creditos>(Charles Bolden, NASA)</Creditos>
                </Coluna1>
                <Coluna2>
                    <DivTitulo>
                        <div>
                            <Titulo $cor="white" $fontSize="72" $marginBottom="40px">sobre</Titulo>
                            <Titulo $cor="#FEBE1D" $fontSize="72" $marginBottom="20px">nós</Titulo>
                        </div>
                    </DivTitulo>
                    <TextoSobreNos>
                        Fundados em 2021, sabemos que o planeta Terra não basta para as mentes inovadoras e aventureiras. 
                        <br/>
                        <br/>
                        Por isso, através da organização de viagens aeroespaciais, nosso objetivo é garantir, com segurança, a melhor experiência da vida daqueles que viajam conosco pelos oito planetas de nosso sistema solar. 
                    </TextoSobreNos>
                </Coluna2>
            </Container>
        </SecaoImagemFundo>
    )
}

export default SobreNos;