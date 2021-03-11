import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardProfile from './components/CardProfile/CardProfile';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoPerfil from './imgs/profile.jpg';
import Local from './imgs/local.jpg';
import Telefone from './imgs/tel.jpg';
import Email from './imgs/mail.jpg';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        {/* <h2>Dados pessoais</h2> */}
        <CardProfile 
          imagem={FotoPerfil} 
          nome="Milena Cacau" 
          subtitulo= "Sou pedagoga, designer web e estudante de programação."
          descricao="Me compreendo e atuo de forma flexível e dinâmica, estando sempre aberta às novas estratégias e práticas que atendam os processos de construção e desconstrução que envolvem desde a elaboração de um projeto à aplicação prática de uma ideia. Por isso, busco continuamente estar atenta às demandas, aprendendo com elas e traçando diferentes formas de auxiliar no desenvolvimento dos projetos que faço parte e dos profissionais que convivo diariamente."
        />
        
        {/* <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        /> */}
      </div>

      <div className="page-section-container">
          <div className="infos-contato">
          <CardPequeno
              icone={Local} 
              tipo="Endereço:" 
              info="Jardim Tremembé, São Paulo SP" 
            />

            <CardPequeno
              icone={Email} 
              tipo="E-mail:" 
              info="milenacacaudecarvalho@gmail.com" 
            />
            
            <CardPequeno
              icone={Telefone} 
              tipo="Telefone:" 
              info="(11) 9 8303-0543" 
            />
          </div>

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://unibes.org.br/wp-content/uploads/2019/10/albert-einstein.jpg" 
          nome="Hospital Israelita Albert Einstein" 
          descricao="Atuação na brinquedoteca da internação pediátrica do Hospital Israelita Albert Einstein,
          desenvolvendo atividades lúdicas, oficinas e projetos. Além disso, atuação pedagógica enfocada
          nas demandas individuais de crianças hospitalizadas por grandes períodos (pacientes que
          necessitam de transplantes, pacientes oncológicos, etc.), planejando e realizando atividades lúdicas
          e projetos adaptadas a fim de promover o bem-estar e também o desenvolvimento escolar." 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Conselho Nacional de Desenvolvimento Científico e Tecnológico" 
          descricao="A voz feminina nos grêmios: um estudo da participação das mulheres nas organizações estudantis
          (século XX) e A voz feminina nos grêmios: um estudo da participação das mulheres nas
          organizações estudantis do ensino superior de São Paulo (1889-1930) – Os dois projetos em nível
          de iniciação científica, subsidiados pelo CNPq, investigaram a participação das mulheres nas
          organizações estudantis (o primeiro nas organizações ginasiais e o segundo nas organizações de
          ensino superior), por meio da análise de periódicos produzidos por tais organizações no contexto
          de cada pesquisa. Orientação: Dra. Renata Marcílio Cândido." 
        />
      </div>

      {/* <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div> */}
    </div>
  );
}

export default App;
