import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Secao, Container, Titulo, Input, CaixaDeTexto, CaixaBotao} from '../../components/estilosCompoentes'
import facebook from '../../imgs/redes-sociais/face-branco.png'
import instagram from '../../imgs/redes-sociais/insta-branco.png'
import linkedin from '../../imgs/redes-sociais/linkedin-branco.png'

const DivTitulo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const DivFormulario = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
`

const Coluna1 = styled.div`
    flex: 1;
    padding-right: 15px;
`

const Coluna2 = styled.div`
    flex: 2;
    padding-left: 15px;
`

const IconeSocial = styled.img`
    width: 25px;
    height: 25px;
    object-fit: cover;
    :hover{
        opacity: .80;
        cursor: pointer;
    }
` 

const DivIcones = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

function Contato() {
    
    return (
        <Secao>
            <Container id='contato' $display="flex" $paddingRight='10%' $flexFlow="column" $alignitems="center" $justifycontent="center">
                <DivTitulo>
                    <div>
                        <Titulo $cor="white" $fontSize="72" $marginBottom="40px">fale</Titulo>
                        <Titulo $cor="#FEBE1D" $fontSize="72" $marginBottom="20px">conosco</Titulo>
                    </div>
                    <DivIcones>
                        <IconeSocial src={facebook} />
                        <IconeSocial src={instagram} />
                        <IconeSocial src={linkedin} />
                    </DivIcones>
                </DivTitulo>
                <DivFormulario>
                    <Coluna1>
                        <Input $width="100%" type="text" placeholder="Nome" />
                        <Input $width="100%" type="text" placeholder="Assunto" />
                        <Input $width="100%" type="text" placeholder="Telefone" />
                        <Input $width="100%" type="text" placeholder="E-mail" />
                    </Coluna1>
                    <Coluna2>
                        <CaixaDeTexto $height="140px" $marginTop="64px" placeholder="Escreva sua mensagem..."></CaixaDeTexto>
                        <CaixaBotao $width="100%" $marginTop="15px" $scale='1'>Enviar</CaixaBotao>
                    </Coluna2>
                </DivFormulario>
            </Container>
        </Secao>
    )
}

export default Contato;