let emptyArray = [];

let numbers = [1,2,3,4,5,2,6,7,8,8,1];
console.log(numbers);

let item = numbers[0];
// console.log(item);

let students = [
    "Trajan",
    "Todor",
    "Nikola"
];

console.log(students); // Trajan, Todor, Nikola

students[0] = "Bob";

console.log(students); // Bob, Todor, Nikola

// let index = 1;

// let student = students[index];

// console.log(student);

// console.log(numbers);
// let index = parseInt(prompt("Enter index"));
// let value = parseInt(prompt("Enter value"));

// numbers[index] = value;
// console.log(numbers);

let arrayLength = numbers.length;

console.log(arrayLength);

// Adding items at the end of the array with index
// numbers[numbers.length] = 12;
// numbers[numbers.length] = 123;
// numbers[numbers.length] = 1234;
// numbers[numbers.length] = 12345;
// numbers[numbers.length] = 123456;


// Ading items at the end of the array using push

// numbers.push(987654321);
// numbers.push(123);
// numbers.push(1234);
// numbers.push(12345);

// numbers.push(987654321, 123, 1234, 12345);

// Ading items at the start of the array using unshift
// numbers.unshift(098);
// numbers.unshift(098,987,876);


// deleting items at the end of the array using pop

// let endItem = numbers.pop();
// console.log(endItem);

// deleting items at the start of the array using shift

let startItem = numbers.shift();
console.log(startItem);

console.log(numbers);