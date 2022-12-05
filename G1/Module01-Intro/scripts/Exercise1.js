const conversionRateFromFeetToMeters = 0.3048;

let userInput = prompt("Enter length in feet:");

// let convertedUserInput = Number(userInput);
// let convertedUserInput = parseInt(userInput);
let convertedUserInput = parseFloat(userInput);

let result = conversionRateFromFeetToMeters * userInput;
console.log("The result in meters is ", result);
