import React from 'react';
import './App.css';
import CardProfile from './components/CardProfile/CardProfile';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './imgs/profile.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardProfile 
          imagem={FotoPerfil} 
          nome="Milena Cacau" 
          subtitulo= "Sou pedagoga, designer web e estudante de programação."
          descricao="Me compreendo e atuo de forma flexível e dinâmica, estando sempre aberta às novas estratégias e práticas que atendam os processos de construção e desconstrução que envolvem desde a elaboração de um projeto à aplicação prática de uma ideia. Por isso, busco continuamente estar atenta às demandas, aprendendo com elas e traçando diferentes formas de auxiliar no desenvolvimento dos projetos que faço parte e dos profissionais que convivo diariamente."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
