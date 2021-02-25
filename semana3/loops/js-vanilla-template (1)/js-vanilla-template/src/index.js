// Exercício 1
    // O resultado impresso será 10.

// Exercício 2

    // a) O código imprimirá:
        // 19
        // 21
        // 23
        // 25
        // 27
        // 30
    
    // b) Não, acredito que para isso seria necessário incluir um contador. 

// Exercício 3

    // a)
    const batata = [99, 17, 13, 22, 53]
    for (let numero of batata) {
        console.log (numero)
    }

    // b)
    const batata = [99, 17, 13, 22, 53] 
    for (let numero of batata) {
        console.log (numero/10)
    }

    // c)
    const batata = [99, 17, 13, 22, 53] 
    let arrayPar = []
    for (let numero of batata) {
        if (numero %2 ===0) {
        arrayPar.push(numero)
        console.log (numero)
        }
    }

    // d) 
    const batata = [99, 17, 13, 22, 53] 
    for (let i=0; i < batata.length; i++) {
        console.log("O elemento do index ", i, " é ", batata[i])
    }

    // e)
    const batata = [99, 156, 23, 58, 12]
	let maior = batata[0]
	for(let numero of batata){
	    if(numero > maior){
	        maior = numero
	    }
	}
	console.log(maior)

    const batata = [99, 156, 23, 58, 12]
	let menor = batata[0]
	for(let numero of batata){
	    if(numero < menor){
	        menor = numero
	    }
	}
	console.log(menor)



