//Boolean / Bool
true;
false;

// Operadores Lógicos

const exp1 = 1 < 10 // true
const exp2 = 4 > 8 // false

// > maior que
// < menor que 
// == / === 2 iguais não valida tipo / 3 iguais valida tipo

// OR: ||

console.log('OR:', exp1 || exp2)

true || true || true || true // true
true || true || true || false // true
true || false || false || false // true
false || false || false || false // false

// AND: &&

console.log('AND:', exp1 && exp2)

true && true && true && true // true
true && true && true && false // false
false && false && false && false // false

// short-circuits
exp2 || console.log('short circuit OR') 
exp1 && console.log('short circuit AND') 

//  NOT: !

console.log(!true) // false
console.log(!false) // true

// Undefined e Null
let name //<--- undefined
console.log(name)

// null
name = null
console.log(name)

//truthy or falsy

let condition = false

if (condition) {
    console.log('truthy!')
} else {
    console.log('falsy!')
}

// Immutabilidade

let city = 'miami'
city[0] = 'M'
console.log(city[0])

city = 'berlin' // Podemos reatribuir valores
console.log(city)

city[0] = 'B' // não podemos mudar o valor de 'berlin'
console.log(city)

