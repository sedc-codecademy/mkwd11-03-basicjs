console.log("---- EXERCISE 1 ----")

// 1. **** Write a JS function that will return your fullname and birth of year:

function userInformation(){
  // between the { } is the body of the function
  // and here is the place where we write the code
  // that we want to be executed when this function is invoked

  let birthYear = 1995;
  let firstName = "Bob";
  let lastName = "Bobski";


  let fullNameInfo = "My fullname is: " + firstName + " " + lastName + " and I am born in " + birthYear;
  
  return fullNameInfo
}

let myFullInfo = userInformation();
console.log(userInformation())
console.log(userInformation())
console.log(userInformation())
console.log(myFullInfo);


console.log("---- EXERCISE 1.5 ----")
// 1.5 **** Write a JS function that is going to alrt smth. to the user:

function userAgeCalculator(yearOfBirth){
  let currentYear = new Date().getFullYear()

  alert(`Mate you are ${currentYear - yearOfBirth} years old.`)
}

// userAgeCalculator(1995)
// userAgeCalculator(2000)
// userAgeCalculator(1991)

// let userInputFromPrompt = prompt("Dear user, what is you birth year?")
// console.log(typeof userInputFromPrompt)

// // parseFloat(valueHere),parseInt(valueHere), Number(valueHere) 
// let convertedToNumberUserInputPrompt = parseInt(userInputFromPrompt)
// console.log(typeof convertedToNumberUserInputPrompt)
// userAgeCalculator(convertedToNumberUserInputPrompt)

console.log("---- EXERCISE 2 ----")
// 2. **** Write a JS function that will accept two words and concat them in a sentence
function wordConcatanator(wordOne, wordTwo){
  let concatanatedWords = `User first word is: ${wordOne} and second is ${wordTwo}`

  return concatanatedWords
}

let firstSentece = wordConcatanator("I am", "Groot")
console.log(firstSentece)
let secondSentnce = wordConcatanator("Hello","World")
console.log(secondSentnce)

console.log("---- EXERCISE 3 ----")
// 3. JavaScript program to compute the sum of student's 3 exercise points
//  If the sum is in the range 50..80  return student has passed other wise return student has not passed.

function calculateExercisePoints(exerciseOnePoints, exerciseTwoPoints, exerciseThreePoints){
  
  let studentTotalPoints = exerciseOnePoints + exerciseTwoPoints + exerciseThreePoints

  console.log(exerciseOnePoints, exerciseTwoPoints, exerciseThreePoints)

  let isAtLeastOneValueNotANumber = isNaN(exerciseOnePoints) || isNaN(exerciseTwoPoints) || isNaN(exerciseThreePoints)
  console.log(isAtLeastOneValueNotANumber)

  if(isAtLeastOneValueNotANumber){
    return "Hey man please have in mind to provide only numbers"
  }
  // whenever this statement is fullfilled 
  if(studentTotalPoints >= 50 && studentTotalPoints <= 80){
    return "Well done student, you have passed."
  }
  else if(studentTotalPoints > 80){
    return "Invalid number of score points"
  }
  else {
    return "Sorry amigo you have not passed."
  }
}

let studentScore = calculateExercisePoints(30, 10, 24)
console.log(studentScore)

let studentSecondScore = calculateExercisePoints(10, 15, 10)
console.log(studentSecondScore)

// let userExerciseOnePts = parseFloat(prompt("Enter points from first subject"))
// let userExerciseTwoPts = Number(prompt("Enter points from second subject"))
// let userExerciseThreePts = Number(prompt("Enter points from third subject"))

// let thirdStudentScore = calculateExercisePoints(userExerciseOnePts,userExerciseTwoPts, userExerciseThreePts)
// console.log(thirdStudentScore)
// console.log(calculateExercisePoints(30))

console.log("---- EXERCISE 4 ----")
// 4. Write a loop that will iterate through array of dishes and print them

let myFavouriteDishes = ["French Fries", "Beans Soup", "Gyros", "Burger", "Pancakes", "Sarma"]
console.log(myFavouriteDishes)

console.log(myFavouriteDishes[0]) //give me element on index 0
console.log(myFavouriteDishes[1]) //give me element on index 1
console.log(myFavouriteDishes[2]) //give me element on index 2
console.log(myFavouriteDishes[3]) //give me element on index 3

/*
  On each iteration is the same as we did:
    myFavouriteDishes[0]
    myFavouriteDishes[1]
    myFavouriteDishes[2]
    myFavouriteDishes[3]
 */
console.log("WITH FOR LOOP")
// instead of hard-coding index < 6, we can take advantage of .length property
for(let index = 0; index < myFavouriteDishes.length; index++){
  console.log(myFavouriteDishes[index])
}

console.log("---- EXERCISE 4.5 ----")
// 4.5 Write a function that is accept array and print the values
function printValuesOfCollection( arrayOfValues  ){

  // *** FOR LOOP
  // for(let index = 0; index < arrayOfValues.length; index++ ){
  //   let element = arrayOfValues[index]
  //   console.log(element)
  // }

  // *** FOR OF LOOP => we only get the element of the current iteration
  // without the index
  for(let dish of arrayOfValues){
    console.log(dish)
  }


}
printValuesOfCollection(myFavouriteDishes)
printValuesOfCollection(["Sarma", "English Breakfast", "Musaka"])

let iteratorForDoWhile = 10
do {
  console.log("10 is not bigger then 100 IN DO WHILE LOOP")
  iteratorForDoWhile++
} while ( iteratorForDoWhile > 100);

let iteratorForWhile = 10
while (iteratorForWhile > 100) {
  console.log("10 is not bigger then 100 IN WHILE LOOP")
  iteratorForWhile++
}

console.log("---- EXERCISE 5 ----")
// 5. Create a function that accepts 2 arrays of strings as params.
/*
  ["Hello", "World"], ["John", "Doe"]

  let output = ['Hello John World Doe']

*/

function concatinateValuesOfTwoArrays(arrayOne, arrayTwo){

  let fullySentence = ""

  for(let index = 0; index < arrayOne.length; index++){
    fullySentence += `${arrayOne[index]} ${arrayTwo[index]}`
  }

  return [fullySentence]

}
let wordsArrayOne = ["Hello", "World"]
let wordsArrayTwo = ["I am", "Groot"]

let fullConcat = concatinateValuesOfTwoArrays(wordsArrayOne,wordsArrayTwo)
console.log(fullConcat)

console.log("---- EXERCISE 6 ----")
// 6. given array, get the min and the max number
// [1, 2, 23, 10]
// return minNumber + maxNumber of the array => 1 + 23 = 24


function sumOfNumbers(arrayOfNumbers){
  let minimumNumberOfArray = arrayOfNumbers[0] // 5
  let maximumNumberOfArray = arrayOfNumbers[0] // 5

  /*
    1st ITERATION =>  minimumNumberOfArray = 5; maximumNumberOfArray = 5
      is 5 > 5 => NO
      is 5 < 5 => NO
      Increment the index

    2nd ITERATION  => minimumNumberOfArray = 5; maximumNumberOfArray = 5
      is 5 > arrayOfNumbers[index] -> (3) => YES; minimumNumberOfArray = 3
      is 5 < arrayOfNumbers[index] -> (3) => NO; maximumNumberOfArray = 5
      Increment the index

    3rd ITERATION =>  minimumNumberOfArray = 3; maximumNumberOfArray = 5;
      we check that the arrayOfNumbers[index] is not a  "number" and we do not do any logic
      Increment the index

    4th ITERATION =>  minimumNumberOfArray = 3; maximumNumberOfArray = 5;
    is 3 > arrayOfNumbers[index] -> (54) => NO; minimumNumberOfArray = 3
    is 5 < arrayOfNumbers[index] -> (54) => YES; maximumNumberOfArray = 54;
    Increment the index

    5th ITERATION =>  minimumNumberOfArray = 3; maximumNumberOfArray = 54;
    is 3 > arrayOfNumbers[index] -> (1) => YES; minimumNumberOfArray = 1;
    is 54 < arrayOfNumbers[index] -> (1) => NO; maximumNumberOfArray = 54;
    Increment the index
  */

  for(let index = 0; index < arrayOfNumbers.length; index++){

    if(typeof arrayOfNumbers[index] === "number"){
              
      if(minimumNumberOfArray > arrayOfNumbers[index]){
        minimumNumberOfArray = arrayOfNumbers[index]
      }     
      else if(maximumNumberOfArray < arrayOfNumbers[index]){
        maximumNumberOfArray = arrayOfNumbers[index]
      }

    }


  }

  console.log('minum is:', minimumNumberOfArray)
  console.log('maximum is:', maximumNumberOfArray)

  return `Minum is: ${minimumNumberOfArray}, maximum is: ${maximumNumberOfArray}, and result is: ${minimumNumberOfArray + maximumNumberOfArray}`

}

let sumOfAllNumbers = sumOfNumbers([5, 3, "", 54, 1, 6, 7, false, undefined])
console.log(sumOfAllNumbers)

console.log("---- EXERCISE 7 ----")

let calculatorDiv = document.getElementById("calculatorDiv")
let inputOne = calculatorDiv.children[0]
let inputTwo = calculatorDiv.children[1]
let addBtn = inputTwo.nextElementSibling
let multiplyBtn = addBtn.nextElementSibling
let resultOfCalc = calculatorDiv.lastElementChild


function calculation(numberOne, numberTwo, mathOperator){

  switch (mathOperator) {
    case "+":
      return numberOne + numberTwo
    case "*":
      return numberOne * numberTwo

    default:
      break;
  }
}

addBtn.addEventListener("click", function(){
  // we must convert the value of the input because is string; same as in prompt
  let parsedNumberOne = Number(inputOne.value)
  let parsedNumberTwo = Number(inputTwo.value)
  let resultOfCalculationFunction = calculation(parsedNumberOne,parsedNumberTwo , "+")

  resultOfCalc.innerText = resultOfCalculationFunction

  
})


multiplyBtn.addEventListener("click", function(){
  let parsedNumberOne = Number(inputOne.value)
  let parsedNumberTwo = Number(inputTwo.value)
  let resultOfCalculationFunction = calculation(parsedNumberOne,parsedNumberTwo , "*")

  resultOfCalc.innerText = resultOfCalculationFunction
})