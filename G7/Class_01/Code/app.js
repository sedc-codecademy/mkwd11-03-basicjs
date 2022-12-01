console.log("Hello from Javascript");
console.log("CONNECTED");

// Javascript basic concepts

// DECLARATION OF VARIABLE

// var is old school keyword to declare a variable =)
var firstName;
var lastName;

// Initialization

firstName = "Bob";
lastName = "Bobski";

console.log(firstName);
console.log(lastName);

// let is a modern keyword to declare a varible =)

// DECLARATION OF VARIABLE
let trainerOne;

// INITIALIZATION OF THE VARIABLE
trainerOne = "Aneta";

console.log(trainerOne);

// DECLARATION & INITIALIZATION

// trainerTwo is the variable that holds the value "George"
// camel case
let trainerTwo = "George";
console.log(trainerTwo);

// snake case
let full_name = "John Doe";

// do not do it =) bad example:
// let име_на_филм

// do not write variables like that =) bad example:
// let 1something = ""

// some names in js are reserved like new:
// let new = ""

// DECLARATION OF MULTIPLE VARIABLES
let subjectOne, subjectTwo, subjectThree;

// INITIALIZATION OF THE PREVIOUS DECLARED VARIABLES
subjectOne = "HTML";
subjectTwo = "CSS";
subjectThree = "Javascript";

// ** EXAMPLE 2 **

let glassOfWater, basketOfFruits, tankOfGasoline;

glassOfWater = "filled";
basketOfFruits = "Banana, Ananas";
tankOfGasoline = "it is full";

console.log(subjectOne, subjectTwo, subjectThree);

console.log("--- Primitive Data Types ---");

console.log("Jack"); // String
console.log("250"); // String
console.log(100); // Number
console.log(25); // Number
console.log(true); // Boolean
console.log(false); // Boolean
console.log(null); // Null
console.log(undefined); // Undefined

let someName = "John";
let someNumber = 12.1;
let someBoolean = true;
let someNull = null;
let someUndefined;

console.log("--- Type of the variables ---");
// typeof is a function from javascript that can tell us of which data type is
// the given variable
console.log(typeof someName);
console.log(typeof someNumber);
console.log(typeof someBoolean);
console.log(typeof someNull);
console.log(typeof someUndefined);
console.log(typeof "Hello fellas and ladies");

console.log("--- New line in strings ---");

let greetingMessage = "Hello \n world!";
console.log(greetingMessage);

/* Multi line comments
this is really helpful
Cool comment
so we can have documentation in our
CODE! */

console.log("--- Aritmetical Operators ---");

let numberOne = 20;
let numberTwo = 5;

let additionResult = numberOne + numberTwo;
console.log(additionResult);

let substractionResult = numberOne - numberTwo;
console.log(substractionResult);

let multiplication = numberOne * numberTwo;
console.log(multiplication);

let division = numberOne / numberTwo;
console.log(division);

let modulusResult = numberOne % numberTwo;
console.log(modulusResult);

let incrementResult = ++numberOne;
console.log(incrementResult);

let decrementResult = --numberTwo;
console.log(decrementResult);

let expoResult = 2 ** 3;
console.log(expoResult);

let complexCalculation = (30 - 20) * 2;
console.log("Result is ", complexCalculation);
// We can directly print values of variables if we want to
console.log((numberOne + numberTwo) / 3);

console.log("--- Comparison Operators ---");

// The comparison operators will always return boolean (true / false)
let numberThree = 50;
let numberFour = 100;

console.log(numberThree < numberFour); // true
console.log(numberThree >= numberFour); // false
console.log(numberThree == numberFour); // false
console.log(numberThree != numberFour); // true
console.log("--------");

// the two equals (==) comparison operator
// will compare just the values of the variables
console.log(10 == "10"); // true
console.log(10 == "20"); // false

/* the triple equals (===) will compare
the values and the types, it is more secure and safe */
console.log("10 === '10' ", 10 === "10"); //false
console.log("20 === 20", 20 === 20); //true

console.log("20 === 100", 20 === 100); //false

// != not equal with ! and one equal will compare just the values =)
console.log(" '5' != 6 ", "5" != 6); // true
console.log(" '5' != 5 ", "5" != 5); //false
// !== not equal with ! and two equals will compare the data type too =)
console.log(" '5' !==  5", "5" !== 5); //true

console.log("----- Assignment IN JS -----");
// JS allows us to overwrite values of variables
// here we declare and initialize the variable movieName
let movieName = "Before the rain";
console.log(movieName);

// here we overwrite the value of the variable movieName
movieName = "Lord of the Rings";
console.log(movieName);

console.log("----- Assignment Operators -----");

let myNumber = 5;
let secondNumber = 10;
let thirdNumber = 2;

console.log("The value of the variable myNumber is ", myNumber);

myNumber += secondNumber; // same as myNumber = myNumber + secondNumber

console.log(myNumber);
console.log((secondNumber /= thirdNumber)); // same as secondNumber = secondNumber / thirdNumber
let newCalulation = myNumber + secondNumber;
console.log(newCalulation);

// feet to meters convertor
/*
    1. I should have given feet so I can convert ( I should have that value )
    2. I should have the given ratio ( I should have that value which is 1 feet = 0.3048 )
    3. I should multiply the given feet with 0.3048
 */

let givenFeetToConvert = 15;
let ratioOfFeetToMeters = 0.3048;

let conversionRateToMeters = givenFeetToConvert * ratioOfFeetToMeters;

console.log("Result of conversion is: ", conversionRateToMeters);
