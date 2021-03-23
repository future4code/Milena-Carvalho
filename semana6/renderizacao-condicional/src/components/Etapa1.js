import React from 'react';

const inputs = [
    {
        pergunta: "1. Qual o seu nome?",
        id: "nome"
    },

    {
        pergunta: "2. Qual sua idade?",
        id: "idade"
    },

    {
        pergunta: "3. Qual seu e-mail?",
        id: "email"
    },
]

class Etapa1  extends React.Component {

    state = {
        valorInputNome: '',
        valorInputIdade: '',
        valorInputEmail: '',
        valorSelectEscolaridade: "medio-incompleto"
    }

onChangeInputResposta = (event) => {
    if (event.target.id == "nome"){
        this.setState({valorInputNome:event.target.value})
    } else if (event.target.id == "idade") {
        this.setState({valueInputIdade:event.target.value})
    } else if (event.target.id == "email") {
        this.setState({valueInputEmail:event.target.value})
    } else {
        this.setState({valueSelectEscolaridade:event.target.value})
    }
}


    render () {
        return (
            <div>
                <div>
                <h1> Etapa 1 - Dados Gerais </h1>
                </div>

                <div>
                    {
                        inputs.map((perguntaInput) => (
                            <div>
                                <label> 
                                    {
                                    perguntaInput.pergunta
                                    }

                                </label>
                                
                                <br/>

                                <input
                                className="input" 
                                id={perguntaInput.id}
                                onChange={this.onChangeInputResposta}
                                />
                            </div>
                        )) 
                    }


                        <label>4. Qual a sua escolaridade?</label>
                        <br/>
                        <select id="escolaridade" onChange={this.onChangeInputResposta}>
                            <option value="medio-incompleto">Ensino médio incompleto</option>
                            <option value="medio-completo">Ensino médio completo</option>
                            <option value="superior-incompleto">Ensino superior incompleto</option>
                            <option value="superior-completo">Ensino superior completo</option>
                        </select>
                </div>
                
            </div>

        )
        
    // chave final render v
    }


// chave final React.Component v
} 


export default Etapa1;
