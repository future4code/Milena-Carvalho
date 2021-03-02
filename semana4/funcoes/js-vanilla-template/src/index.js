// Exercício 1

    // a) Serão impressos os números 10 e 50. 
    // b) O sistema não identificaria a função e não imprimirá nada. 

// Exercício 2

    // a) O sistema imprimirá os nomes Darvas e Caio. 
    // b) Se o valor da primeira linha for alterado para ["Amanda", "Caio"], o sistema imprimirá ambos os nomes. Se alterar o parâmetro (arrayDeNomes) para ("Amanda", "Caio"), o console imprimirá as letras A e M.

// Exercício 3

    // Caso X seja divísel por 2 sem que haja sobra número, o código multiplicará ele por ele mesmo e retornará o resultado. 

// Exercício 4 

    // a)
    function sobreMim() {
    console.log("Eu sou Milena, tenho 22 anos, moro em Sâo Paulo e sou estudante")
    }

    sobreMim()

    // b)
    let nome = prompt ("Qual o seu nome?")
    let idade = prompt ("Qual a sua idade?")
    let endereco = prompt ("Em qual cidade você mora?")
    let ocupacao = confirm("Você é estudante? Tecle 'ok' para sim e 'cancelar' para não")

    function sobreMim() {
    {
    if (ocupacao = true) {
        return "sou"
    } else {
        return "não sou"
    }
    }
    }

    console.log("Eu sou ", nome, " tenho ", idade, " anos ", " moro em ",  endereco, " e sou ", ocupacao)

// Exercício 5 
    // a) 
    function soma (x, y) {
        let soma = x + y
        return soma
      }
      
      soma (1, 2)   

    // b) 
    function coletarNumeros (n1, n2) {
        if (n1 >= n2) {
            console.log(n1, " é maior ou igual a ", n2)
        }
        else {
            console.log(n1, "é menor que ", n2)
        }
    }

    coletarNumeros (1, 2)


