console.log("it works");

// Creating an array
let fruits = ["apples", "oranges", "cherries", "pears", "mangoes"];

console.log(fruits);

// Creating an array using const which prevents reassignment and improves consistency
const students = ["Bojan", "Dejan", "Andrea", "Jovana", "Aleksandar"];

// Arrays can be empty
const vegetables = [];

console.log(vegetables);

// Accessing array elements using index
console.log(fruits[2]);
console.log(students[4]);
console.log(fruits[4]);
console.log(students[0]);
console.log(fruits[1 + 2], students[1 + 2]);

fruits[0] = "plums";

students[2] = "Johnny";

console.log(fruits[0]);

console.log(students[2]);

console.log(students);

// Array length to read the total number of elements in the array

console.log(students.length);

// To access last element use length - 1 always
students[students.length - 1] = "Jack";

console.log(students);

// Adding items to the end of the array

students[students.length] = "Jane";

console.log(students);

// using push
students.push("Mary");

console.log(students);

fruits.push("pineapples", "apples", "tomatoes");

console.log(fruits);

// Adding to start of array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Numbers before unshift: ${numbers}`);

numbers.unshift(100);

numbers.unshift(200);

console.log(`Numbers after unshift: ${numbers}`);

// Removing items from an array

let lastNumber = numbers.pop();

console.log(`Popped number: ${lastNumber}`);
console.log(`Numbers after pop: `, numbers);

let firstNumber = numbers.shift();

console.log(`Shifted number: ${firstNumber}`);
console.log(`Numbers after shift: `, numbers);

// Looping structures

let counter = 0;

while (counter < 20) {
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
    console.log(currentNumber);
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

const arrayToTwenty = generateNumArray(20);

console.log(arrayToTwenty);

const numbersArr = [1, 20, 30, 11, 33];

function multiplyNumbers(numArray, multiplier) {
  const resultArr = [];
  for (let i = 0; i < numArray.length; i++) {
    resultArr.push(numArray[i] * multiplier);
  }
  return resultArr;
}

console.log(multiplyNumbers(numbersArr, 3));

// For of , easier way to iterate over arrays
for (let student of students) {
  console.log(student);
}

for (let fruit of fruits) {
  console.log(fruit);
}

function addToNumbersInArray(numArray, amount) {
  const resultArr = [];
  for (let num of numArray) {
    resultArr.push(num + amount);
  }
  return resultArr;
}

console.log(addToNumbersInArray(numbersArr, 50));

// Break and continue

console.log(fruits);

function findFavoriteFruit(favoriteFruit, fruitsArr) {
  let foundFruit = null;

  for (let fruit of fruitsArr) {
    if (fruit === favoriteFruit) {
      foundFruit = fruit;
      break;
    }
    console.log(fruit);
  }

  // Classic way
  // if (foundFruit) {
  //   return foundFruit;
  // } else {
  //   return "No Fruit Found";
  // }
  // Modern without else method of returning
  if (!foundFruit) return "No Fruit Found";

  return foundFruit;

  // return foundFruit ? foundFruit : "No Fruit Found"
  // return foundFruit || "No Fruit Found"
}

const favFruit = findFavoriteFruit("oranges", fruits);

console.log("This is the favorite fruit:", favFruit);

// Continue

function filterLargeNumbers(numArray, maxValue) {
  const resultArr = [];
  for (let num of numArray) {
    if (num > maxValue) continue;

    console.log("After continue num value:", num);
    resultArr.push(num);
  }

  return resultArr;
}

const filteredArr = filterLargeNumbers([10, 203, 400, 20, 400, 30], 150);

console.log("Filtered numbers array");
console.log(filteredArr);

// Groceries example
const groceries = ["Bread", "Milk", "Butter"];
function addToGroceriesList(item) {
  if (typeof item !== "string") {
    console.log(`The item ${item} was not added to the list. Sorry.`);
    return;
  }
  groceries.push(item);
  console.log(`You have added ${item} to the list!`);
}
// Calling the adding function
addToGroceriesList("Salad");
addToGroceriesList("Pork");
addToGroceriesList("Eggs");

console.log(groceries);

function showGroceriesList() {
  console.log("My groceries list:");
  for (let i = 0; i < groceries.length; i++) {
    if (!groceries[i]) continue;

    console.log(`${i + 1}. ${groceries[i]}`);
  }
}

showGroceriesList();

function checkForItemInGroceriesList(item) {
  for (let listItem of groceries) {
    if (listItem === item) {
      // Check if the item is the inputted item
      return `The item ${listItem} was found!`; // return always goes out of the function
    }
  }
  return `There was no ${item} item in the list!`; // Will not execute if the previous return is executed
}

const foundItem = checkForItemInGroceriesList("Eggs");

console.log(foundItem);

function deleteItemFromGroceries(item) {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log("Item has been deleted!");
      groceries[i] = null; // we set the deleted item to null
      return true;
    }
  }
  return false;
}

deleteItemFromGroceries("Eggs");

showGroceriesList();

// Exercise one solution

function countOccurances(targetNumber, numArray) {
  let total = 0;

  for (let num of numArray) {
    if (num === targetNumber) {
      // total = total + 1
      // total += 1
      total++;
    }
  }
  return `The number ${targetNumber} appears ${total} times in the array`;
}

let countResult = countOccurances(3, [3, 3, 3, 4, 5, 3, 1]);

console.log(countResult);

// Exercise 2

function filterOddEven(array, type) {
  let result = [];
  if (type === "even") {
    for (let num of array) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
    return result;
  } else if (type === "odd") {
    for (let num of array) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
    return result;
  } else {
    console.log("The type was not correct. Please enter odd or even");
    return null;
  }
}

function filterOddEvenAlt(array, type) {
  const result = [];

  for (let num of array) {
    if (type === "even" && num % 2 === 0) result.push(num);
    if (type === "odd" && num % 2 !== 0) result.push(num);
  }

  return result;
}

console.log(filterOddEvenAlt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "odd"));
