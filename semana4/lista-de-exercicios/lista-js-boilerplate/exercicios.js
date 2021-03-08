//Exercício 1

function inverteArray(array) {
  // A partir dos arrays já declarados, utilizei a função reverse do javascript para retorná-los invertidos. 
  return array.reverse()
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   // Primeiro criei um array auxiliar para armenizar os resultados. Em seguida, criei um laço de repetição que buscou somente os pares sob a condição de múltiplicar estes números pares por eles mesmos e, então, amarzenar os resultados no array auxiliar criado. 
   let arrayPares = [] 
   for (let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
         arrayPares.push(array[i] * array[i])
      }
   }
   return arrayPares
}

//Exercício 3

function retornaNumerosPares (array) {
   // Primeiro criei um array auxiliar para armenizar os resultados. Em seguida, criei um laço de repetição que buscou somente os número pares e, então, amarzenou os resultados no array auxiliar criado. 
   let arrayPares = [] 
   for (let i = 0; i < array.length; i++) {
      if(array[i] % 2 === 0) {
         arrayPares.push(array[i])
      }
   }
   return arrayPares
}

//Exercício 4

function retornaMaiorNumero(array) {
   // Primeiro declarei uma variável para iniciar o laço de repetição que verificará se o elemento atual amarzenado em let maior segue sendo maior em relação ao elemento array[i] atual. Caso o array[i] for maior que o let maior, ele será atribuído como valor de let maior. 
   let maior = array [0]
   for (let i = 1; i < array.length; i++)
   if (array[i] > maior) {
      maior = array [i]
   }
   return maior
}

//Exercício 5

function retornaQuantidadeElementos (array) {
   // Utilizei a propriedade array.length que retorna o tamanho de um array. 
   return array.length
}

//Exercício 6

function retornaExpressoesBooleanas() {
   // Não consegui realizar o exercício. 
}

//Exercício 7

function retornaNNumerosPares(n) {
   // Primeiro declarei a variável númeroPares para armazer o resultado do exercício. Em seguida, criei um um laço de repetição que utiliza o i como contador que parte do número 0 e vai até o dobro de n (que irá até o último número par além do que queremos chegar). Em seguida, o sistema verifica todos os números e adicionar somente os pares no array. 
   let numerosPares = []
   for (let i = 0; i < n*2; i++)
   if (i % 2 === 0) {
      numerosPares.push(i)
   }
   return numerosPares
}

// Exercício 8

function checaTriangulo(a, b, c) {
  if (a === b && b === c){
     return "Equilátero"
  } else if (a === b && a != c || b === c && b != a || c === a && c != b) {
     return "Isósceles"
  } else {
     return "Escaleno"
  }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
   let maior
   let divisivel
   let diferenca
   if (num1 > num2) {
      maior = num1
      if (maior % num2 === 0) {
         divisivel = true
      } else {
         divisivel = false
      }
      diferenca = maior - num2 
   } else {
         maior = num2
         if (maior % num1 === 0) {
            divisivel = true
         } else {
            divisivel = false
         } 
         diferenca = maior - num1            
      }
   let objeto = {
      maiorNumero: maior,
      maiorDivisivelporMenor: divisivel,
      diferenca: diferenca,
   }
   return objeto
}

// Exercício 10

function segundoMaiorEMenor(array) {
   // implemente sua lógica aqui
}

//Exercício 11

function ordenaArray(array) {
   // implemente sua lógica aqui
}

// Exercício 12

function filmeFavorito() {
   let filmeAstrodev = {
   nome: "O Diabo Veste Prada",
   ano: 2006,
   diretor: "David Frankel",
   atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
   }
   return filmeAstrodev
}

// Exercício 13

function imprimeChamada() {
   // implemente sua lógica aqui
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   // implemente sua lógica aqui
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   // implemente sua lógica aqui
}

// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]

// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   // implemente sua lógica aqui
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   // implemente sua lógica aqui
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
  // implemente sua lógica aqui
}

// Exercício 17, letra C

function verificaParidade(array) {
   // implemente sua lógica aqui
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas(pessoas) {
   // implemente sua lógica aqui
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas(pessoas) {
   // implemente sua lógica aqui
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta(consultas) {
  // implemente sua lógica aqui
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
  // implemente sua lógica aqui
}