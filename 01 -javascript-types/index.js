console.log('--Aula01: Data Types--')

// tipos primitivos
// tipos não primitivo ou objetos

/*
Tipos Primitivos:
    - Number **
    - String **
    - Boolean
    - null
    - undefined
    - symbol <-- ECMA6 / ES6
--> São imutáveis
*/

console.log('---Number---');

const intNumber = 37;
const floatNumber = 3.14151927;
const infNumber = Infinity;
const notANumber = NaN;

let age = 31;
console.log('age / 2:', age /2);
const firstName = 'Gabriel'
const result = firstName / 2

console.log('name / 2: ', result * 10);

// Operações Matemáticas

console.log('---Expressões Matemáticas---');

const soma = 2 + 2;
const subtracao = 4 - 2;
const multiplicacao = 3 * 2;
const divisao = 6 / 2;
console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

const exponecial = 2 ** 5;
console.log(exponecial);

const quociente = 4 / 2;
const modulo = 5 % 2;
console.log(quociente, modulo);

//Verificar se um numero é par
const divisivelPor2 = 9 % 2 === 0
console.log('9 é divisivel por 2', divisivelPor2);

// Operadores de atribuição

age += 1 // age = age + 1 ... age ++
console.log(age)
age -= 1 // age = age - 1 .. age --
console.log(age)
age /= 2 // age = age / 2
console.log(age)
age *= 3 // age = age * 3
console.log(age)
age %= 5 // age = age % 5
console.log(age)

// Math lib

console.log('raiz quadrada de 4 ---->', Math.sqrt(4))

// Expressões matematicas

const exp1 = 4 + 2

const exp2 = (7 + 5) / 3 - 8;
console.log(exp2)

// PEMDAS
// Parenteses
// Expoentes
// Multiplicacao
// Divisao 
// Adicao 
// Subitracoes

const exp3 = 10 + (5 * 2 ** 3) / 4 - 6;
console.log(exp3);

// Strings - sequencia de caracteres

console.log('---- Strings ----');

const str1 = 'aspas simples';
const str2 = "aspas simples";
const str3 = `crase ou backtick`; // template literals ou template string

// template strings
const student = 'Helio'

console.log(`Olá, ${student}`);
console.log(`${student}, estuda ${1 + 3} horas por dia`);

// antes do ES6

console.log('Olá, ' + student)
console.log(student +', estuda ' + 1 + 3 + ' horas por dia') // não é possivel fazer operações matematicas

// const favoriteMovie = "O meu filme favorito é "Rei leão"."
const favoriteMovie = 'O meu filme favorito é "Rei leão".'
console.log(favoriteMovie)
const favoriteMovie2 = "O meu filme favorito é \"Rei leão\"."
console.log(favoriteMovie)

const mood = 'I\'m ok!'
console.log(mood)

const list1 = '1.banana\n2.maça\n3.goiaba'
console.log(list1);

const list2 = `1.abacaxi
2. kiwi
3.mamão`
console.log(list2);

// quantos caracteres tem a minha string

console.log(favoriteMovie.length);

// acesso o primeiro caracter de uma string

const greetings = 'Olá, seja bem vindo!'

console.log(`${greetings} é uma string de comprimeto ${greetings.length}`);

// charAt(n)
console.log(greetings.charAt(0));
console.log(greetings.charAt(1));
console.log(greetings.charAt(4));
console.log(greetings.charAt(6));
console.log(greetings.charAt(19));
console.log(greetings.charAt(20));

// -> Indice
console.log(greetings[0]);
console.log(greetings[2]);
console.log(greetings[6]);
console.log(greetings[19]);

//encontrar o indice de um caracter ou um trecho sub string

const message = 'Não se preocupe, Não precisa chorar!'
console.log(message.indexOf('Não'));
console.log(message.indexOf('e'));
console.log(message.indexOf('Não', 5));

// repetir um string

console.log('olá '.repeat(3));
console.log(`na ${'nana'.repeat(20)}, Batman!`);

// encontrar um trecho a partir do indice
console.log(message.substring(15));
console.log(message.substring(15, 20));
console.log(message.substring(15, 5));
console.log(message.substr(15, 5)); // indice de inicio e quantos caracteres eu quero
console.log(message.slice(15, 20));
console.log(message.slice(-10, -4));


//comparar para ordernar

console.log('barcelona'.localeCompare('miami')); // -1
console.log('miami'.localeCompare('barcelona')); // 1
console.log('miami'.localeCompare('miami')); // 0
console.log('miami'.localeCompare('Miami')); // -1


//alterar case
console.log('gAbRieL'.toLowerCase());
console.log('gAbRieL'.toUpperCase());

// .startsWith(str[,posição])
console.log(message.startsWith('Não', 17));

// .endsWith(str[,comprimeto])
const message2 = 'goiaba e muito bom'
console.log(message2.endsWith('aba', 6));

// .includes(str[])

console.log(message2.includes('mui'))


console.log('-- FIM --')
