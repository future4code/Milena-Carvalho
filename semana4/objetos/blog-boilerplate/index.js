function criarPost () {

    let conteudoPost = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value,
    }
    
    let posts = []

    posts.push(conteudoPost)

    document.getElementById("titulo-post").value = ""

    document.getElementById("autor-post").value = ""

    document.getElementById("conteudo-post").value = ""

    inserirPosts(posts)
}

function inserirPosts (posts) {
    let elemento=document.createElement("div")

    elemento.appendChild(document.createTextNode(posts[0].titulo))

    document.getElementById("posts").appendChild(elemento)
}