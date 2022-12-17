console.log("it's alive");

let groupNumber = "G4";

let year = 2022;

let groupName = "SEDC" + "-" + groupNumber;

let groupYear = "SEDC" + "-" + year;

let updatedYear = `SEDC - ${groupNumber} - ${year}`;
console.log(groupName);
console.log(groupYear);
console.log(updatedYear);

let brokenString = `It's really nice to be a programmer: "I agree"`;

// logical operators

let numOne = 20;
let numTwo = 50;
let numThree = 100;
let numFour = 120;

let resultOne = numOne + numThree > numTwo + numFour;

console.log(resultOne);

let resultTwo = numOne > 50 && numTwo > 100;

console.log(resultTwo);

let resultThree = numThree === 100 || numFour === 500;

let resultFur = numOne + numTwo > 200 || numThree + numFour > 300;

let zeroIsWierd = 0 || 0;

console.log(zeroIsWierd);

// When logical operators return values instead of booleans

// If left side is true return right side with value
let andExampleOne = true && "SEDC - G4";

// If left side is false return left side
let andExampleTwo = false && "SEDC - G8";

console.log(andExampleOne);
console.log(andExampleTwo);

// If left side has truthy value return value
let orExampleOne = "SEDC - G10" || false;

// If left side is false return right side
let orExampleTwo = false || "SEDC - G3";

console.log(orExampleOne);
console.log(orExampleTwo);

// Control Structures

let score = 120;

// Anything inside of if statement is converted to boolean
if (score > 100) {
  console.log("You Win!");
}

// Else Example

if (score > 200) {
  console.log("You Win In Else Block");
} else {
  console.log("Sorry , try again next time!");
}

// Friday Cash Example Program

let fridayCash = -100;

if (fridayCash >= 50) {
  console.log("Awesome, go to a dinner and movie");
} else if (fridayCash >= 35) {
  console.log("Go get a nice dinner");
} else if (fridayCash >= 12) {
  console.log("Go to cineplex");
} else {
  console.log(
    "See what's new on netflix, or actually pirate cause you don't have money"
  );
}

// let firstName = prompt("What's your first name");

// console.log(firstName);

let age = prompt("What is your age?");

let parseIntResult = parseInt(age);

let numberResult = Number(age);

console.log(age, parseIntResult, numberResult);
