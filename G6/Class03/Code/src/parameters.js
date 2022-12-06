function printNumbers(a, b, c){
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}

printNumbers(1, 2, 3);

printNumbers(10, 20, 30, 40); //a=10, b=20, c=30, 40 is ignored

printNumbers(5); //a=5; b = undefined; c = undefined;

//printNumbers(,3, 4);

//DEFAULT VALUES
function logData(data1, data2, data3="empty value"){
    console.log(`data1: ${data1}`);
    console.log(`data2: ${data2}`);
    console.log(`data3: ${data3}`);
}

logData("first", "second", "third"); //data1 = "first", data2 = "second", data3 = "third"
logData("sedc"); //data1 = "sedc", data2=undefined, data3="empty value"

//let input = prompt("Enter input");

//PREDEFINED FUNCTIONS
let wholeNumber = parseInt("30");
console.log(wholeNumber);

let anotherNumber = parseInt("30.3");
console.log(anotherNumber);

let decimalNumber = parseFloat("30.3");
console.log(decimalNumber);

let num = Number("34.4");
console.log(num);

let numString = String(24);
console.log(numString);
console.log(typeof(numString));

