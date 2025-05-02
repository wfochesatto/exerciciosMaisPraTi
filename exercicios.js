//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

/*let num = Number(prompt('Escreva um numero para verificar se ele e par ou impar: '))
let calculo = num % 2

if (calculo == 0){
    console.log('Par')
} else {
    console.log('Impar')
}*/

//******************************************
//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else

/*let idade = Number(prompt('Digite sua idade: '))

if (idade > 0 && idade < 12){
    console.log('Voce e uma crianca')
}else if (idade >= 12 && idade < 18){
    console.log('Voce e um(a) adolescente')
}else if (idade >= 18 && idade < 65){
    console.log('Voce e um(a) adulto(a)')
}else if (idade >= 65){
    console.log('Voce e um(a) idoso(a)')
}else {
    console.log('Idade incorreta, reinicie a aplicacao')
}*/

//******************************************
//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

/*let nota = Number(prompt('Digite uma nota de 0 a 10: '))

if (nota >= 6 && nota <=10){
    console.log('Aluno aprovado')
}else if (nota >= 4 && nota < 6){
    console.log('Aluno em recuperacao')
}else if (nota >= 0 && nota < 4){
    console.log('Aluno reprovado')
}else {
    console.log('Nota incorreta, reinicie a aplicacao!')
}*/

//*******************************************
//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada.

/*let tempo = prompt('Digite qual tempo do dia voce mais gosta(Manha, Tarde, Noite: ')

switch(tempo){
    case 'Manha':
        console.log('Nada melhor que comecar com um cafe!')
    break
    
    case 'Tarde':
        console.log('Hora do cha!')
    break

    case 'Noite':
        console.log('Hora de dormir!')
    break
}*/

//*********************************************
//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.

/*let peso = Number(prompt('Digite o seu peso em KG: '))
let altura = Number(prompt('Digite sua altura (Ex: 1.80): '))
let calculoImc = peso / (altura * altura) 

if (calculoImc < 18.5){
    console.log('IMC = MAGREZA')
}else if (calculoImc >= 18.5 && calculoImc <= 24.9){
    console.log('IMC = NORMAL')
}else if (calculoImc >= 25 && calculoImc <= 29.9){
    console.log('IMC = SOBREPESO')
}else if (calculoImc >= 30 && calculoImc <= 39.9){
    console.log('IMC = OBESIDADE')
}else if (calculoImc >= 40){
    console.log('OBESIDADE GRAVE')
}*/

//***********************************************
//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.
/*
let A = Number(prompt('Digite o valor do primeira aresta do triangulo: '))
let B = Number(prompt('Digite o valor do segunda aresta do triangulo: '))
let C = Number(prompt('Digite o valor do terceira aresta do triangulo: '))

if (A < B + C && B < A + C && C < A + B){
if (A == B && A == C){
    console.log('Triangulo Equilatero')
}else if (A == B || B == A || C == B){
    console.log('Triangulo Isosceles')
}else {
    console.log('Triangulo Escaleno')
}
}else{
    console.log('As medidas nao formam um triangulo')
}
*/
//************************************************
//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.
/*
let precoMaca = 0.30
let precoDuzia = 0.25
let calculo = undefined

let numMaca = Number(prompt('Digite o numero de quantas macas foram compradas: '))

if (numMaca > 0 && numMaca < 12){
    calculo = precoMaca * numMaca
    console.log('O valor da compra foi: R$', calculo.toFixed(2))
} else if (numMaca >= 12){
    calculo = precoDuzia * numMaca
    console.log('O valor da compra foi: R$', calculo.toFixed(2))
} else{
    console.log('Numero de macas invalido, reinicie a aplicacao e digite um numero maior que 0.')
}
*/

//***************************************************
//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.
/*
let valorA = Number(prompt('Digite o primeiro valor: '))
let valorB = Number(prompt('Digite o segundo valor: '))

if (valorA > valorB){
    console.log('Valores organizados em ordem crescente: ', valorB, valorA)
}else if (valorA < valorB){
    console.log('Valores organizados em ordem crescente: ', valorA, valorB)
}else if (valorA == valorB){
    console.log('Valor A igual ao B, digite valores diferentes')
    return
}
*/

//****************************************************
//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
//utilizando um loop for.
/*
let i

for(i = 10; i > 0; i--){
    console.log(i)
}
*/

//****************************************************
//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
/*
let num = Number(prompt('Digite um numero inteiro: '))
let i 

for(i = 0; i < 10; i++){
    console.log(num)
}
*/

//****************************************************
//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//utilizando um loop for
/*
let soma = 0
let i

for(i = 0; i < 5; i++){
    let num = Number(prompt('Digite um numero: '))
    soma = num + soma
}
console.log('A soma dos 5 numero e igual a = ', soma)
*/

//****************************************************
//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//10) utilizando um loop for.
/*
let num = Number(prompt('Digite o numero que voce deseja saber a tabuada: '))
let multiplicacao = 0
let i

for(i = 0; i <= 10; i++){
    multiplicacao = num * i
    console.log(num, ' x ', i, '= ', multiplicacao)
}
*/

//****************************************************
//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.
/*
let num
let cont = 0
let soma = 0

do{
    num = Number(prompt('Digite um numero decimal (EX: 1.57), digite 0 para parar: '))
    cont = cont + 1
    soma = soma + num
}while(num != 0)

let media = soma / (cont - 1)

console.log('A media aritmetica dos numero digitados e igual a = ', media.toFixed(2))
*/

//*****************************************************
//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.
/*
let num = Number(prompt('Digite um numero inteiro para descobrir o seu fatorial: '))
let fatorial = 1
let i

for(i = num; i > 0; i--){
    fatorial *= i  
}

console.log('O fatorial de ', num, ' e = ', fatorial)
*/

//*****************************************************
//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.
let numA = 0
let numB = 1

console.log(a) 
console.log(b)

for (let i = 2; i < 10; i++) {
    let fibonacci = numA + numB
    console.log(fibonacci)
    numA = numB
    numB = fibonacci
}