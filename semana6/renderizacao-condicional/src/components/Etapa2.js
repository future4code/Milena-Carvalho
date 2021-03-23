import React from 'react';

const inputs = [
    {
        pergunta: "5. Qual seu curso?",
        id: "curso"
    },

    {
        pergunta: "6. Qual a unidade de ensino?",
        id: "unidade"
    },
]

class Etapa2  extends React.Component {

    state = {
        valorInputCurso: '',
        valorInputUnidade: '',
    }

onChangeInputResposta = (event) => {
    if (event.target.id == "curso"){
        this.setState({valorInputCurso:event.target.value})
    } else {
        this.setState({valueInputUnidade:event.target.value})
    }
}


    render () {
        return (
            <div>
                <div>
                <h1> Etapa 2 - Informações do Ensino Superior </h1>
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
                </div>
                
            </div>

        )
        
    // chave final render v
    }


// chave final React.Component v
} 

export default Etapa2;