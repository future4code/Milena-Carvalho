export const linkLogin = (history) =>  {
    history.push('/')
}

export const linkCadastro = (history) =>  {
    history.push('/cadastro')
}

export const linkFeed = (history) =>  {
    history.push('/feed')
}

export const linkPost = (history, id) =>  {
    history.push(`/post/${id}`)
}

export const linkPublicar = (history) =>  {
    history.push('/novo-post')
}