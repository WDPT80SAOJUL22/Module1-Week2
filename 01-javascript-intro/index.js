// console.log() <--- Imprimo uma mensagem no console/ terminal

console.log('--------AULA 01 - intro js ------')

// COMENTÁRIOS
// comentários irrelevantes devem ser apagados antes da entrega

// console.log('teste')

/*
    Tudo que está dentro deste
    bloco está 
    comentado
*/

// Variáveis

// var name <--- não utilizar

let name;
let age, email;

name = 'Hugo'; // atribuindo um valor a uma variavel
console.log(name);
let course = 'Web Dev';

// variaveis podem ter letras maisculas, minusculas, numeros e os simbolos _ e $
// Javascript é case sensitive N != n
// variaveis não podem iniciar com numero

let aluno1, _underScore, $varComCifrao;
let snake_case;
let PascalCase;
let camelCase; // <----- vamos usar este
let primeiraSegundaTerceiraQuarta
// kebab-case 

console.log('--alterações nos valores de variaveis--')

let favoriteFood;
console.log('Valor:', favoriteFood, '|Tipo:', typeof favoriteFood)

favoriteFood = 'Churrasco' 
console.log('Valor:', favoriteFood, '|Tipo:', typeof favoriteFood)

favoriteFood = 'Pizza' 
console.log('Valor:', favoriteFood, '|Tipo:', typeof favoriteFood)

favoriteFood =  12345
console.log('Valor:', favoriteFood, '|Tipo:', typeof favoriteFood)

// Variaveis constantes

console.log('--variaveis constantes--')

const gravity = 9.8;

// gravity = 8 não é possivel faver uma nova atribuição para variaveis constantes 

const x = 'Web Dev Sao Paulo'; //Não Fazer
let i, j, k

let username, courseInfo, firstName, lastName, address, totalPrice
let info, value // precisa estar claro no escopo 

console.log('--Fim--')

