// -------- Arrays -------- 
console.log('------- ARRAYS ------------'); 

let myFirstArray = ['Dragisha', 'Hristina', 'Mice'];
let emptyArray = []; // empty array
let mixedArray = ['string', 3, false, undefined, null, {}] // mixed array - elemets of various types

console.log(myFirstArray);
console.log(emptyArray);
console.log(mixedArray);

// Access elements in array
let firstElementOfArray = myFirstArray[0];
console.log(firstElementOfArray);

let secondElementOfArray = myFirstArray[1];
console.log(secondElementOfArray);

// Change value of an element in an array

myFirstArray[0] = 'Tode';
console.log(myFirstArray[0]);

console.log(myFirstArray);

// Getting the length of the array
console.log(`Length of myFirstArray is: ${myFirstArray.length}`);

let lastElement = myFirstArray[myFirstArray.length - 1];
console.log(`Last element is : ${lastElement}`);

// Adding and removing items
myFirstArray[myFirstArray.length] = 'Mite';
console.log(myFirstArray[myFirstArray.length - 1]);

console.log(myFirstArray);

// .push() is used for adding element(s) at the end of an array
// we can add multiple items at once

myFirstArray.push('Sanja', 'Dejan');
console.log(myFirstArray);

// .unshift() is used for adding element(s) at the begining ot an array
// we can add multiple items at once

myFirstArray.unshift('Vanja', 'Ilija');
console.log(myFirstArray);

// .pop() is used for removing element form the end of the array
let removedFromEnd = myFirstArray.pop();
console.log(removedFromEnd);

// .shift() is used from removing element on the first index of an array
let removedFromStart = myFirstArray.shift();
console.log(removedFromStart);

console.log(myFirstArray);


// LOOPS
console.log('-------- LOOPS ----------');

// while

// Add the square roots of all the numbers between 101 and 150;

let whileCounter = 101;
let sumOfSquares = 0;

while(whileCounter <= 150) {

    // whileCounter++; // if we put the counter first, we will skip the first number

    console.log(`While Counter: ${whileCounter}`);
    sumOfSquares += Math.pow(whileCounter, 2);
    console.log(`Math.Pow(): ${Math.pow(whileCounter, 2)}`);
    console.log(`Sum of Squares: ${sumOfSquares}`);

    whileCounter++;
}

console.log(`Result is ${sumOfSquares}`);

// do while

// Ask the user to gues our secret number via promt. The user should be able to quess as many times untile he guesses our secret number!

let secretNumber = 9;
let userNumber = 0;

// do {
//     userNumber = parseInt(prompt('Guess my number! Pick one from 1-10'));
//     console.log(`User guess: ${userNumber}`);
// } while(userNumber !== secretNumber);

// while(true) {
//     let userInput = parseInt(prompt('Guess my number! Pick one from 1-10'));
//     if(userInput === secretNumber) {
//         console.log('Yay, you gest the secret number');
//         break;
//     }
// }

// for

// for(let i = 2; i <= 100; i += 2 ) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i--) {

//     if(i === -10 ) continue;

//     if(i === -25) break;

//     console.log(i)
// }


// for of

for (const name of myFirstArray) {
    console.log(name);

    if(name === 'Mite') {
        console.log('Hi Mite');
    }
}

//for in;







