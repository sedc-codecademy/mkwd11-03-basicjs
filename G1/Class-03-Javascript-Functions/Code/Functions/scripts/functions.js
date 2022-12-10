// FUNCTIONS

function greeting() {
  console.log(
    "Hello students, you are doing great, you are going to be even greater."
  );
}

// greeting();
// greeting();

function calculateAreaOfARectangle(a, b) {
  let area = a * b;
  console.log(`The area is ${area}`);
}

// calculateAreaOfARectangle(5, 10);
// calculateAreaOfARectangle(3, 12);
// calculateAreaOfARectangle(2, 5);

function returnCalculateAreaOfARectangle(a, b) {
  let area = a * b;
  return area;
}

returnCalculateAreaOfARectangle(2, 3); //nothing happens, because I need to save the value somewhere or use it.

let result = returnCalculateAreaOfARectangle(4, 5);
console.log(
  `The result of the area from the function returns the value: ${result}.`
);

// PARAMETER MISMATCH
function printValues(name = "Ivan", age, city) {
  console.log(name, age, city);
}

printValues("Bojan", 24, "Skopje");
printValues("Bojan", 24, "Skopje", 1998);
printValues("Bojan", 24);
printValues("Bojan", "Skopje");
printValues(1, 2, 3);
printValues();

// SCOPES
if (true) {
  let variableOne = "variableOne";
  const variableTwo = "variableTwo";
  var variableThree = "variableThree";
  hey = "something"; //NEVER EVER DO THIS !!!
}

// console.log(variableOne);
// console.log(variableTwo);
console.log(variableThree);
console.log(hey);

let outsideOfFunction = "This is outside of the function."; //this is a global variable and you can access it everywhere.

function scopeExample() {
  let insideOfFunction = "This is inside the function."; //this is in the function scope and you can access it only in the function, it doesn't exist outside of this function
  console.log(outsideOfFunction,insideOfFunction);
}

scopeExample();
console.log(outsideOfFunction,insideOfFunction);
