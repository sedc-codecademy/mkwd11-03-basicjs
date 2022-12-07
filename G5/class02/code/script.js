console.log('Js basics');

// console.log(" test \"quote\" test");

// ------- Ways of declaring variables -------
// VAR, LET, CONST;
console.log('------- Ways of declaring variables -------');

// var 
var myVar = 2; 
// 100 later
myVar = 7;
var myVar = 5;

console.log('Var: ' + myVar);
// var lets you redeclare variables and give new values

let myLet = 12;
// 100 lines later
myLet = 15;
// let myLet = 10;

console.log('Let: ' + myLet);
// let doesn't allow us to redeclare variables but we can give new value;

//const
const myConst = 20;
// 100 lines later
// myConst = 21;
// const myConst = 21;

console.log('Const: ' + myConst);
// const does not allow us to redeclare nor to give new values;


// ------- Strings ---------
console.log('------- Strings ---------');
// Concatanation of strings
let myFirstString = 'Hello'
let concatantedString = myFirstString + ' Radmila';
console.log(concatantedString);

// if one of the sides is not a string, JS will convert it to a string
let weirdOperation = '2' + 4;
let weirdOperation2 = '2' + (4 + '5');

console.log(weirdOperation);
console.log(weirdOperation2);

// types of concatanating strings
let string01 = myFirstString + ' Pane';
let string02 = `${myFirstString} 
from
mutliline
string`;

let string03 = `!!${myFirstString} Mike!!`
let string04 = `The sum of the number ${5} and the number ${10} is ${5 + 10}`


console.log(string01);
console.log(string02);
console.log(string03);
console.log(string04);

// ---- NUMBERS ----- 
console.log('---- SPECIAL NUMBERS -----');

let operationWithString = 10 - 'bob';
console.log('Weird operation: ', operationWithString);
console.log(typeof(operationWithString));
console.log(isNaN('bob'));

// ES6 with Number.isNaN()
// let isOperationNaN = Number.isNaN('bob');
let isOperationNaN = Number.isNaN(operationWithString);
console.log(isOperationNaN);


// ------ Logical Operators ------
console.log('------ Logical Operators ------');

let operation01 = 5 > 3;
let operation02 = (4 + 5) === (2 + 7);
let operation03 = ("2" + "3") == (19 + 4);


console.log('operation 01: ', operation01);
console.log('operation 02: ', operation02);
console.log('operation 03: ', operation03);

let operation04 = (2 > 3) && (5 == "5");
let operation05 = true || !(3 === "3");
let operation06 = ((2 + 5) < 7) || false;
let operation07 = ((2 < 6) && (2 == 2)) && operation05;
let operation08 = ((6 < 5) && (3 === 3)) || operation05;


console.log('operation 04: ', operation04);
console.log('operation 05: ', operation05);
console.log('operation 06: ', operation06);
console.log('operation 07: ', operation07);
console.log('operation 08: ', operation08);

let operationBonus01 = 'bob' && 23452;
let operationBonus02 = 'bob' || 12131;
let operationBonus03 = '' && 12313;
let operationBonus04 = !'' || 213123;

console.log('operation01: ', operationBonus01);
console.log('operation02: ', operationBonus02);
console.log('operation03: ', operationBonus03);
console.log('operation04: ', operationBonus04);


console.log('----- CONTROL STRUCTURES -----');
console.log('----- IF/ELSE -----');


let score = 170;

if(score > 100) {
    console.log('You Won!!');

    if(score > 150) {
        console.log('WOW! You won a bonus!!')
    } else {
        console.log('You won, but not good enough for the bonus :)')
    }
} 
else if (score === 100) {
    console.log('You Won but, it was close!');
}
else {
    console.log('You lost :(')
}

console.log('bla bla')



