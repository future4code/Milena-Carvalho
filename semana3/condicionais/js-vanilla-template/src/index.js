// Exercício 1
    // O programa verifica se o número colocado no alerta do navegador pelo usuário é par ou ímpar, sendo ps números pares aprovados no teste e os números ímpares não. 

// Exercício 2
    // a) O código serve para retornar ao usuário o preço de cada fruta vendida no supermercado. 

    // b) "O preço da fruta Maça é R$2.25"

    // c) "O preço da fruta Pêra é R$5"

// Exercício 3
    // a) A primeira linha define que a resposta do usuário será um número.
    
    // b) Quando o usuário digitar o número 10, aparecerá a mensagem "Esse número passou no teste" e, depois, ao ler "console.log(mensagem)", ele imprimirá "Essa mensagem é secreta!!!". Entretanto, ao digitar -10, o terminal retornará um erro.

    // c) Ao digitar -10, o terminal retornará um erro, pois a maquina tentará imprimir a variável "mensagem" que está dentro de uma condição cujo número -10 não tem acesso.


// Exercício 4
    const respostaDoUsuario = Number (prompt("Qual a sua idade?"))

    if (respostaDoUsuario > 17) {
        console.log ("Você pode dirigir")
    } else {
        console.log ("Você não pode dirigir")
    }

// Exercício 5 
    const turno = prompt("Em qual turno você estuda? Digite 'M' para matutino, 'V' para vespertino e 'N' para noturno")

    if (turno === "M") {
        console.log ("Bom dia!")
    } else if (turno === "V") {
        console.log ("Boa tarde!")
    } else {
        console.log ("Boa noite!")
    }

// Exercício 6 
    const turno = prompt("Em qual turno você estuda? Digite 'M' para matutino, 'V' para vespertino e 'N' para noturno")
    
    switch (turno) {
        case "M":
            console.log ("Bom dia!")
            break;
        
        case "V":
        console.log ("Boa tarde!")
        break;

        case "N":
        console.log ("Boa noite!")
        break;
    }

// Exercício 7 
    const filme = prompt("Qual o gênero do filme")
    const valor = Number (prompt("Qual o valor do ingresso?"))
    if (filme === "fantasia" && valor < 15) {
        console.log ("Bom filme")
    } else { console.log ("Escolha outro filme :(")
}   