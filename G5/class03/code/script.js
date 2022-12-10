console.log('Hello');
// sayHello();

// ------ Switch ---------------

// if/else
// let userInput = parseInt(prompt('Enter a number from 1-7'));

// if(userInput === 1) {
//     console.log('You have classes at SEDC');
// }
// else if (userInput === 2) {
//     console.log('You are free');
// }
// else if(userInput === 3) {
//     console.log('You have classes at SEDC');
// }
// else if (userInput === 4) {
//     console.log('You are free');
// }
// else if (userInput === 5) {
//     console.log('You are free');
// }
// else if (userInput === 6) {
//     console.log('You have classes at SEDC');
// }
// else if (userInput === 7) {
//     console.log('It\' sunday!');
// }
// else {
//     console.log('There is no such day');
// }


// switch(userInput) {
//     case 1:
//         console.log('You have classes at SEDC');
//         break;
//     case 2:
//         console.log('You are free');
//         break;
//     case 3:
//         console.log('You have classes at SEDC');
//         break; 
//     case 4:
//         console.log('You are free');
//         break; 
//     case 5:
//         console.log('You are free');
//         break; 
//     case 6:
//         console.log('You have classes at SEDC');
//         break; 
//     case 7:
//         console.log('It\' sunday!');
//         break;
//     default: 
//         console.log('No such day');
//         break;
//     
// }

// fall through scenario

// switch(userInput) {
//     case 1:
//         console.log('You have classes at SEDC');
//         break;
//     case 2:
//         console.log('You are free');
//     case 3:
//         console.log('You have classes at SEDC');
//     case 4:
//         console.log('You are free');
//     case 5:
//         console.log('You are free');
//     case 6:
//         console.log('You have classes at SEDC');
//         break; 
//     case 7:
//         console.log('It\' sunday!');
//         break;
//     default: 
//         console.log('No such day');
//         break;
// }


// ----- Functions ------
console.log('----- Functions ------');

sayHello();

function sayHello() {
    console.log('Hello g5');
}


sayHello();
sayHello();
sayHello();

// Good practice: first declare the function, then use it!!

// function with arguments/parameters

let globalNumber = 222; // global scope
let num1 = 5;

function sumOfNumbers(number1, number2) {
    let result = number1 + number2; // functional scope
    console.log(`The result is ${result}`);
    globalNumber = 300; // we change the value of the variable in the global scope
}

let result = 100; // global scope
console.log(result); // we don't have access to the result variable inside the function

console.log(globalNumber);
sumOfNumbers(1, 6);
console.log(globalNumber);

sumOfNumbers(num1, 6);


// functions with return values


function sumNumbersWithReturn(num1, num2) {
    let result = num1 + num2;
    return result;
}

let resultSum1 = sumNumbersWithReturn(10, 40);
let resultSum2 = sumNumbersWithReturn(100, 500);
let totalResult = resultSum1 + resultSum2;

console.log(resultSum1);
console.log(resultSum2);
console.log(totalResult);

// default parameters

let newGlobalNumber = 15;

function sumThreeNumbers(num1, num2, num3 = 150) {
    let result = num1 + num2 + num3;
    return result; // we need return because we want to save the value of the result
}

let functionResult = sumThreeNumbers(40, 45);
let functionResult2 = sumThreeNumbers(40, 45, 5);
let newfunctionResult = newGlobalNumber + functionResult2;

console.log(functionResult);
console.log(functionResult2);
console.log(newfunctionResult);

function changeNum() {
    globalNumber = 100; // we only want to change something, we don't need return to save a value
}

changeNum();

console.log(globalNumber);

// -------- Scope 
console.log('--------- Scope ----------');

let input = 5; // this lives in the global scope

function scopeTestFunction(num1, num2) { // This function scope. Everthing inside the {} is in the function scope
    let result = num1 + num2 + input;
    let fixed = 99;
    console.log('Result :', result);
    console.log('Input :', input);

    if (input === 5) {
        let result2 = num1 + num2 - input + fixed; // let is defined in the block scope
        var someNumber = 55;
        const someConst = 10;
        console.log('result 2 is:', result2);
    }

    //console.log('result 2 is:', result2); // we cant access result2 because it is defined in another scope;
    console.log('someNumber:', someNumber);
    // console.log('someConst', someConst);
}


//console.log('result 2 is:', result2);
//console.log('someNumber:', someNumber);
scopeTestFunction(2, 5);

// exercise 3

function calculateAge(birthYear) {
    let age = new Date().getFullYear() - birthYear;
    console.log(`You are ${age} years old`);
}

calculateAge(1992);
calculateAge(1999);
calculateAge(2005);

