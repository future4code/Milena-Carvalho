import React from 'react';
import {
  Etapa1, 
  Etapa2,
  Etapa3
} from "./components"

class App  extends React.Component {
  state = {
    etapa: 1,
    enviado: false
  }


proximaEtapa = () => {
  this.setState({etapa: this.state.etapa +1})
}

enviar = () => {
  this.setState({enviado: true})
}

  render () {
    return (
      !this.state.enviado ? 
      <div>
        {
          this.state.etapa == 1 ? (
            <div>
            <Etapa1/>
            <button onClick={this.proximaEtapa}>Próxima Etapa</button>
            </div>
          ) : (
            this.state.etapa == 2 ? ( 
            
            <div> <Etapa2/> 
            <button onClick={this.proximaEtapa}>Próxima Etapa</button>
            </div> ) : (
            
            <div> <Etapa3/> 
            <button onClick={this.enviar}>Enviar</button>
            </div> )
          )
        } 
      </div> : 
                  <div>
                  <h1>O formulário acabou</h1>
                  <br/>
                  <h3>Muito obrigado por participar! Entraremos em contato!</h3>
                  </div>
    )
    
  // chave final render v
  }



// chave final v
} 


export default App;
