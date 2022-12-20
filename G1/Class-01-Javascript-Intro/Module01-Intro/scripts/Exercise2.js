// This is of type string
let inputA = prompt("Enter first side");
// This is of type string
let inputB = prompt("Enter second side");

console.log("Unconverted inputA: ", inputA," the type is ",typeof inputA);
console.log("Unconverted inputB: ", inputB);

let area;

console.log("The result is undefined at the moment: ", area);

// "5" to 5
// String to Number

// This is of type number
let convertedInputA = parseFloat(inputA);
// This is of type number
let convertedInputB = parseFloat(inputB);

console.log("Converted inputA ", convertedInputA, " The type is ",typeof convertedInputA);
console.log("Converted inputB ", convertedInputB);

area = convertedInputA * convertedInputB;
console.log("The area is: ", area);

// Math Object
const radius = prompt('Enter radius...');
const convertedRadius = Number(radius);
// const radiusSquared = radius * radius;
const areaCircle = convertedRadius * convertedRadius * Math.PI;