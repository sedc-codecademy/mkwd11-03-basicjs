// alert("Hello from SEDC!!");
console.log("Hello from JavaScript");

// Variables 
console.log("------ Variables -------")

// declaration
var trainer;

// initialization
trainer = "Pane";
// trainer = 'Pane';

console.log(trainer);

// document.getElementById("name").innerHTML = trainer;

// 100 lines later

trainer = "Jown Dow";
console.log(trainer);

var assistant = "Radmila";
// assistant = 5;
console.log(assistant);

// undefined vs null
console.log("------ Undefined vs Null -------")

var testVar;
console.log(testVar);
// undefined - the variable does not have a value yet

// testVar = 1;
// console.log(testVar);

var testVar02 = null;
console.log(testVar02);
// null - we delibertly want to put null as a value

// naming convetion types
// camelCase: userInputNumber -> we usually use this for naming variables in JS
// pascal case: UserInputNumber
// kebab case: user-input-number

// equality in JS
console.log("-------- Equality in JS --------")

// checks if the two sides are equal by value and type
console.log(5 === "5");

// checks if the two sides are equal only by value
console.log(5 == "5");

console.log( 4 !== 1);

console.log( 4 != "4");
console.log( 4 !== "4");

console.log(4 > 2);
console.log(4 >= 4);

console.log(5 + 3);
console.log(5 * 3);


// asignemnt operators
console.log("-------- Asignement operators in JS --------");

var a = 1;
// console.log(a);
var b = 5;
var c = a + b;

a += b;

console.log(c);
console.log(a);


// Exercise 3

var feet = 90;
const ponder = 0.3048;
var feetToMeters = feet * ponder;

console.log(feet + " feet are equal to " + feetToMeters + " meters");

// newer and fancy way
console.log(`${feet} feet are equal to ${feetToMeters} meters`);

// Ecercise 4

var sideA = 15;
var sideB = 7;
var area = sideA * sideB;

console.log(`Rectangle area is: ${area}m2`);

// Ecercise 5
var radius = 10;
var areaCircle= (radius * radius) * Math.PI;
console.log(Math.PI);
console.log(`Circle area is: ${areaCircle}m2`)






