console.log("Connected");

let a = 2;
let b = 4;

let sum = a + b; // sum = 2 + 4; = 6
let substract = b - a; // substract = 4 - 2; = 2

console.log(sum);
console.log(substract);

let c = "2" + "2"; // 22
// concatenation
let firstName = "Trajan";
let lastName = "Stevkovski";

let fullName = firstName + " " +  lastName; // TrajanStevkovski -> Trajan Stevkovski
console.log(fullName);

let test = firstName + " " +  lastName + 7; // Trajan Stevkovski7

let multiply = a * b; // 8
let divide = b / a; // 2
let modul = b % a; // 0

console.log("==========")
console.log(multiply);
console.log(divide);
console.log(modul);

let sumOfAll = sum + substract + multiply + divide + modul;

let abc = 1;

abc++; // 2
abc = abc + 1; // 3

abc--; // 2
abc = abc - 1; // 1


abc+=3;
abc = abc + 3;

abc-=3;
abc = abc - 3;

abc*=2;
abc = abc * 2;


// comparison operators


let large = 10;
let small = 5;

console.log(large > small); // true
console.log(small >= large); // false

console.log(large <= small); // false
console.log(small < large); // true

console.log("4" == 4); // with 2 equals we compare only value
console.log("4" === 4); // here we compare values and types
console.log(large != small); // true

console.log(large = small); // 5