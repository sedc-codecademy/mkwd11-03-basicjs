console.log('test');

// Exercise01
// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

let n = parseInt(prompt('Enter a number:'));
let sum = 0;

for(let i = 1; i <= n; i++) {
    console.log(`+ ${i}`);
    sum += i;
    console.log(`The sum is ${sum}`);
}

console.log(`The sum is ${sum}`);

// Exercise05
// Change the character (-) of the members of the array

let numArr = [4, -9, -98, -1, 444, 3, -555];

for(let i = 0; i < numArr.length; i++) {
    numArr[i] *= -1;
}

console.log(numArr);


// Exercise02
// Write a program in programming language JS that will print in 
// console all threesome numbers in given interval for which the Pythagorean condition is met.
//a*a + b*b = c*c

let start = 1;
let end = 20;

for(let a = start; a < end; a++) {
    for(let b = start; b < end; b++)
        for(let c = start; c < end; c++) {
            if(a*a + b*b === c*c) {
                console.log(`The condition is met by the numbers: ${a}, ${b}, ${c}`)
            }
        }
}

// Exercise04
// Find all palindromes in a given interval
// example palindromes 121, 3443, 22, 232 

let startN = 150
let endN = 1000;

for(let i = startN; i <= endN; i++ ) {
    let reversNum = 0;
    let helper = i;

    while(helper > 0) {
        let a = helper % 10;
        reversNum = reversNum * 10 + a;
        helper = parseInt(helper/10);

    }

    if(i === reversNum) {
        console.log(`Palindrom is ${i}`);
    }
}

console.log(123 % 10);
console.log(parseInt(123 / 10));








