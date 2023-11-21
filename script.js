const prompt = require('prompt-sync')
const promp = prompt()

// a) Declare um vetor de inteiros com 12 posições.
var vetor = new Array(12)
// b) A primeira, terceira e décima posições do vetor devem receber o valor 108.
vetor[0] = 108
vetor[2] = 108
vetor[9] = 108

// c) A segunda posição deve receber o valor da primeira posição menos 8. E a quarta posição deve receber o valor da terceira posição mais 6.
vetor[1] = vetor[0] - 8
vetor[3] = vetor[2] + 6

// d) A posições de índice par a partir da quinta posição devem receber, na ordem: 11, 32, 33 e 87.
const valores = [11, 32, 33, 87]
let j = 0;
for (let i = 0; i <= vetor.length; i++) {
    if (i % 2 == 0 && i >= 4) {
        vetor[i] = valores[j]
        j++
    }
}
// e) A posição 5 deve guardar 5 mais 3 vezes o valor da sétima posição. A posição 7 deve guardar este valor mais 10.
vetor[5] = 5 + (vetor[6] * 3)//=101
vetor[7] = vetor[5] + 10

// f) O valor 72 deve ser inserido na posição dada pelo valor da quinta posição.
vetor[vetor[4]] = 72
// g) A posição 4 recebe o valor da oitava posição.
vetor[4] = vetor[7]

// h) Troque os valores da sexta e décima primeira posições.
let aux
aux = vetor[5]
vetor[5] = vetor[10]
vetor[10] = aux


// i) Troque os valores das posições 0 e 8.
aux = vetor[0]
vetor[0] = vetor[8]
vetor[8] = aux

// j) Escreva todas as posições do vetor de trás para frente usando o casting para caractere e observe o resultado.
let conversao = ''
for (let i = vetor.length - 1; i >= 0; i--) {
    if (vetor[i] != undefined) {
        conversao += i.toString()
    } else {
        //console.log("Não entra undefined")
    }
}
//console.log(conversao)
//console.table(vetor)

//quinta posição = indice 4
//posição 5 = indice 5

// 2. Implemente um programa que declara um vetor de números reais com capacidade para 10
// elementos. Em seguida o programa deve receber um número real R, tal que -7 <= R <= 7, e
// armazenar em cada posição do vetor o valor iR
// , em que i é o índice da posição do vetor e R é
// o número dado pelo usuário. Ao final, o programa deve escrever o vetor

let arrayExec1 = new Array(10)
const tamanhoVetor = arrayExec1.length
const max = 7
const min = -7
let usuarioNum = parseInt((Math.random() * (max - min + 1)) + min)
//console.log(`Número do usuário: ${usuarioNum}`)

for (let i = 0; i <= tamanhoVetor; i++) {
    arrayExec1[i] = i ** usuarioNum
}
//console.log(arrayExec1)

// 3. Implemente um programa que recebe N números reais não-negativos e calcula a raiz
// quadrada de cada um deles. Organize o seu programa em entrada, processamento e saída.

// let num = promp("Digite seu número (não sendo negativo): ")
// if (num > 0) {
//     console.log(`A raiz quadrada de ${num} é ${Math.sqrt(num)}`)
// } else {
//     console.log("Número negativo inválido! Tente novamente!")
// }

// 4. Implemente um programa que recebe dois vetores de números reais, v1 e v2, com
// capacidade para 4 elementos cada. O programa deve gerar um vetor v3, que armazena a
// soma dos elementos correspondentes dos vetores v1 e v2. Ou seja, a soma dos elementos
// de mesmo índice. Ao final o programa deve escrever os elementos de v3.

// const v1 = new Array(4)
// const v2 = new Array(4)
// const v3 = []


// for (let i = 0; i < v1.length; i++) {
//     v1[i] = i
//     v2[i] = i
//     v3.push(v1[i]+v2[i])
// }

// console.log(v3)

// 5. Implemente um programa que inicializa um vetor de inteiros com sua matrícula, de maneira
// que cada dígito da sua matrícula seja armazenado em uma posição do vetor. Em seguida o
// programa deve receber um número natural N entre 0 e 9 e determinar em quais posições
// do vetor N ocorre.

// const vetorMatricula = [2, 9, 7, 1, 3, 9, 2, 2, 2, 1, 0, 2, 7]
// let num = promp("Digite um número inteiro entre 0 e 9: ")
// let indiceIncidente = []
// if (num >= 0 && num <= 9) {

//     for (indice in vetorMatricula) {
//         if (vetorMatricula[indice] == num)
//             indiceIncidente.push(indice)
//     }
// } else {
//     console.log("Você não atendeu as regras acima, tente novamente!")
// }
// console.log(`Os índices que possuem o mesmo valor do número inserido (${num}), são: ${indiceIncidente.join()}`)

// Implemente um programa que recebe o número e peso de N bois. O programa deve calcular
// e imprimir a média de peso dos bois e os números dos bois mais pesado e mais leve.

let numBois = promp("Quantos bois deseja cadastrar?")
const numDoBoi = []
const pesoDoBoi = []
for (let i = 1; i <= numBois; i++) {
    console.log(`-- Cadastro do ${i}° boi --`)
    numDoBoi.push(promp("Digite o número do boi: "))
    pesoDoBoi.push(Number(promp("Digite o peso do boi: ")))
    pesoDoBoi[i-1]
}
let sum = pesoDoBoi.reduce(function(accumulator,value){
  return accumulator + value
},0);

let mediaPeso = sum / pesoDoBoi.length
let maisPesado = Math.max(...pesoDoBoi)
console.log(pesoDoBoi.findIndex(maisPesado))


console.log(`A média do peso dos bois é de: ${mediaPeso}`)





