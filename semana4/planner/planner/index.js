function criarTarefa () {
    let nomeTarefa=document.getElementById("tarefa").value

    if (nomeTarefa === ""){
        alert("Insira uma tarefa válida")
    } else {

    let hora=document.getElementById("horario").value

    let dia=document.getElementById("dias-semana").value

    let elemento=document.createElement("div")

    elemento.appendChild(document.createTextNode(hora + " - " + nomeTarefa))

    document.getElementById(dia).appendChild(elemento)

    document.getElementById("tarefa").value = ""
    }
}