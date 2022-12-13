// console.log("it works");

// // Creating an array
// let fruits = ["apples", "oranges", "cherries", "pears", "mangoes"];

// console.log(fruits);

// // Creating an array using const which prevents reassignment and improves consistency
const students = ["Bojan", "Dejan", "Andrea", "Jovana", "Aleksandar"];

// // Arrays can be empty
// const vegetables = [];

// console.log(vegetables);

// // Accessing array elements using index
// console.log(fruits[2]);
// console.log(students[4]);
// console.log(fruits[4]);
// console.log(students[0]);
// console.log(fruits[1 + 2], students[1 + 2]);

// fruits[0] = "plums";

// students[2] = "Johnny";

// console.log(fruits[0]);

// console.log(students[2]);

// console.log(students);

// // Array length to read the total number of elements in the array

// console.log(students.length);

// // To access last element use length - 1 always
// students[students.length - 1] = "Jack";

// console.log(students);

// // Adding items to the end of the array

// students[students.length] = "Jane";

// console.log(students);

// // using push
// students.push("Mary");

// console.log(students);

// fruits.push("pineapples", "apples", "tomatoes");

// console.log(fruits);

// // Adding to start of array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(`Numbers before unshift: ${numbers}`);

// numbers.unshift(100);

// numbers.unshift(200);

// console.log(`Numbers after unshift: ${numbers}`);

// // Removing items from an array

// let lastNumber = numbers.pop();

// console.log(`Popped number: ${lastNumber}`);
// console.log(`Numbers after pop: `, numbers);

// let firstNumber = numbers.shift();

// console.log(`Shifted number: ${firstNumber}`);
// console.log(`Numbers after shift: `, numbers);

// Looping structures

let counter = 0;

while (counter < 30) {
  //   console.log(counter);
  counter++;
}

// Example max out of number array
const randomNumbers = [1, 23, 200, 66, 33, 22, 2500, 56, 1002, 506, 493, 32];

function calculateMax(numArray) {
  let counter = 0;
  let max = numArray[0];

  while (counter < numArray.length) {
    let currentNumber = numArray[counter];
    // console.log(currentNumber);
    if (currentNumber > max) {
      max = currentNumber;
    }

    // console.log(`Current number is ${currentNumber}`);

    // console.log(`Max is: ${max}`);

    counter++;
  }

  return max;
}

console.log(calculateMax(randomNumbers));

// let square = Math.pow(103,2)

// Exercise one solution
// Always take it one small step at a time
function sumSquares(numStart, numEnd) {
  let counter = numStart;
  let sum = 0;

  while (counter <= numEnd) {
    let square = Math.pow(counter, 2);
    sum += square;

    counter++;
  }
  return sum;
}

const sumResult = sumSquares(101, 150);

// const sumResult = sumSquares(1, 10);

console.log(sumResult);

function countToTen() {
  // While syntax
  let counter = 1;

  while (counter <= 10) {
    console.log("From While Loop:", counter);
    counter++;
  }

  //   For syntax
  for (let i = 1; i <= 10; i++) {
    console.log("From For Loop:", i);
  }

  for (let i = 10; i >= 1; i--) {
    console.log("From For Loop:", i);
  }
}

countToTen();

// we can generate arrays with for
function generateNumArray(num) {
  const resultArr = [];
  for (let i = 1; i <= num; i++) {
    resultArr.push(i);
  }
  return resultArr;
}

const arrayToTwenty = generateNumArray(10000);

console.log(arrayToTwenty);

const numbers = [1, 20, 30, 11, 33];

function multiplyNumbers(numArray, multiplier) {
  const resultArr = [];
  for (let i = 0; i < numArray.length; i++) {
    resultArr.push(numArray[i] * multiplier);
  }
  return resultArr;
}

console.log(multiplyNumbers(numbers, 3));
