console.log("it works");

let grade = 1;

switch (grade) {
  case 1:
    console.log("Both parents need to see prinicipal");
    break;
  case 2:
    console.log("Only one parent needs to see princial");
    break;
  case 3:
    console.log("Only student needs to see principal");
    break;
  case 4:
    console.log("Well done, could be better");
    break;
  case 5:
    console.log("Keep going, you will get far my son");
    break;
  default:
    console.log("Stop playing around with the switch statement");
}

// Functions

function sayHello() {
  console.log("Hello everyone from G4");
  console.log("I hope you find functions easy");
}

sayHello();
sayHello();

function addTwoNumbers(numOne, numTwo) {
  let addResult = numOne + numTwo;

  //   Local function variables are only available to the functions where they are defined
  let academyName = "Web Developer";

  return addResult;
}

// console.log(addResult);
// console.log(academyName);

addTwoNumbers(200, 300);

addTwoNumbers(56, 23);

addTwoNumbers(13, 7);

function addThreeNumbers(numOne, numTwo, numThree) {
  let result = numOne + numTwo + numThree;
  console.log(result);
}

let test = "test";
console.log("this is between function calls");

addThreeNumbers(125, 200, 73);

let result = addTwoNumbers(450, 550);

let resultTwo = addTwoNumbers(100, 150);

let numOne = 2400;
let numTwo = 10020;

let resultThree = addTwoNumbers(numOne, numTwo);

console.log(
  `This is the result variable: ${result}, ${resultTwo}, ${resultThree}`
);

console.log(String(30000), "G4", "SEDC", "FOCUS STUDENTS");

// Scope Examples

let name = "John"; //global varable
function sayMyName() {
  //lots of code
  let name = "Jane"; //local varable
  //lots of code
  console.log(name); //Jane
}

sayMyName();
console.log(name); //John

// Global Variables

let wage = 500; //global varable
function calculateWageBonus() {
  //lots of code
  wage = 500 + 100; //the global varable
  //lots of code
  console.log(wage); //600
}

calculateWageBonus();
console.log(wage); //600

function wageCalc() {
  wageTotal = 1000; // `a` not formally declared
}

wageCalc(); // This will automatically create a global variable.
console.log(wageTotal); // AVOID doing this

let message = "Outside the function";
function warning(message) {
  console.log(message);
}

warning("Inside the function");
console.log(message);
