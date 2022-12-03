// Logs values to the console
console.log("script working");

// Shows the user an alert popup in the browser
// alert("hello from g4");

// Basic variables examples

// Declaration
let studentName;
console.log(studentName);

// Initialization
studentName = "Bojan";
console.log(studentName);

// Declaration and initialization
let studentLastname = "Gulicoski";

console.log(studentLastname);

// Primitive data types

// Strings
let fruit = "Apple";
let fruits = "Apples\nOranges\nPears";

console.log(fruit);
console.log(fruits);
// Shows type of data after typeof keyword
console.log(typeof fruit);

// Numbers
let numberOne = 300; //Never define numbers with quotes ex: "300"
let numberTwo = 1200;

console.log(numberOne, numberTwo);
console.log(typeof numberTwo);

//Booleans

let isAvailable = true;

let isFruitAvailable = false;

console.log(isAvailable);

console.log(typeof isFruitAvailable);

// Undefined

let className;

console.log(className);

className = "SEDC - G4";

console.log(className);

// NULL

let academyName = "SEDC Gen 11";

academyName = null; //this is a null variable

console.log(typeof academyName);

//This is a single line comment

/*
This is an example
of a multiline comment
*/

// Arithmetic Operators

let numOne = 300;
let numTwo = 145;

// Addition
console.log(numOne + numTwo);

// Subtraction
console.log(numOne - numTwo);

// Multiplication

// Saving result in variable
let multResult = numOne * numTwo;

console.log(multResult);

// Division
console.log(numOne / numTwo);

// Modulus

let modOne = 18;
let modTwo = 4;

// Returns remainder of divison of first number with second number
console.log(18 % 4);

// Increment
// Adds one to number variable
let incrementCounter = 4;

// incrementCounter = incrementCounter + 1;
incrementCounter++;

console.log(incrementCounter);

// Decrement
// Removes one from number variable
let decrementCounter = 10;

decrementCounter--;

console.log(decrementCounter);

// Comparison Operators
// !ALWAYS RETURN BOOLEAN

let compNumOne = 320;
let compNumTwo = 100;

console.log(compNumOne <= compNumTwo);
console.log(compNumOne >= compNumTwo);

let countryOne = "Germany";
let countryTwo = "Poland";

// Not equal
console.log(countryOne !== countryTwo);
// Equal
console.log(countryOne === countryTwo);

// Assignment Operators always change the left side of the operation

let assNumOne = 10;
let assNumTwo = 50;

// This will add to variable one
// assNumOne += assNumTwo;
assNumOne = assNumOne + assNumTwo;
// This wont work
// assNumOne + assNumTwo;

console.log(assNumOne);

// Exercise One

let lengthInFeet = 150;

let lengthInMeters = 1200;

let oneFootInMeter = 0.3048;

let resultInMeters = lengthInFeet * oneFootInMeter;

let resultInFeet = lengthInMeters / oneFootInMeter;

console.log(resultInMeters);
console.log(resultInFeet);

// Exercise two

let length = 100;
let height = 250;
let width = 100;

let area = length * height;

let volume = length * width * height;

let pi = Math.PI;

let radius = 50;

let circleArea = pi * (radius * radius);

console.log(circleArea);
