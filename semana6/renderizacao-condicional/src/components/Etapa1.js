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
    }

onChangeInputResposta = (event) => {
    if (event.target.id == "email"){
        this.setState({valorInputEmail:event.target.value})
    } else if (event.target.id == "idade") {
        this.setState({valueInputIdade:event.target.value})
    } else {
        this.setState({valueInputEmail:event.target.value})
    }
}


    render () {
        return (
            <div>
                <div>
                <h1> Etapa 1 - Dados Gerais </h1>
                </div>

                
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
                
            </div>

        )
        
    // chave final render v
    }


// chave final React.Component v
} 


export default Etapa1;
