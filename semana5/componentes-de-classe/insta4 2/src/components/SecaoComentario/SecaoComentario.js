import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorComentario: '',

	}

	onChangeComentario(event) {
		this.setState({valorComentario: event.target.value});
		console.log(event.target.value)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorComentario}
				onChange={(eventoComentario) => this.onChangeComentario(eventoComentario)}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
