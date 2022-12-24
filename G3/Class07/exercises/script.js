function sayHello() {
    console.log("Say Hello");
}


// sayHello();

function greet(message, name) {
    let result  = message + name;
    return result;
}

// let a = greet("Poraka", "Ime");
// let b = 1;


// Bad way
// let message = "Hello";
// let name = "Trajan";

// function sayWellcome() {
//     let result = message + name;
//     return result;
// }


// function that will sum two numbers
function sum(num1, num2) {
    return num1 + num2;
}

// function that will sum two numbers
function sum1() {
    return parsedInput + parsedInput1;
}

// get input from user
// let input = prompt("Enter a number");
// let parsedInput = parseInt(input);
// let input1 = prompt("Enter a number");
// let parsedInput1 = parseInt(input1);

// if(Number.isNaN(parsedInput)) {
//     console.log("Error");
// } else if(Number.isNaN(parsedInput1)){
//     console.log("Error");
// } else {
//     // let result = sum(parsedInput, parsedInput1);
//     let result = sum1();
//     console.log(result);
// }

// function that will sum two numbers
function sum2() {
    return parsedInput123 + parsedInput1234;
}


// let input123 = prompt("Enter a number");
// let parsedInput123 = parseInt(input123);
// let input1234 = prompt("Enter a number");
// let parsedInput1234 = parseInt(input1234);

let num = 10;
let num1 = 20;
let a = 3;
let b = 50;

// console.log(sum(parsedInput, parsedInput1));
// console.log(sum(parsedInput123, parsedInput1234));
// console.log(sum(1, 5));
// console.log(sum(3, 7));
// console.log(sum(num, num1));
// console.log(sum(a, b));
// console.log(sum(b, num));



let arr = [null, 1, undefined , 3];
let result = [1, 3];



function cleanArray(array) {
    let result = [];

    for(let item of array) {
        if(item === 0 || item === -0) {
            result.push(item);
            continue;
        }

        if(item) {
            result.push(item);
        }
    }

    return result;
}




let as = [1, 2, "Trajan", null, 0, -0, -1, true, undefined, false, [1, 2, 3], undefined];
let asd = [null, 0, -0, undefined, false, [1, 2, 3], undefined, {}];
let asdd = [1, "Hello", 0, -0, -2, true, [1, 2, 3]];


// console.log(cleanArray([]));
// console.log(cleanArray(as));
// console.log(cleanArray(asd));
// console.log(cleanArray(asdd));

let test = [
    [1, 2, undefined],
    "Trajan",
    null,
    ["Trajan", null, undefined, undefined, 0],
    false,
    true,
    10,
    ["", undefined, "Trajan", 1]
]

