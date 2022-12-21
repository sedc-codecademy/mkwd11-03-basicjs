const numArray = [1, 2, 3, "hello", 4, 5];

function sumNumberArray(arr) {
  let sum = 0;
  for (const currentNumber of arr) {
    // Without a function
    // if (typeof currentNumber !== "number") {
    //   continue;
    // }

    // With function
    if (!validateNumber(currentNumber)) {
      continue;
    }

    sum += currentNumber;
  }
  return sum;
}

function validateNumber(number) {
  if (typeof number !== "number") {
    return false;
  }
  return true;
}

const sumOfNumbers = sumNumberArray(numArray);
console.log(sumOfNumbers);

function tellAStory(array) {
  for (const el of array) {
    if (typeof el !== "string") {
      return "Invalid input";
    }
  }

  return `This is ${array[0]}, he is ${array[1]} he is doing ${array[2]}`;
}

console.log(tellAStory(["Ivan", "Happy", 1]));
