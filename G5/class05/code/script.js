// Function revision

function multiplyTwoNumbers(number01, number02) {
    // let result = number01 * number02;
    // return result;
    return number01 * number02;
}

let result = multiplyTwoNumbers(2, 5);

console.log(result);
console.log(multiplyTwoNumbers(10, 2));

// for loop

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days);

for(let i = 0; i < days.length; i++) {
    console.log(`Counter value: ${i}`);
    console.log(days[i]);
    console.log(`End of cycle`)
}

console.log('End to start');

for(let i = days.length - 1; i >= 0; i--) {
    console.log(days[i]);
}

console.log('for-of loop');

for (let day of days) {
    console.log(day);
}

// Task 01 
// Write a function that will have an array as an argument and will determine the largest and smallest number.
// It will return a string that says: The largest number is ?? and the smallest is ??

let numbersArray = [456, 13, -6, 6, 354];

function findMinAndMax(array) {
    let min = Infinity;
    let max = -Infinity;

    for (const number of array) {
        console.log(`Number to check: ${number}`);
        console.log(`Minimum before check: ${min}`);
        console.log(`Maximum before check: ${max}`);

        if(number > max) {
            max = number;
        }

        if(number < min) {
            min = number;
        }

        console.log(`Minimum after check: ${min}`)
        console.log(`Maximum after check: ${max}`)
    }

    return `The largest number in the array is ${max} and the smallest is ${min}`;
} 

console.log(findMinAndMax(numbersArray));

// how to find min max easy

// let min = Math.min(...numbersArray);
// let max = Math.max(...numbersArray);

// console.log(min);
// console.log(max);


// Task 02
// Write a function that will have an array of student names as an argument. It will ask the user to enter a name and the function should check if there is such a student in the array. It should return a string that says: 'Student ?? is in the list' or 'There is no such student'


let students = ['Mice', 'Nikola', 'Dragisha', 'Petar', 'Mite'];
let studentName = prompt('Enter a student name:');

let trainers = ['Pane', 'Radmila'];
let trainerNames = prompt('Enter a trainers name');

function checkName(peopleArray, name) {
    let isInTheListFlag = false;

    for(let i = 0; i < peopleArray.length; i++) {
        if(peopleArray[i] === name) {
            isInTheListFlag = true;
            break;
        }
    }

    // if(isInTheListFlag) {
    //     return ` ${name} is in the list`;
    // }
    // else {
    //     return `There is no such name`;
    // }

    // if(!isInTheListFlag) {
    //     return `There is no such name`
    // }
    // else {
    //     return ` ${name} is in the list`;
    // }

    if(!isInTheListFlag) {
        return `There is no such name`
    }

    return `${name} is in the list`;
}

console.log(checkName(students, studentName));

console.log(checkName(trainers, trainerNames));


// Task 03
// Write a JavaScript function to remove 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array. Return new array with valid results.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let sampleArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function validateArray(array) {
    let newArray = [];

    for (let element of array) {
        // if (element !== null && element !== 0 && element !== '' && element !== false && element !== undefined && !isNaN(element)) {
        //     newArray.push(element);
        // }

        // THE BEST WAY
        if(element) {
            newArray.push(element);
        }
    }

    return newArray;
}

let filteredArray = validateArray(sampleArray);
console.log(filteredArray); 


function validateArray2(array) {
    let newArray = [];
    
    for (let element of array) {

        if (element === null || element === 0 || element === '' || element === false || element === undefined || isNaN(element)) {
            continue;
        }

        newArray.push(element);
    }

    return newArray;
}

console.log(validateArray2(sampleArray));





