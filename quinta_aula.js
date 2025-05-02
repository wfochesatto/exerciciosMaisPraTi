let listaFrutas = Array()
let listaNomes = ['Giovana', 'Augusto']

listaFrutas [0] = 10
listaFrutas [1] = 'morango'
listaFrutas ['adocicadas'] = 'pera'

for(let i = 0; i < listaFrutas.length; i++){
    console.log(listaFrutas(i))
}

listaFrutas.push('melancia')   //adiciona no final
listaFrutas.unshift('Laranja') //adiciona no comeco

listaFrutas.pop() //elimina o ultimo item do array
listaFrutas.shift() //elimina o primeiro item do array

console.table(listaFrutas)