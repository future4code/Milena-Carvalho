import React from 'react';

const inputs = [
    {
        pergunta: "7. Por que você não terminou um curso de graduação?",
        id: "naoTerminou"
    },
]

class Etapa3  extends React.Component {

    state = {
        valorInputNaoTerminou: '',
        valorSelectComplementar: "nenhum"
    }

onChangeInputResposta = (event) => {
    if (event.target.id == "naoTerminou"){
        this.setState({valorInputNaoTerminou:event.target.value})
    } else {
        this.setState({valueSelectComplementar:event.target.value})
    }
}


    render () {
        return (
            <div>
                <div>
                <h1> Etapa 3 - Informações Gerais de Ensino </h1>
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


                        <label>8. Você fez algum curso complementar?</label>
                        <br/>
                        <select id="escolaridade" onChange={this.onChangeInputResposta}>
                            <option value="nenhum">Nenhum</option>
                            <option value="tecnico">Curso técnico</option>
                            <option value="ingles">Curso de inglês</option>
                        </select>
                </div>
                
            </div>

        )
        
    // chave final render v
    }


// chave final React.Component v
} 


export default Etapa3;
