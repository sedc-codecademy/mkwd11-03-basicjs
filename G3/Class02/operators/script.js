let a = 10;
let b = 15;

let comparison1 = a < b; // true
let comparison2 = a != b; // true
let comparison3 = b >= a; // true
let comparison4 = b === a; // false

let expression = comparison1 && comparison2 && comparison3; // true && true && true -> true
console.log(`expresion: ${expression}`);

let expresion1 = comparison1 || comparison2 || comparison4; // true || true || false -> true
console.log(`expression1: ${expresion1}`);

let complexExpression = (5 < 2) && ((3+4) === 7);// 5 < 2 -> false && (3+4 -> 7 === 7) -> false && true -> false
console.log(`complexExpression: ${complexExpression}`);



let cat = "Cat";
let dog = "Dog";
let mouse = "";
let snake;

console.log(cat && dog); // thruty && thruty -> second value -> 'Dog'

let isValidThruty = (3+2) === 5 && dog && !mouse; // true && "Dog" && true -> true

let orComparison = dog || mouse || cat;
let value = mouse || cat;

console.log(snake && dog); // falsy && true -> undefined
console.log(null && snake); // falsy && falsy -> null
