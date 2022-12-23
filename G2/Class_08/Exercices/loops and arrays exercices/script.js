// 1. Write a JS code to print Even numbers in given array
function printEven (arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i])
        }
    }
}
let testArray = [13, 23, 12, 45, 22, 86, 66, 100, 101]

printEven(testArray);



// 2.Write a JS code to delete all occurrence of element in given array

function deleteElement(arr, element){
    for(let i = 0; i < arr.length; i++){
        while(arr[i] == element){
            arr.splice(i, 1);
        }
    }
    return arr;
}
var arr = [23, 23, 78, 5, 63, 45,310, 56, 100, 56];
console.log(arr);

var newArr = deleteElement(arr, 23);
console.log(newArr);


// 3. Write a JS code to find the no of digits in a number
function digitCount (num){
    let counter = 0;
    while(num != 0){
        num = Math.floor(num/10);
        counter++
    }
    return counter;
}

let numberOfDigits = digitCount(8569);

console.log(`This number has ${numberOfDigits} digits`);

