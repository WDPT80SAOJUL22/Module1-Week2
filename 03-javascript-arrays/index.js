// Type Array
/**
 * Acessa Elementos do array
 * Adiconar no array unshift push
 * Remover Elementos de um array splice, shift, pop
 * itera sobre um array
 * metodo forEach
 * split() transforma uma string em array
 */

// Declaração

const arr = [] // array vazio

const arrNames = ['Gabriel', 'Guilherme', 'Joana'] 
//                  0            1           2

const arrRandom = ['Pedro', 2, {age: 31}, function saymyname(){}, true]

console.log(arrRandom[3]) // acessar um elemento pelo indice

console.log(arrRandom[arrRandom.length - 1]) // acessar o último elemento do array

// adicionar um elemento novo no array

arrNames.push('Amanda') // aciona no final
console.log(arrNames)

arrNames.unshift('Lena') // adiciona no começo
console.log(arrNames)

arrNames.splice(1,0,'Marcelo') // adicionar no meio do array
console.log(arrNames)

// remover elementos

arrNames.pop() // remove o ultimo elemento
console.log(arrNames)

arrNames.shift() // remove o primeiro elemento
console.log(arrNames)

let spliceResult = arrNames.splice(1,2) // remover do meio do array
console.log(arrNames, '<---- arr')
console.log(spliceResult, '<---- o que foi removido')

// Loops

for(let i = arrNames.length - 1; i >= 0; i -= 1){
    console.log(arrNames[i]);
}

// For Each

// array.forEach(function (element) {
//  // o que quero que seja feito para cada elemento
// })

// função anonima
arrNames.forEach(function (name) {
    console.log(name)
})

// declared function
function forEachName (name) {
    console.log(name)
}

arrNames.forEach(forEachName)

// arrow function

arrNames.forEach((name) => {
    console.log(name)
})

// sugar sintax arrow Function

arrNames.forEach((name) => console.log(name));


['a', 'b', 'c'].forEach(() => console.log('goiaba'));
['a', 'b', 'c'].forEach((element) => console.log(element));
['a', 'b', 'c'].forEach((element, index) => console.log(`${index}: ${element}`));
['a', 'b', 'c'].forEach((element, index, arrOriginal) => console.log(`${index}: ${element}`, arrOriginal));

// Split

let text = 'LoremLoremLoremLoremLorem'
let splitedtext = text.split('')

console.log(text)
console.log(splitedtext)


// let obj1 = {
//     name: 'Gabriel',
//     age: 31,
//     birthDay: function() {
//         this.age += 1
//     }
// }

// console.log(obj1);
// obj1.birthDay()
// console.log(obj1);