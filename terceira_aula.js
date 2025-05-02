/*const prompt = require('prompt-sync')()

let contadora = 0
let resultado = 0
let tabuada = prompt('Digite de qual numero voce quer saber a tabuada: ')

while(contadora <= 10){
    resultado = tabuada * contadora
    console.log(`${tabuada} X ${contadora} = ${resultado}`)
    
    contadora ++
}*/

/*let contadora = 10

while(contadora >= 0) {
    console.log(contadora)
    contadora--
}*/

/*const prompt = require('prompt-sync')()
let contadora = 0
let tabuada = prompt('Digite de qual numero voce quer saber a tabuada: ')
resultado = 0
//inicializacao, condicao, incremento
for(contadora = 0; contadora <= 10; contadora++){
    resultado = tabuada * contadora
    console.log(`${tabuada} X ${contadora} = ${resultado}`)
} */

/*const prompt = require('prompt-sync')()

let contador = 0
let soma = 0
let resposta = null

while (resposta != 0){
    resposta = Number(prompt('Informe as medias: (Para calcular a media final digite 0) '))
    
    soma += resposta
    if(num !== 0){
    contador++
}}

let mediaFinal = soma / (contador - 1)
console.log(`A media final e: ${mediaFinal}`)*/

/*const prompt = require('prompt-sync')()

let contador = 0
let soma = 0
let resposta = 0

do {
    resposta = Number(prompt('Informe as medias: (Para calcular a media final digite 0) '))
    
    soma += resposta
    contador++

} while (contador < 10)

let mediaFinal = soma / (contador - 1)
console.log(`A media final e: ${mediaFinal}`)*/

const prompt = require('prompt-sync')()
nome = null

while (nome !== 'pare'){
    nome = prompt('Qual e o seu nome? ')

    if (nome == 'Jonatan'){
        console.log('Preto')
    } else if (nome !== 'pare'){
        console.log('Branco')
    }
}


