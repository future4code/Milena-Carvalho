import React from 'react';
import './App.css';
import Post from './components/Post/Post';

// class App extends React.Component {
//   render() {
//     return (
//       <div className={'app-container'}>
//         <Post
//           nomeUsuario={'Juliette'}
//           fotoUsuario={'https://picsum.photos/50/50?random=1'}
//           fotoPost={'https://picsum.photos/200/150?random=1'}
//         />

//         <Post
//           nomeUsuario={'Camilla'}
//           fotoUsuario={'https://picsum.photos/50/50?random=2'}
//           fotoPost={'https://picsum.photos/200/150?random=2'}
//         />

//         <Post
//           nomeUsuario={'João'}
//           fotoUsuario={'https://picsum.photos/50/50?random=3'}
//           fotoPost={'https://picsum.photos/200/150?random=3'}
//         />  
//       </div>
//     );
//   }
// }


export default class App extends React.Component {
  
  state = {
    post: [
      {
      nomeUsuario: 'Juliette',
      fotoUsuario: 'https://picsum.photos/50/50?random=1',
      fotoPost: 'https://picsum.photos/200/150?random=1'
      },

      {
        nomeUsuario: 'Camilla',
        fotoUsuario: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
        },

      {
        nomeUsuario: 'João',
        fotoUsuario: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150?random=3'
        },
    ],
    inputNome: "",
    inputPerfil: "",
    inputPost: ""
  };
 
  nomePerfil = (event) => {
    this.setState({inputNome: event.target.value});
  }

  fotoPerfil = (event) => {
    this.setState({inputFotoPerfil: event.target.value});
  }

  fotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value});
  }

  publicaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFotoPerfil,
      fotoPost: this.state.inputFotoPost
    };

  this.setState({
    post: [... this.state.post, novoPost],
    inputNome: "",
    inputFotoPerfil: "",
    inputFotoPost: ""
  });
}


render() {
    const feedPost = this.state.post.map ((publi) => {
      return ( 
        <Post
          nomeUsuario={publi.nomeUsuario}
          fotoUsuario={publi.fotoUsuario}
          fotoPost={publi.fotoPost}
        />
      );
  });


      return (
        <div>
          <input
          onChange={this.nomePerfil}
          value={this.state.inputNome}
          placeholder="Nome do usuário"
          />

          <input
          onChange={this.fotoPerfil}
          value={this.state.inputFotoPerfil}
          placeholder="Foto do usuário"
          />

          <input
          onChange={this.fotoPost}
          value={this.state.inputFotoPost}
          placeholder="Foto do post"
          />    

          <button onClick={this.publicaPost}>Publicar</button>

          <div>
            {feedPost} 
          </div>

        </div>
      )

}
}
