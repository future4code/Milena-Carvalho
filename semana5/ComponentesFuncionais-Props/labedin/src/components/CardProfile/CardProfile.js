import React from 'react';
import './CardProfile.css'

function CardProfile(props) {
    return (
        <div className="profilecard-container">
            <img src={ props.imagem } />
            <div>
                <h3>{ props.nome }</h3>
                <h4>{ props.subtitulo }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardProfile;