// Exemplo



// Declaração

function functionName(parameters) {
    // Bloco de código que será executado na função
}

// Invocar / Executar uma função

functionName('argumento')

// Nomeando Funções

// descritivo
// utilizar um verbo
// camelCase

// getData
// increaseAge
// sayHello

function sayHelloJoao () {
    console.log('Hello, Joao');
}

function sayHelloJoana () {
    console.log('Hello, Joana');
}

// sayHelloJoao()
// sayHelloJoana()

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

// sayHello('Carlos')
// sayHello('Eduardo')
// sayHello('Matilde')

// string.split('').join(' ').toUpperCase()

function capitalizeAndSpaceString (string){
    console.log(string.split('').join(' ').toUpperCase())
}

// capitalizeAndSpaceString('Phelipe')
// capitalizeAndSpaceString('MaTiLde')

// Multiplos parametros

function sayHi(name1 = '', name2 = '', name3 = ''){ // <-- parametros ou argumentos
    console.log(`Hi, ${name1}, ${name2}, ${name3 ? name3 : ''}`);
}

// sayHi('Helio','Renata','Jonathan')

// Retorno de função

function sayBye(name) {
    return `Bye, ${name}`
}

let result = sayBye('Helio')

// console.log(result);

// multiplos retornos


function printName(name){
    if(!name){
        return 'Please, provide a name'
    }
    return `Name is ${name}`
}

// console.log(printName('Lena')) 

function getUserInfo(firstName, lastName){

    const userInfo = {
        username: firstName,
        surname: lastName
    }

    return userInfo
}

// console.log(getUserInfo('Gabriel','Sicuto'));

function getFavorites(fav1, fav2,fav3){
    const favorites = [fav1, fav2, fav3]
    return favorites
}

console.log(getFavorites('goiaba', 'banana', 'morango'));

/** 
 * Código Reutilizável
 * Abstração
 * Separação de preocupação: Separation of concerns
 * Single Responsability - Responsabilidade única
*/

function average(arrayNumbers) {
    // Se não tiver nenhum numero do array retornar undefined
    if(!arrayNumbers.length) return
    
    // faz soma
    let sum = 0
    for(let i = 0; i < arrayNumbers.length; i += 1){
        sum += arrayNumbers[i]
    }
    
    // calcula média
    let average = sum / arrayNumbers.length
    
    return average
}

// console.log(average([2, 10, 15]));

function sum(arrayNumbers) {
    if(!arrayNumbers.length) return
    let sum = 0
    for(let i = 0; i < arrayNumbers.length; i += 1){
        sum += arrayNumbers[i]
    }
    return sum
}

function avg(arrayNumbers){
    if(!arrayNumbers.length) return
    return sum(arrayNumbers) / arrayNumbers.length
}

console.log(avg([2, 10, 15]));


// Formas de diferentes de declarar funções

let myFunc = function () {
    console.log('função anonima')
}

myFunc()

// arrow function

let myArrowFunc = () => {
    console.log('arrow function')
}

myArrowFunc()


