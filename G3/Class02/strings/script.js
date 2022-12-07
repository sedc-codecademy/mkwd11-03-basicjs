// console.log("Connected");

let greetings = "Hello" + " " + "from" + " " + "SEDC";

let firstName = "Trajan";
let lastName = "Stevkovski";

let greeting1 = "Hello " + firstName + " " + lastName + " from SEDC";
let fullName = `${firstName} ${lastName}`; // Trajan Stevkovski
//console.log(greeting1);

let dob = 1990;

let greetYourself = "Hello my name is " + firstName + " " + lastName + " and im born " + dob + " year";
let greetYourself1 = `Hello my nanme is ${firstName} ${lastName} and I'm born ${dob} year`;

//console.log(greetYourself);
//console.log(greetYourself1);

// Hello I'm Trajan
let singlePara = 'This is a string in single parentesis';
let doublePara = 'I"m'//"I'm ";



let a = 3 / "Trajan";

console.log(a);
console.log(typeof a);

let isItNan = a === NaN;
console.log(isItNan);

let isItNan1 = isNaN(a);
console.log(isItNan1);

let isItNan2 = isNaN("Trajan");
console.log(isItNan2);

let isItNan3 = Number.isNaN(a);
let isItNan4 = Number.isNaN("Trajan");

console.log(isItNan3); // for a
console.log(isItNan4); // for Trajan


let maxNumber = Infinity;
console.log(maxNumber);
console.log(typeof maxNumber);