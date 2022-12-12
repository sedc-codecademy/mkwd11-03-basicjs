// CREATING ARRAYS

// Can make a list of anything
// DO NOT MIX TYPES
const primes = [2, 3, 5, 7, 11, 13];

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

// THE LENGTH OF THE ARRAY CAN ALSO BE ACCESSED AND UTILIZED
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

// LOOPS (ITERATIONS)
// MASSIVELY IMPORTANT

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
  let largest = arrayToCheck[0];
  let counter = 0;

  while (counter < arrayToCheck.length) {
    if (arrayToCheck[counter] > largest) {
      largest = arrayToCheck[counter];
    }
    counter++;
  }
  console.log("The largest number in the array is: ", largest);
}

largestOfTen(numberArray);

// Exercise

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

const listItems = [];

for (let index = 0; index < 5; index++) {
  listItems.push(`<li>List Item ${index}</li>`);
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

// FOR OF (IMPORTANT, GET USED TO THIS KIND OF LOOPING)

function remainderCalculator(remainderArray) {
  let resultArray = [];
  for (const number of remainderArray) {
    resultArray.push(number % 2);
  }
  return resultArray;
}

const remainders = remainderCalculator([12, 13, 14, 15, 17, 19, 21, 22]);
console.log(remainders);

// BREAK AND CONTINUE
// BREAK exits the loop
// CONTINUE exits the current iteration

// Using Break
function favoriteAuthor(authorArray) {
  const favoriteIndex = Math.floor(Math.random() * authorArray.length);
  let author = "";
  for (let index = 0; index < authorArray.length; index++) {
    if (index === favoriteIndex) {
      author = authorArray[index];
      break;
    }
    console.log(index);
  }
  return author;
}

const favoriteWriter = favoriteAuthor(authors);
console.log("favoriteWriter:", favoriteWriter);

// Using continue
function filterOutEvenNumbers(numbers) {
  const resultArray = [];

  for (const number of numbers) {
    if (number % 2 === 0) {
      continue;
    }
    resultArray.push(number);
  }
  return resultArray;
}

const onlyOddNumbers = filterOutEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(onlyOddNumbers);
