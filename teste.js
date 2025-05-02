const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Insira o primeiro valor: "))
let valor2 = Number(prompt("Insira o segundo valor: "))
let op = prompt('Informe a operacao desejada: (+, -, /, *):')
let resultado = 0

if(op === '+'){
    resultado = valor1 + valor2
} else if(op === '-'){
    resultado = valor1 - valor2
} else if(op === '*'){
    resultado = valor1 * valor2
} else if(op === '/'){
    resultado = valor1 / valor2
   if(valor2 !== 0){
        resultado = valor1 / valor2
    }   else {
        console.log('Erro: divisao por zero')
        resultado = undefined
    }
} else{
    console.log('Operacao invalida')
    resultado = undefined
}
if(resultado !== undefined){
    console.log("Resultado: ", resultado)
}
