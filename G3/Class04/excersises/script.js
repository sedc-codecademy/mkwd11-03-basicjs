function findEven(numbers) {
    let result = [];
    for (let num of numbers) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
}

function findOdd(numbers) {
    let result = [];
    for (let num of numbers) {
        if (num % 2 !== 0) {
            result.push(num);
        }
    }
}

function findOddOrEven(numbers, type) {
    if (type === 'Odd') {
        return findOdd(numbers);
    } else if (type === 'Even') {
        return findEven(numbers);
    } else {
        return [];
    }
}



let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 13, 17, 22, 5];
let a = findOddOrEven(numbers, "Odd");
let b = findOddOrEven(numbers, "Even");

console.log(a);
console.log(b);
