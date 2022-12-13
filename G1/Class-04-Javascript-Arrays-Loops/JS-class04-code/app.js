// CREATING ARRAYS

// Can make a list of anything
// DO NOT MIX TYPES
const primes = [2, 3, 5, 7, 11, 13];

// You can mix types in the array. But generally don't
const mixedArray = [2, 3, "Hello", true];

// You can create an empty array as well
let studentGrades = [];

// You can split the declaration in rows
const socialMedia = [
  "facebook",
  "instagram",
  "twitter",
  "tiktok",
  "myspace",
  "linkedin",
];

// ACCESSING ITEMS
// Arrays start at 0!
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(`First day of the week: ${days[0]}`);
console.log(`Fifth day of the week: ${days[4]}`);

// CHANGING VALUES USING THE INDEX
const students = ["John", "Steve", "Anna", "Jane", "Alexander"];
console.log(`Before changing student[4]: ${students[4]}`);
students[4] = "Alexandra";
console.log(`After changing student[4]: ${students[4]}`);

// Array is const. This is not possible.
// students = [];

// let studenArr = ["Ivan", "Bojan"];
// studenArr = ["Dani", "Antonio"];

// THE LENGTH OF THE ARRAY CAN ALSO BE ACCESSED AND UTILIZED
// Use array.length to access the length of the array
// Same as:
// birthdays[2] = "1891-07-28";
const birthdays = ["1992-10-10", "1956-04-12", "1881-07-28"];
console.log(`Birthday before change: ${birthdays[birthdays.length - 1]}`);
birthdays[birthdays.length - 1] = "1891-07-28"; // This is the last item in the array
console.log(`Birthday after change: ${birthdays[birthdays.length - 1]}`);

// ADDING ITEMS USING THE LENGTH (Don't do it this way)
birthdays[birthdays.length] = "1456-06-12";
console.log(`Birthdays after adding with length`, birthdays);

// ADDING ITEMS USING PUSH (Better, most commonly used)
birthdays.push("1998-09-18");
console.log(`Birthdays after adding with push`, birthdays);

// ADDING MULTIPLE ITEMS (Rarely used)
birthdays.push("1996-04-05", "1949-03-07");
console.log(`Birthdays after adding multiple with push`, birthdays);

// ADDING ITEMS TO THE BEGINNING (Can be useful if you want items in HTML to be added on top)
let colors = ["red", "green", "blue", "cyan"];
console.log("before: ", colors);
colors.unshift("yellow");
console.log("after: ", colors);

// REMOVING ITEMS (POP AND SHIFT)
// Shift removes the first element
colors.shift();
console.log("after shift: ", colors);
// Pop removes the last element
colors.pop();
console.log("after pop: ", colors);
// Useful to know. array.pop() and array.shift() return the removed element.

// LOOPS (ITERATIONS)
// MASSIVELY IMPORTANT

// IF EQUIVALENT OF WHILE
// const studentGrade = 8;
// if (studentGrade >= 6) {
//   console.log("student has passed");
// }

// WHILE LOOP (Rarely used in practice)
// The while loop will repeat the code within it's block as long as a condition is true
// Often using a counter

// let daysCounter = 0;
// while (daysCounter < days.length) {
//   console.log(`Today is ${days[daysCounter]}`);
//   daysCounter++;
// }

// Another while example
const numberArray = [2, 4, 1, 5, 2, 10, 7, 9];

function largestOfTen(arrayToCheck) {
  let counter = 0;
  let largest = 0;
  while (counter < arrayToCheck.length) {
    // console.log(arrayToCheck[counter]);
    if (arrayToCheck[counter] > largest) {
      largest = arrayToCheck[counter];
    }
    counter++;
  }
  return largest;
}

const largestNumber = largestOfTen(numberArray);
console.log("largestNumber", largestNumber);

// Exercise (Another example)
function sumOfSquares(startingNumber, endingNumber) {
  let sum = 0;
  let counter = startingNumber;

  while (counter <= endingNumber) {
    sum += Math.pow(counter, 2);
    counter++;
  }
  return sum;
}

console.log(`The sum of squares is: ${sumOfSquares(101, 150)}`);

// DO WHILE (Practically never used)
// The code in the block will run at least once
let iResult = "";
let iCounter = 0;

do {
  iResult += `<li>List Item ${iCounter}</li>`;
  iCounter++;
} while (iCounter > 0 && iCounter < 5);
console.log(iResult);

// FOR LOOPS (IMPORTANT)
for (let index = 0; index < numberArray.length; index++) {
  console.log(numberArray[index]);
}

const listItems = [];
for (let index = 0; index < 5; index++) {
  listItems.push(`List Item ${index}`);
}
console.log(listItems);

// USING FOR WITH ARRAYS
// IMPORTANT!

const authors = [
  "Joe Abercrombie",
  "J.R.R. Tolkien",
  "G.R.R. Martin",
  "Brandon Sanderson",
  "Ursula K. Le Guin",
];

for (let index = 0; index < authors.length; index++) {
  authors[index] += ` Author:[${index}]`;
}
console.log(authors);

// Another FOR Example

function multiplyByTen(arrayToMultiply) {
  const resultArray = [];
  for (let index = 0; index < arrayToMultiply.length; index++) {
    const newVal = (arrayToMultiply[index] *= 10);
    resultArray.push(newVal);
  }
  return resultArray;
}

const multiplied = multiplyByTen([1, 2, 3, 4]);
console.log(multiplied);