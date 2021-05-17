// Exercício 1
    const numero1 = Number(process.argv[2])
    const operacao = process.argv[3]
    const numero2 = Number(process.argv[4])

    if(operacao === '+' || operacao === 'soma') {
        console.log(numero1 + numero2)
    } else if (operacao === '-' || operacao === 'subt') {
        console.log(numero1 - numero2)
    } else if (operacao === '*' || operacao === 'mult') {
        console.log(numero1 * numero2)
    } else if (operacao === '/' || operacao === 'div') {
        console.log(numero1 / numero2)
    } else {
        console.log("Faça operações com '+', '-', '/' ou '*'.")
    }