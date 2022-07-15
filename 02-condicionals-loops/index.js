// statements

// if..else
let condition = true
let car = true

if (condition) {
    // Se a condição for verdadeira, executa este bloco de código
} else { //esse é opcional
    // Se a condição for false, executa este bloco de código
}

const age = 50;

if (age < 18){
    // se a idade for menor 18, executa esse bloco
    console.log('Você não pode beber!!')
} else if (age >= 50 && !car) {
    // Se idade >=18 E idade >= 50, execute esse trecho
    console.log('Você pode beber o drink especial')
} else if(!car) {
    console.log('Você pode beber!!')
} else {
    console.log ('Seja consciente')
}

const num1 = 25;
const num2 = 25;

if (num1 === num2){
    console.log(`${num1} e ${num2} são iguais`)
} else {
    if (num1 > num2){
        console.log(`${num1} é maior que ${num2}`)
    } else {
        console.log(`${num2} é maior que ${num1}`)
    }
}

// operador ternario

num1 === num2 ? 
    console.log('são iguais') : 
        num1 > num2 ? 
            console.log('num1 maior que num2') : 
                console.log('num2 maior que num1')

// short circuit
num1 === num2 && console.log('são iguais pelo short circuit')

//Switch
 let expression = 'monica'

switch (expression) {
    case 'monica':
        console.log('cenoura')
        break;
    case 'cebolinha':
        console.log('cenoula')
        break;
    default:
        console.log(`não conheço ${expression}`)
}


// Loops and Iterations

while (false) {
    // executar este trecho de código
}

let i = 0;

while (i <= 20){
    // console.log(i)
    i += 1 // i++
}
console.log('sai do while', i)

// do while

do {
    i -= 1 // i --
    // console.log(i)
}while(i >= 0)

console.log('sai do do while', i)


// for
// inicializador, condição, expressão final

for(let i = 0; i <= 50; i += 1){
    console.log(i)
}

console.log('sai do for');


// for ..of

const phrase = 'Everything in moderation, including moderation'
//              0123456789...

// console.log(phrase[0])
for (let letter of phrase ){
    console.log(letter)
}

console.log('------- x -------');


// break & continue

for(let i = 0; i <= 10; i += 1){
    console.log(i)
    if(i === 5) {
        break;
    }
}

for(let i = 0; i <= 10; i -= 1){
    if(i === 5) {
        continue;
    }
    console.log(i)
}

console.log('------ fim -------');