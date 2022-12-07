// STRING CONCATENATION

const firstName = "Ivan";
const lastName = "Lazarevski";

const fullName = firstName + " " + lastName;
console.log("fullName:", fullName);

// Using string interpolation (template literals)
// Using backticks, it overcomes every issue
// RECOMMENDED
const fullNameInterpolated = `${firstName} - ${lastName}`;
console.log("fullNameInterpolated:", fullNameInterpolated);

// Why string interpolation is better
// const description =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.
//   Magnam reiciendis nostrum vel quo aut ut temporibus omnis labore eligendi eum quia ipsum voluptas iusto blanditiis accusamus maiores, aperiam sint fugiat.";

const descriptionInterpolated = `Lorem ipsum dolor 
sit amet consectetur adipisicing elit. 
Magnam reiciendis nostrum vel quo aut ut temporibus 
omnis labore eligendi eum quia ipsum voluptas iusto 
blanditiis accusamus maiores, aperiam sint fugiat.`;
console.log(descriptionInterpolated);

// const yellowSnow = 'Don\'t eat the yellow snow.';
const yellowSnow = `Don't eat the yellow snow, ${firstName}.`; // Way easier
console.log(yellowSnow);

// NON VALUE TYPES
// Undefined means declared, but not initialized
let currentUser; // This is undefined
currentUser = "Ivan";
// NULL means declared, and initialized to have an empty value
currentUser = null;

// NON NUMBERS (NaN)
// NaN is the result of trying to do some math over a value that is not a number
/* AVOID using math with non-number values EVEN if it works. It's bad practice,
because it's inconsistent and you don't know if it will break somewhere.
*/
const radius = 5;
const result = radius * "pi";
console.log("result:", result, `Type of NaN ${typeof result}`);
// Check if a value is NaN
console.log(Number.isNaN(result));

// INFINITIES
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
console.log(1 / 0);

// LOGICAL OPERATORS
const carStatus = "open";
const carLongitude = 41.44;
const carLatitude = -32.12;

// Logical AND
const carOpenAndLocatedNorth = carStatus === "open" && carLongitude > 0;
console.log("carOpenAndLocatedNorth: ", carOpenAndLocatedNorth);

// Logical OR
const carOpenOrLocatedWest = carStatus === "open" || carLatitude > 0;
console.log("carOpenOrLocatedWest: ", carOpenOrLocatedWest);

// Logical NOT
// Checks if the car value is NOT 'open'
const isCarNotOpen = carStatus !== "open";
console.log("isCarNotOpen", isCarNotOpen);

const firstPlayerScore = 10;
const secondPlayerScore = 14;
const thirdPlayerScore = 17;
const fourthPlayerScore = 6;
const firstTeamScore = firstPlayerScore + secondPlayerScore;
// Expressions evaluate into values. Like a mathematical expression.
// 2 + 3 = 5 is an expression. It evaluates(results) in 5.
// clientAge > 30 is also an expression.
// The values involved in the operation of said expression are called operands.
const firstTeamWon = firstTeamScore > thirdPlayerScore + fourthPlayerScore;

// FALSY & TRUTHY
// FALSY AND TRUTHY VALUES
// Don't try to remember them all, only remember that they exist.
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
// Basically if it needs to be checked in an IF statement or similar
const petName = "";
const dogHasToy = "Yes, he does";
console.log("Falsy?", petName && dogHasToy);

// You can convert falsy/truthy values to TRUE/FALSE
// You can use this to convert empty strings, undefined, null into true/false
// Makes it easy to check if something exists or not
const booleanPetName = !!petName; // falsy -> true -> false


// INEQUALITY
// Like before, avoid doing inequality with non-number values
const pushupsToday = 999;
const favoriteFood = "Pizza";

console.log("Is 999 pushups greater than pizza", pushupsToday > favoriteFood);
console.log("Is 999 pushups less than pizza", pushupsToday < favoriteFood);
console.log("Is 999 pushups as good pizza", pushupsToday === favoriteFood);

const headphonePrice = 109.99;
const costMaximum = "150";
// Even if this works, AVOID it. Bad practice, hard to track.
console.log(headphonePrice < costMaximum);

// CONTROL STRUCTURES
const sugarAmount = 100;
if (sugarAmount >= 500) {
  console.log("You can make a cake!");
} else {
  console.log(`You can't make a cake!`);
}

// NEVER DO THIS
// if (sugarAmount >= 100)
//   console.log("You can make a cake without brackets!");
// else
//   console.log(`You can't make a cake without brackets!`);
//   console.log("I want to be in the if statement too!");

// Multiple Conditions
const initialWage = 500;
const role = "Senior";

let calculationBonus = 0;

if (role === "Senior") {
  calculationBonus = initialWage * 2.2;
} else if (role === "Medium") {
  calculationBonus = initialWage * 1.6;
} else {
  calculationBonus = initialWage * 1.1;
}

console.log(`A ${role} makes ${calculationBonus} every month!`);

// Excercise
const clientFunds = Number(prompt("Please enter your amount..."));
if (Number.isNaN(clientFunds)) {
  console.log("Bad input!");
} else if (clientFunds <= 0) {
  console.log("Ooof!");
} else if (clientFunds <= 500) {
  console.log("You can afford a few drinks.");
} else if (clientFunds <= 2000) {
  console.log("You can afford a decent dinner!");
} else {
  console.log("You can afford the most expensive restaurant!");
}
console.log(clientFunds);