import { Link } from "react-router-dom"
import styled from 'styled-components'
import {
    Container,
    SecaoImagemFundo,
    Titulo,
    CaixaDeSelecao,
    Input,
    CaixaDeTexto,
    CaixaBotao
} from '../../components/estilosCompoentes'
import MenuAdmin from "../../components/menu-admin"
import Xpreto from '../../imgs/x-preto.png'
import { Select } from 'antd';

const DivTitulos = styled.div`
    display: flex;
    h2:nth-of-type(2){
        margin-left: 8px;
    }
    padding-top: 100px;
    padding-left: 8%;
`

const DivFormulario = styled.div`
    margin-left: 8%;
    margin-top: 100px;
    padding: 50px;
    width: 90%;
    background-color: #1A1A1A;
    border-radius: 10px;
    display: flex;
    input[type=date]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
`

const Coluna1 = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    padding-right: 15px;
    option{
        background: #1A1A1A;
        outline: none;
    }
`

const Coluna2 = styled.div`
    padding-left: 15px;
    flex: 2;
    input{
        margin-top: 35px;
    }
`

function AdicionarViagem() {
    
    return (
        <div>
            <MenuAdmin></MenuAdmin>
            <SecaoImagemFundo $imagem={Xpreto}>
                <Container>
                    <DivTitulos>
                        <Titulo $cor='white' $fontSize="42">adicionar</Titulo>
                        <Titulo $cor="#FEBE1D" $fontSize="42">viagem</Titulo>
                    </DivTitulos>
                    <DivFormulario>
                        <Coluna1>
                            <CaixaDeSelecao $width="100%">
                                <option>Selecione um planeta</option>
                                <option>Selecione um planeta</option>
                            </CaixaDeSelecao>
                            <Input $width="100%" type="date" placeholder="Data" />
                            <Input $width="100%" type="text" placeholder="Duração" />
                        </Coluna1>
                        <Coluna2>
                            <Input $width="100%" type="text" placeholder="Nome da viagem" />
                            <CaixaDeTexto maxLength="150" $width="100%" placeholder="Uma breve descrição da viagem" $height="100px" />
                            <CaixaBotao $width="100%" $marginTop="40px" $scale="1">Enviar</CaixaBotao>
                        </Coluna2>
                    </DivFormulario>
                </Container>
            </SecaoImagemFundo>
        </div>
    )
}

export default AdicionarViagem;