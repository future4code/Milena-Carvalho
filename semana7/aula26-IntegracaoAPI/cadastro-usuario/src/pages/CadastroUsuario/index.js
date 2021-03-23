import React, {Component} from 'react'
import './cadastro.css'


class CadastroUsuario extends Component {
    
    render (){
        return (
            <div className='container'>

              

                <div className='boxCadastro'>
                    
                    <div className="boxTitulo">
                        <p>Realizar novo cadastro</p>
                    </div>
                    
                    <div className="containerForm"> 
                        <label>Nome completo</label>
                        <input placeholder='Nome completo' type='text' className="inputUsuario"/>

                        <label>E-mail</label>
                        <input placeholder='Ex. joaosilva@contato.com' type='text' className="inputUsuario"/>

                        <div className="botoes"> 
                            <button className="botao">Lista de Usuários</button>
                            <button className="botao">Efetuar Cadastro</button>
                        </div>
                    </div>
                </div>
                
            </div>


        )

    }
}

export default CadastroUsuario