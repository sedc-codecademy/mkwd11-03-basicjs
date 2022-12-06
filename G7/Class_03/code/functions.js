console.log("------ FUCNTIONS ------");

function sayHello(){

  // The block code of the function
  console.log("Hello G7, this is our function class!")
  // ... rest of complex code here

}


/*
in order to call the function
we MUST INVOKE it
*/

sayHello()
sayHello()
sayHello()
sayHello()


function welcomingMessage(){
  console.log("Hello world")
};

welcomingMessage()

console.log("---- ARGUMENTS & PARAMETERS ----")

let firstNameOne = "John";

// PAREMETERS
function greetings(firstName) {
  // WE TELL THE FUNCTION WHAT TO DO WITH THE PARAMETER
  console.log(`Hello ${firstName}`)
}

let firstNameSecond = "Bob"

// WE PROVIDE ARGUMENT to the function
greetings(firstNameOne)
greetings("Gogo")
greetings(firstNameSecond)
greetings("Alex")
greetings() // it will return UNDEFINED since no ARGUMENT is provided

console.log("---- MULTIPLE PAREMETERS ----")

function sumOfTwoNumbers(firstNumber, secondNumber){
  let finalResult = firstNumber + secondNumber

  console.log("Result is: ", finalResult)
}

sumOfTwoNumbers(10, 5)
sumOfTwoNumbers(100, 58)
sumOfTwoNumbers(23, 49)

function sumOfFourNumbers(firstNumber, secondNumber, thirdNumber,forthNumber){

  console.log("Result of four numbers is:", firstNumber + secondNumber + thirdNumber + forthNumber)
}

sumOfFourNumbers(2,3,5,6)
sumOfFourNumbers(10,15,123, 90)

console.log("---- RETURN KEYWORD ----")

/*
this func. is accepting 2 params. numberOne & numberTwo
and it RETURNS their value
 */
function sumOfTwoNumbersWithReturn(numberOne, numberTwo){
  let result = numberOne + numberTwo

  return result
}

let finalSum = sumOfTwoNumbersWithReturn(10, 10)

console.log('Print the returned result stored in variable', finalSum)

console.log(sumOfTwoNumbersWithReturn(20, 10))

function printFullName(firstName, lastName){
  return `My fullname is ${firstName} ${lastName}`
}

let fullNameOne = printFullName("Bob", "Bobski");
console.log(fullNameOne)

let fullNameTwo = printFullName("John", "Doe");
console.log(fullNameTwo)



// the extra arguments sent are going to be ignored
let fullNameThree = printFullName("George", "Third value", "Dimitrov", "Forth Value");

console.log(fullNameThree)

// if we do not send a parameter, for that param. we will get UNDEFINED
console.log(printFullName("Aneta"))

console.log('--- DEFAULT PARAMETERS ---')

function printFavouriteMovie(movieName = "Shawshank Redemption"){

  return `Hey everybody, my favourite movie name is: ${movieName}`
}

let movieNameOne = printFavouriteMovie("Harry Potter")
console.log(movieNameOne)

/*
if we do not provide value for the coresponding parementer
if we do have default value, the default one is taken into place
 */
let movieNameTwo = printFavouriteMovie()
console.log(movieNameTwo)

let movieNameThree = printFavouriteMovie("John Wick");
console.log(movieNameThree)

function calculateIfStudentHasPassed(passScore, studentName = "User"){
  let passingScore = 100;

  if(passScore < passingScore){
    return `Student with name ${studentName} has not passed.`
  }else if (passScore >= passingScore) {
    return `Student with name ${studentName} has passed. Congrats!`
  }

}

let studentPassedOne = calculateIfStudentHasPassed(110, "John");
console.log(studentPassedOne);

let studentPassedTwo = calculateIfStudentHasPassed(90, "Alex");
console.log(studentPassedTwo);

let studentPassedThree = calculateIfStudentHasPassed(50);
console.log(studentPassedThree)


console.log("--- SCOPE ---");

/*
1. Global Scope
2. Functional Scope
 */


// Level #1 -> GLOBAL SCOPE
let someRandomGlobalVariable = "Random Value"

function saySomething(){
  // LEVEL #2 -> FUNCTIONAL SCOPE


  /*
  the variables we declare in the function
  they live in the functional scope
  and are NOT accessible in the GLOBAL SCOPE/OUTSIDE
   */

  console.log(`I am accessing GLOBAL SCOPE variable
  in my FUNCTIONAL scope, variable value:  ${someRandomGlobalVariable}`)
  
  
  let helloMessage = "Hey Fellas How are you?"
  console.log(helloMessage)

  let myFullName = printFullName("John", "Doe")
  console.log(myFullName)

}
saySomething()

// We cannot access helloMessage variable
// that has been declared in the
// FUNCTIONAL SCOPE of saySomething function
// console.log(helloMessage)

console.log(Number("123")) // will convert "123" string into 123 number
console.log(String(500)) // will convert 500 number to 500 string