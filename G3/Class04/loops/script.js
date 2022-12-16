

// while(exression) {
//     // all the code that needs to be repeted goes here
// }
// // the application will continie only when the expresion evaluates to false

// let counter = 0;

// while(counter <= 10){
//     console.log("Itreation: " + counter);
//     counter += 1;
// }



// let bigNumber = 1234567890;

// while(bigNumber / 10 !== 0) {
//     let number = bigNumber % 10;
//     console.log("Last number: " + number);
//     bigNumber = Math.floor(bigNumber / 10);
// }


// let students = ["Trajan", "Todor", "Bob", "Jill"];

// let isStudentFound = false;

// // this will not work
// while(!isStudentFound) {
//     // the code here will only exists while the itreation is active
//     // every iteration will execute the code all over again and it will not remmember the previous execution
//     let a = 3;
//     if(students.includes("Bob")){
//         isStudentFound = !isStudentFound;
//     }
//     a++;
// }


// let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// let index = 0;

// while(index < days.length) {
//     console.log(days[index]);
//     index += 1;
// }



// Excersise

let numbers = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77]; // 
let anotherArray = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15]; //


function findLargestValue(inputArray) {
    let counter = 0;
    let max = -Infinity;
    
    while(counter < inputArray.length) {
        console.log(`Counter: ${counter}`);
        console.log(`inputArray[${counter}]: ${inputArray[counter]}`);

        if(inputArray[counter] > max) {
            max = inputArray[counter];
        }
        console.log(`Max: ${max}`);
        counter += 1;
    }
    return max;
}

// let maxOfNumbers = findLargestValue(numbers); // let numbers = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77]; // 
// console.log(maxOfNumbers);

// let maxOfAnotherArray = findLargestValue(anotherArray); // let anotherArray = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15]; //
// console.log(maxOfAnotherArray);


// (101 * 101) + (102 * 102) + (n * n) = n






// 0
// (101 * 101) + 0; (102 * 102) + 1000; (103 * 103) + 10000;

function sumPow(start, end) {
    // calculate sum of all the numbers power on 2 betwen start and end
    let result = 0;
    while(start <= end) {
        // result = Math.pow(start, 2) + result;
        result = (start * start) + result;
        start += 1; 
    }
    return result;
}

function customPow(number, power) {
    let result = number;
    while(power > 1) {
        result *= number;
        power--;
    }
    return result;
}

let a = customPow(13, 6);
let b = Math.pow(13, 6);
// console.log(a);
// console.log(b);


// let counter = 0;

// do {
//     counter++;
//     console.log("Counter: " + counter);
// } while(counter < 10);




// FOR

let counter = 0; // initialization
// while(counter < 10) { // expression
//     console.log(counter);
//     counter++; // increment/decrement
// }

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }



//let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// let index = 0;
// while(index < days.length) {
//     console.log(days[index]);
//     index += 1;
// }

// for(let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }

// for(let i = days.length - 1; i >= 0; i--) {
//     console.log(days[i]);
// }



let days1 = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// let index = 0;
// while(index < days.length) {
//     console.log(days[index]);
//     index += 1;
// }

// for(let i = 0; i < days.length; i++) {
//     console.log(days[i]);
// }

// for(let day of days1){
//     console.log(day);
// }

// let anotherArray1 = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15];

// for(let a of anotherArray1) {
//     console.log(a);
// }


let days2 = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// for(let i = 0; i < days2.length; i++) {
//     if(days2[i] === 'Wed') {
//         break;
//     }
//     console.log("i:" + i);
//     console.log(`Day: ${days2[i]}`);
// }

// let counter1 = 0;
// let breakCycle = true;
// while(breakCycle && counter1 < days2.length) {
//     if(days2[counter1] === "Wed") {
//         breakCycle = !breakCycle;
//     }else {
//         console.log("counter1:" + counter1);
//         console.log(`Day: ${days2[counter1]}`);
//         counter1++;
//     }
// }

// while(counter1 < days2.length) {
//     if(days2[counter1] === 'Wed') {
//         break;
//     }
//     console.log("counter1:" + counter1);
//     console.log(`Day: ${days2[counter1]}`);
// }




for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }

    console.log(`I: ${i}`);
}


for(let i = 0; i < days2.length; i++) {
    if(days2[i] === 'Wed' || days2[i] === 'Fri') {
        continue;
    }
    console.log("i:" + i);
    console.log(`Day: ${days2[i]}`);
}