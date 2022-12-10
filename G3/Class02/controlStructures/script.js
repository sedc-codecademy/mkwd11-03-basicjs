
// // if expression is yes/true it will continue on line 4
// if(expression) {
//     // some code to be executed
// }
// // if expression is no/false it will continue on line 6

let score = 99;

// if(score > 100) {
//     alert("You won");
// }


// else
// if(score > 100) {
//     alert("The score is larger that 100");
// } else {
//     alert("Everything else");
// }

// how to if/else
// if(expression) { // if need expression to be evaluated
//     // all the code goes here
// } else { //else does not need and expression to be evaluated
//     // all the backup code goes here
// }



// if(expression){
//     // code goes here
// } else if(expression) {
//     // code goes here
// } else {
//     // code goes here
// }

// let fridayCash = 1;

// if(fridayCash >= 50) {
//     alert("You should go to a dinner and a movie");
// } else if(fridayCash >= 35) {
//     alert("You should go out for a fine meal");
// } else if(fridayCash >= 12) {
//     alert("You should go and see a movie");
// } else {
//     alert("Looks like you will be watching TV");
// }



let numberOne = 10;
let numberTwo = 20;
let numberThree = 30;

// if(numberOne > numberTwo) {
//     console.log("This is the if statement (numberOne > numberTwo)");
// } else if(numberThree < numberTwo) {
//     console.log("This is the first else if statement (numberThree > numberTwo)");
// } else if((numberOne + numberTwo) === numberThree) {
//     console.log("This is the second else if statement ((numberOne + numberTwo) === numberThree)");
// } else {
//     console.log("Else");
// }



// Geting value from User
// getting value
let userInput = prompt("Please enter a number");

console.log(userInput);
console.log(typeof userInput);
// parsing value
let parsedInput = parseInt(userInput);

console.log(parsedInput);
console.log(typeof parsedInput);

// isNaN();
// Number.isNaN();