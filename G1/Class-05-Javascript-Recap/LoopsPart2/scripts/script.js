// FOR OF LOOP
let names = ["Bojan", "Ivan", "Dalibor", "Anita", "Marija", "Tosho"];

let arrayOne = [];
let arrayTwo = [];

for (let i = 0; i < names.length; i++) {
  arrayOne.push(`${i + 1} ${names[i]}`);
}

for (let name of names) {
  arrayTwo.push(`${names.indexOf(name) + 1} ${name}`);
}

console.log("===========================");
console.log(arrayOne);
console.log(arrayTwo);
console.log("===========================");

// This only gets the index of the elements
// for (let name in names) {
//   console.log(name);
// }

let cars = ["BMW", "Mercedes", "VW", "Citroen", "Honda"];

function breakExample(array) {
  for (let i = array.length - 1; i > 0; i--) { //must have length-1 because it will start from a non existing element
    if (array[i] === "VW") {
      break;
    }

    console.log(array[i]);
  }
}

breakExample(cars);

console.log("============================");

function continueExample(array) {
    for (let i = array.length - 1; i >= 0; i--) { // must be >=0 so it can reach the element with index 0
        if (array[i] === "VW") {
          continue;
        }
    
        console.log(array[i]);
      }
}

continueExample(cars);

console.log("============================");