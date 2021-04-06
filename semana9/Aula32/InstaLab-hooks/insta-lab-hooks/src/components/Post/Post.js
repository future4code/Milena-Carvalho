import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

const [like, setLike] = useState(false) 
const [contador, setContador] = useState(0)
const [boxComentario, setBoxComentario] = useState(false)
const [comentarios, setComentarios] = useState([])
const [contadorComentario, setContComent] = useState(0)

  const onClickCurtida = () => {
    like ? setLike(false) : setLike(true)
    contador == 0 ? setContador(contador + 1) : setContador(contador - 1) /*contador == 0 ? setContador(1) : setContador(0) */ 
  };

  const onClickComentario = () => {
    boxComentario ? setBoxComentario(false) : setBoxComentario(true)
  };

  const enviarComentario = (comentario) => {
    setComentarios ([... comentarios, comentario])
    setContComent(contadorComentario + 1)
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={like ? iconeCoracaoPreto : iconeCoracaoBranco}
          onClickIcone={onClickCurtida}
          valorContador={contador}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={contadorComentario}
        />
      </PostFooter>

      {boxComentario ? <SecaoComentario enviarComentario={enviarComentario}/> : ''}

      {comentarios.map(comentario => { 
        return (
          <CommentContainer>
            <p>{comentario}</p>
          </CommentContainer>
        )
      })}
    </PostContainer>
  )
}

export default Post