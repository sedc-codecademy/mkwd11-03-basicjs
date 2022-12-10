function sum(x, y) {
  if (
    Number.isNaN(x) ||
    Number.isNaN(y) ||
    typeof x !== "number" ||
    typeof y !== "number"
  ) {
    return "Invalid input";
  }
  let result = x + y;
  return result;
}

let userInput = prompt("Enter first number:");
let userInput2 = prompt("Enter second number:");

let firstNumber = Number(userInput);
let secondNumber = parseFloat(userInput2);

console.log(`The result of the function is: ${sum(firstNumber, secondNumber)}`);