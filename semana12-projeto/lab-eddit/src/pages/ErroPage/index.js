import React from 'react'
import { linkLogin } from '../../routes/coordinator'
import { useHistory } from "react-router-dom"
import Header from '../../components/header'
import { Sessao, Container } from '../../components/components'
import { Erro, TextoErro, BtnVoltar } from './styled'

function ErroPage() {
    const history = useHistory()
    return (
        <div>
            <Sessao $marginTop="100px">
                <Container $display="flex" $justifyContent="center" $alignItems="center" $flexFlow="column">
                    <Erro>404</Erro>
                    <TextoErro>Página não encontrada.</TextoErro>
                    <BtnVoltar onClick={() => linkLogin(history)}>Voltar</BtnVoltar>
                </Container>
            </Sessao>
        </div>
    )
}

export default ErroPage