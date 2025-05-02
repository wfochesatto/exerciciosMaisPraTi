/* const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o primeiro valor: "))
let valor2 = Number(prompt("Insira o segundo valor: "))
let op = prompt('Informe a operacao desejada: (+, -, /, *):')
let resultado = 0

switch(op){
case '+':
    resultado = valor1 + valor2
    break
case '-':
    resultado = valor1 - valor2
    break
case '*':
    resultado = valor1 * valor2
    break
case '/':
    resultado = valor1 / valor2
    break
case (op == '/' && valor2 == 0):
    console.log('Erro, divisao por zero')
    resultado = undefined
    break
default:
    console.log('Operacao invalida')
    resultado = undefined
    break
}
if(resultado !== undefined){
    console.log("Resultado: ", resultado)
} */

//Exercício 2: verificar se um número é positivo, negativo ou zero
//Exercício 3: verificar é bissexto
//Exércicio 4: definam faixas etárias para crianças, adolescentes e adultos e com switch apresentem na tela se a pessoa que informou a idade está em uma e qual a faixa etária

//----------------------------------------------------------------------------------
/* const prompt = require('prompt-sync')()
let numero = Number(prompt('Digite um numero: '))

if (numero >= 0) {
    console.log('O numero e positivo')
} else{
    console.log('O numero e negativo')
} */

//----------------------------------------------------------------------------------
/* const prompt = require('prompt-sync')()
let ano = Number(prompt('Digite quantos dias tem o ano: '))

if (ano === 366){
    console.log('O ano e bissexto')
} else {
    console.log('O ano nao e bissexto')
} */

const prompt = require('prompt-sync')()
let idade = Number(prompt('Digite quantos anos voce tem: '))
let faixaEtaria = '0'

if (idade > 0 && idade <= 12){
    faixaEtaria = 'Crianca'
} else if (idade > 12 && idade < 18){
    faixaEtaria = 'Adolescente'
} else if (idade >= 18 && idade < 150){
    faixaEtaria = 'Adulto'
} else{
    faixaEtaria = undefined
}

switch (faixaEtaria){
    case ('Crianca'):
        console.log('Voce e uma crianca')
    break
    
    case ('Adolescente'):
        console.log('Voce e um adolescente')
    break
    
    case ('Adulto'):
        console.log('Voce e um adulto')
    break

    default:
    console.log('Operacao invalida')
    resultado = undefined
    break
}
