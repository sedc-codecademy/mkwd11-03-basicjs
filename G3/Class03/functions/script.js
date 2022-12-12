//console.log("Connects");


// function keyword // name of the function // little parentesis () // { } function body
function logMessage() {
    console.log("Hello from function");
}

// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// logMessage();
// you can execute this function n times

function sayHello() {
    let name = "Trajan";
    console.log("Hello from " + name);
}

// sayHello();



function sayHelloFrom(name) {
    console.log("Hello from " + name);
}

// sayHelloFrom("Trajan");
// sayHelloFrom("Todor");


function myFunction(num1, num2) {
    let result = num1 * num2;
    console.log("The result is: " + result);
}

// myFunction(1, 3); // -> 3
// myFunction(5, 7); // -> 35
// myFunction(10, 23); // -> 230


function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
} 


let result = multiply(2, 4);
console.log("This is the result from the return of the function: " + result);

// let a = 2;
// let b = 4;

// let result = a * b;



function three() {
    return 3;
}

let a = three();


function four() {
    return 4;
    // everything after return is NOT usable and it will NOT be executed
    // console.log("Trajan");
    // let a = 5 + 7;
}

four();




// function with parameters and return value
function multiplyThreeNumbers(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result;
}

// let multiplyThreeNumbersresult = multiplyThreeNumbers(2, 4, 2); // => 16
// console.log(multiplyThreeNumbersresult);
// let multiplyThreeNumbersresult1 = multiplyThreeNumbers(2, 4, 3); // => 24
// console.log(multiplyThreeNumbersresult1);
// let multiplyThreeNumbersresult2 = multiplyThreeNumbers(2, 4, 4); // => 32
// console.log(multiplyThreeNumbersresult2);
// let multiplyThreeNumbersresult3 = multiplyThreeNumbers(2, 4, 5); // => 40
// console.log(multiplyThreeNumbersresult3);

function printMessage(message) {
    console.log(message);
}

function isUserMature(age) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}

// let isMature = isUserMature(17);

// if(isMature) {
//     printMessage("User is over 18");
// } else {
//     printMessage("User is under 18");
// }

if(isUserMature(21)) {
    printMessage("User is over 18");
} else {
    printMessage("User is under 18");
}



function multiplyTwoNumbers(placeholder1, placeholder2) {
    console.log("multiplyTwoNumbers");
    console.log(placeholder1);
    console.log(placeholder2);
    let result = placeholder1 * placeholder2;
    return result;
}

function multiplyFourNumbers(placeholder1, placeholder2, placeholder3, placeholder4) {
    // let finalResult = 
    // multiplyTwoNumbers(placeholder1, placeholder2) * multiplyTwoNumbers(placeholder3, placeholder4);
    console.log("multiplyFourNumbers");
    console.log(placeholder1);
    console.log(placeholder2);
    console.log(placeholder3);
    console.log(placeholder4);
    let result1 = multiplyTwoNumbers(placeholder1, placeholder2);
    let result2 = multiplyTwoNumbers(placeholder3, placeholder4);
    let finalResult = result1 * result2;
    
    return finalResult;
}

let multiplyResult = multiplyFourNumbers(2,3,4,5);
console.log("The result is: " + multiplyResult);