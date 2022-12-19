const numbersArray = [23, -15, 1, 0, 55, -3];

function sumOfMinAndMax(arr) {
  let max = -Infinity;
  let min = +Infinity;
  let sum = 0;
  for (let num of arr) {
    // debugger;
    if (num >= max) {
      max = num;
    }
    if (num <= min) {
      min = num;
    }
  }
  console.log(`Max: ${max}\nMin: ${min}`);

  return (sum = max + min);
}

console.log(sumOfMinAndMax(numbersArray));