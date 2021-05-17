// Exercício 1
//     a) "Utilizamos o array process.argv para acessar todas as respostas(argumentos) passadas às variáveis."
//     b) 

        const nome = process.argv[2]
        const idade = Number(process.argv[3])

        console.log(`Olá, ${nome}! Você tem ${idade} anos.`)

//     c)
        const novaIdade = idade + 7
        console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)