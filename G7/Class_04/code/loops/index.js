console.log("CONNECTED");

let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thusrday", "Friday", "Saturday", "Sunday"];


// console.log(daysOfTheWeek[0])
// console.log(daysOfTheWeek[1])
// console.log(daysOfTheWeek[2])
// console.log(daysOfTheWeek[3])
// console.log(daysOfTheWeek[4])
// console.log(daysOfTheWeek[5])
// console.log(daysOfTheWeek[6])

console.log("---- WHILE LOOP ----");


/*
  VERY BEGGINING OF THE LOOPING/ITERATING OUR ITERATOR IS 0

  FIRST ITERATION => IS 0 <= 7 ? YES => PRINT IN CONSOLE AND INCREMENT THE ITERATOR;
  SECOND ITERATION => IS 1 <= 7 ? YES => PRINT IN CONSOLE AND INCREMENT THE ITERATOR;
  THIRD ITERATION =>  IS 2 <= 7 ? YES => PRINT IN CONSOLE AND INCREMENT THE ITERATOR;
  FOURTH ITERATION => IS 3 <= 7 ? YES => PRINT IN CONSOLE AND INCREMENT THE ITERATOR;
  ... until the last one
  LAST ITERATION => IS 7 <= 7 ? TREU => YES => daysOfTheWeek[7] there is no SUCH INDEX AND WE GET UNDEFINED:
 */

// ITERATOR
let iterator = 0 // 0 <= 7
      // statement 
while(iterator < daysOfTheWeek.length){
  console.log(daysOfTheWeek[iterator])

  // WE MUST INCREASE/INCREMENT THE ITERATOR
  iterator++
}


// ITERATOR
let i = 0;
while(i <= 20){
  // IF WE FORGET TO INCREMENT THE ITERATOR WE ENTER INFINITE LOOP
  // DONT DO IT AT HOME
  console.log(`Number: ${i}`)
  i++
}

let iteratorSecond = 30;
while( iteratorSecond >= 1 ){
  console.log(iteratorSecond)
  iteratorSecond--
}

/*
 1. Create a function named printFruits; => DONE
 2. This function should accept a parementer that is going to be array of fruits; => DONE
 3. Iterate through this array; => DONE
 4. Print in console all the elements inside => DONE
*/

function printFruits(arrayOfFruits){
  let i = 0;

  while( i < arrayOfFruits.length ){
      console.log(arrayOfFruits[i])
      i++
  }

}

let fruits = ["Pomegranete", "Orange", "Bananas", "Apples"];
let fruitsTwo = ["Strawberries", "Blueberry"]

printFruits(fruits)
printFruits(fruitsTwo);


/* 
    1. Create a function called printLargestName => DONE
    2. The function should accept paremeter that will be array of 10 string elements => DONE
    3. Iterate through the array and find the largest string
      - I will create a variable with empty string as a value => DONE
      - Create iterator = 0 => DONE
      - Create a looping structure (while loop) => DONE
      - On each iteration, check if the element of the current iteration is bigger then the value of 
        largestValue variable, if so, assign that element of the array to the variable largestValue => DONE
    4. And finnaly print it out => DONE
 */

function printLargestName(arrayOfNames){
  let largestValue = "";

  let i = 0;
  while(i < arrayOfNames.length){
    if(arrayOfNames[i].length > largestValue.length){
      largestValue = arrayOfNames[i]
    }
    i++
  }
  return largestValue
}

let someNamesArray = ["George", "Hello World", "A dummy string value", "asdasd"];

console.log("Largest item in the following array is: ",printLargestName(someNamesArray));


function summaryOfNumbers(){
  let i = 101;
  let sum = 0;

  while(i <= 150){
    sum += Math.pow(i, 2)
    //sum += i ** 2 // sum = sum + sum ** 2
    i++
  }

  console.log("SUM IS:", sum)
}

summaryOfNumbers()

// 2564
// 2, 5, 6, 4
function readDigitsOfNumber(number){
  let stringifiedNumber = String(number);
  console.log(stringifiedNumber)
  let i = 0;

  while(i < stringifiedNumber.length){
    console.log(stringifiedNumber[i])
    i++
  }

}

readDigitsOfNumber(128736);

console.log(" ---- DO/WHILE LOOP ---- ")


let iteratorForDoWhile = 0
do {
  console.log("Number in do while is: ", iteratorForDoWhile)
  iteratorForDoWhile++
}
while(iteratorForDoWhile < 10)


// do while loop will try to execude the "do" code block
// even tough the condition is not met 
let iteratorForDoWhileSecond = 0
do {
  console.log("Number in do while is and it will try at least once: ", iteratorForDoWhileSecond)
  iteratorForDoWhileSecond++
}
while(iteratorForDoWhileSecond > 10);

console.log("---- FOR LOOP ----");

// THIS SAME AS WHILE LOOP, but more modern/better readable syntax

// iterator, condition, increment/decrement itrator
for(let iterator = 0; iterator <= 20;  iterator++){
  console.log(`Number in for loop is ${iterator}`)
}

function printNames(fullNames){
  console.log(fullNames)
                // 1st => 0 < 4 
                // 2nd => 1 < 4
                // 3rd => 2 < 4
                // 4th => 3 < 4
                // 5th => 4 < 4 => this will false and we do not execude the code in the loop
  for(let i = 0; i < fullNames.length; i++){
    console.log(`Fullname is: ${fullNames[i]}`)
  
  }
}

let arrayOfFullNames = ["Bob Bobski", 'John Doe', "Boo", "Foo"]
printNames(arrayOfFullNames)

function findProduct(arrayOfProducts, serchOfProduct){

  for(let i = 0; i < arrayOfProducts.length; i++){
    console.log(`PRODUCT is: ${arrayOfProducts[i]}`)
    if(arrayOfProducts[i] === serchOfProduct){
      // BREAK KEYWORD
      // console.log(`${serchOfProduct} is found and we break/exit the loop`)
      // break

      // CONTINUE KEYWORD
      console.log(`${serchOfProduct} is found and we continue the loop`)
      continue
    }
  
  }
}

let arrayOfProducts = ["Pc", "Mobile phone", "Headphones", "Computer", "Glass"]
findProduct(arrayOfProducts, "Mobile phone")
