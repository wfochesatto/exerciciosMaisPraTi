//Escreva um algoritmo que leia uma temperatura em graus Celsius e devolva em Fahrenheit
/*
const prompt = require('prompt-sync')() 
let GrauC = Number(prompt('Digite uma temperatura em graus celcius para converter em fahrenheit: '))
let GrauF = (GrauC * 9/5) + 32;
console.log('A temperatura em Fahrenheit e: ', GrauF)
*/

//Escreva um algoritmo para ler o numero de eleitores de um municipio, o numero de votos brancos, nulos e validos
//Calcular e escrever o percentual que cada um representa em relacao ao total de eleitores

/*const prompt = require('prompt-sync')()
let eleitores = Number(prompt('Digite o numero de eleitores do seu municipio: '))
let brancos = Number(prompt('Digite o numero de votos brancos: '))
let nulos = Number(prompt('Digite o numero de votos nulos: '))
let validos = Number(prompt('Digite o numero de votos validos: '))
let percentualBrancos = (brancos / eleitores) * 100
let percentualNulos =  (nulos / eleitores) * 100
let percentualValidos = (validos / eleitores) * 100

console.log('O percentual que cada voto representa e: Brancos:', percentualBrancos, '%, Nulos: ', percentualNulos, '%, Validos: ', percentualValidos,'%')*/

//A turma C é composta de 60 alunos, e a turma D de 20 alunos. 
// Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.

/*const prompt = require('prompt-sync')()

let C = 60
let D = 20
let reprovadosC = Number(prompt('Escreva quantos percentual de alunos reprovados na turma C: '))
let aprovadosD = Number(prompt('Escreva quantos percentual de alunos aprovados na turma D: '))

if (reprovadosC > 60 || aprovadosD > 20){
    console.log('Erro encontrado, inicie novamente')
}else if(reprovadosC < 60 || aprovadosD < 60){
    let percentagemC = (reprovadosC * C) / 100
    let percentagemD = ((100 - aprovadosD ) * D) / 100
    console.log('Percentagem de alunos reprovados na turma C: ', percentagemC, '% e aprovados na turma D: ', percentagemD, '%')
}

let totalAlunos = C + D

let relacaoReprovadosTotal = ((percentagemC + percentagemD) * totalAlunos) / 100

console.log('A quantidade de alunos reprovados na turma C e de: ', percentagemC)

console.log('A quantidade de alunos reprovados na turma D e de: ', percentagemD)

console.log('A quantidade de alunos reprovados em relacao ao total de alunos e de: ', relacaoReprovadosTotal) */

//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). Esse dia deve ser um texto.
// Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.

/*const prompt = require('prompt-sync')()
let diaDaSemana = prompt('Digite um dia da semana (Seg, Ter, Qua, Qui, Sex, Sab, Dom): ')

    if (diaDaSemana === 'Dom' || diaDaSemana === 'Sab'){
        console.log('Final de semana')
    } else {
        console.log('Dia Util')
    } */


  //Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. 
  //Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. 
  //Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.      

  /*
const prompt = require('prompt-sync')()
let num 

do {
    num = Number(prompt('Digite um numero: '))  
    
    if (num > 0){
        console.log('Numero Positivo')
    }else if (num < 0){
        console.log('Numero Negativo')
    }
}
while (num !== 0)*/


  //Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida. 
  //Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA".
  //Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado. 
  //Considere que a senha correta é o valor 2807.
/*
const prompt = require('prompt-sync')()
let senha

do {
    senha = prompt('Informe a senha: ')

    if(senha != 2807){
        console.log('Senha incorreta.')
    } else {
        console.log('Acesso permitido!')
    }

} while(senha != 2807)*/