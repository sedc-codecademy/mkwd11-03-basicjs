console.log("CONNECTED");

let ourUndefinedVarible;
console.log(ourUndefinedVarible)

//Combine strings

console.log("---- STRING CONCATANATION ----");

let firstName = "John";
let lastName = "Doe";

// string concatanation => when we want to add strings together
let fullName = firstName + " " + lastName;
console.log(fullName);

let movieName = "The Gentleman";
let movieDirector = "Guy Ritchie";

let movieInformation = 
"Recommended movie for today " + movieName + " from " + movieDirector;

console.log(movieInformation);

/*
 * When we use string concatanation with string + number
 the number will be converted as a string. => "" + 46 = "46"
 */

let myFavouriteNumber = 46;
console.log("The typeof the variable myFavouriteNumber is: ", 
typeof myFavouriteNumber)

let stringiFiedNumber = "" + myFavouriteNumber;
console.log("When we concat. string + number we get:", stringiFiedNumber,
typeof stringiFiedNumber)

let favNumberMsg = "My favourite number is: " + myFavouriteNumber;
console.log(favNumberMsg)
console.log('typeof favNumberMsg: ', typeof favNumberMsg)

let groupName = "G";
let groupNumber = 7;
console.log("We are " + groupName + groupNumber + " group.");

let nextYearValue = 2023
let newYearMsg = nextYearValue + " Happy new year";
console.log(newYearMsg);
console.log('typeof newYearMsg: ', typeof newYearMsg);

// when you do math. operation, make sure both values are numbers =)
let mathOperationWithStrings = "20" + "20";
console.log("Result is: ",mathOperationWithStrings);

/* when we do math. operation with one of the values
to be number and the other string, javascript
will CONVERT the number to string and it will concatinate them */
console.log("Second Result is: ", 4 + "5");

console.log(5 * 5 - 4 / 2 + "100");

// ecmascript 2015 / es6
console.log("---- STRING INTERPOLATION ----");

let bananaSmoothieIngrediants = `1. Milk 2.Banana
3. Almonds 4. Honey
5. Peanut Butter
`;

console.log(bananaSmoothieIngrediants);

let javascriptInvented = "Brendan Eich";
let developedFor = "Netscape 2";
let yearDeveloped = 1995;

let jsInformation = `Javasript was invented by ${javascriptInvented},
for the company ${developedFor} in ${yearDeveloped}.`;
console.log(jsInformation);

// console.log('It's going to rain today') //we get the err;

// escape character \

console.log('It\'s going to rain today');
console.log("It's going to rain tomorrow ");
console.log(`It's going to rain on monday`);

console.log("---- SPECIAL NUMBERS ----");

let invalidNumber = 2 * "Hello";
console.log('Our result is: ',invalidNumber); // NaN
console.log("The type of the variable invalidNumber is: ",
typeof invalidNumber);

console.log(432 * undefined);

// isNaN => will check if the given value IS NOT A NUMBER; 
// and if it is NOT A NUMBER it will return TRUE;

console.log(`We are checking if the value for the variable
invalidNumber IS NOT A NUMBER
`,isNaN(invalidNumber));

let helloWorldMessage = "Hello World";
console.log(isNaN(helloWorldMessage));

// ES6
// Number.isNaN() will check if the value is a number too
console.log(Number.isNaN(helloWorldMessage)) //false => the
console.log(Number.isNaN("Hey fellas")) //false
console.log(Number.isNaN(25)) // false => 25 IS A NUMBER
let aCalulation = 23 * "hello";
console.log("value of aCalulation is: ", aCalulation) // NaN
console.log(Number.isNaN(aCalulation)) // true => the value IS NAN ( IS NOT A NUMBER )

// INFINITY
let positiveInfinite = 1 / 0;
let negativeInfinite = -1 / 0;

console.log("Positive infinite: ", positiveInfinite);
console.log('Negative infinite: ', negativeInfinite);

console.log(10000 > positiveInfinite);

let infiniteValue = Infinity;
let negativeInfiniteValue = -Infinity;
console.log(`Positive: ${infiniteValue}, Negative ${negativeInfiniteValue}`);

console.log('---- LOGICAL OPERATORS ----');

console.log("** LOGICAL OPERATOR 'AND' && **")

/* LOGICAL OPERATOR AND => &&
will return TRUE ONLY if the two values we compare are TRUE.
 */

let expressionOne = 2 > 1; //true;
let expressionTwo = 10 < 100; //true

console.log(
  `Using the logical AND between 2 true expression returns: `,
  expressionOne && expressionTwo
) //true

console.log(`
If we have atleast 1 false/falsy expression it will return: `,
  expressionOne && 5 > 10
) //false
 
let myAge = 27;
let minimumAgeRequirement = 18;
let doIHaveFreeTime = true;
let canIGoToDisco = myAge > minimumAgeRequirement; //true

console.log('Can I go to Disco? ', canIGoToDisco && doIHaveFreeTime); //true

let kidsAge = 16;
let todayDay = "Saturday";

let canKidGoToDisco = kidsAge > minimumAgeRequirement; //false

console.log('Can the kid go to disco?',
canKidGoToDisco && todayDay === "Saturday") // false

// When we are using && with two truthy values it will return
// the SECOND truthy value

console.log(
  'When we compare two truthy values, the second one is returned',
  26 && "I AM A STRING, AND I AM TRUTHY"
)

let swapPlaces = "I AM A STRING, AND I AM TRUTHY" && 26;
console.log(swapPlaces)

// If we have at least one false value it returns false
console.log(
  'When we have one false(boolean) value a false is returned as: ',
  2 < 1 && "I AM STRING AND I AM TRUTHY"
);

// If we have two FALSY values && log. operator returns the FIRST FALSY VALUE;

console.log(
  "We have two falsy values used between && operator, the first falsy is returned as:",
  undefined && 0
)

console.log(0 && canKidGoToDisco);

console.log(
  "one truthy/true value and the other is FALSY it returns the FALSY value as:",
  0 && 3 > 2
)

/*
  false => data type is BOOLEAN
  true => data type is BOOLEAN
  FALSY => 0, -0, "", undefined, null , NaN
  TRUTHY => ALL THE REST MY AMIGOS =); 
 */

console.log("** LOGICAL OPERATOR 'OR' || **");

let isSchoolWeekOver = true;
let isHomeworkFinished = false;

let canIGoOut = isSchoolWeekOver || isHomeworkFinished;


// RULE #1
console.log(`If atleast one of the values that we compare is true
it is going to return true =) as: `, canIGoOut);

// RULE #2
let helloMessage = "Hello Class" || "Hello World";

console.log(`If we have two truthy values, OR || operator will return
the first TRUTHY value as: `, helloMessage);

console.log("Bob Boski" || 120); // Bob Bobski

// RULE #3
let oneTruthyExample = 1 > 2 || "I love coffee"

console.log(`If we have one true/truthy value and the other is false/falsy,
the logical OR '||' will always return the truthy one as: `, oneTruthyExample);

// RULE #4
let twoFalsyValuesExample = undefined || 0;
console.log(`If we have two falsy values the second one is returned as:`, twoFalsyValuesExample)

let userGenderInput;
console.log('user gender input', userGenderInput);


console.log(`The user gender is: ${userGenderInput || "nothing-selected"}`);


console.log("** LOGICAL 'NOT' ! **");

// It will convert the true to false or vise versa;

console.log("logical not used as !true: ", !true);
console.log("logical not used as !false: ", !false);
console.log('logical not used with falsy value:', !userGenderInput);
console.log('logical not used with truthy value:', !"Hello World");


console.log("---- CONTROL STRUCTURES ----");

let myQuizScore = 100;
// inside the brackets () we put the condition/statement;

// statement between ()

// if(myQuizScore === 150){
//   // the block of the previous statement
//   alert("Well done, you have answered correctly =)")
// }else {
//   alert(`No worries, your final score is: ${myQuizScore}`)
// }

/*
  if => check if statement is fullfilled
  else if => backup plan/backup with statement 
  else => backup plan without statement
 */
if (myQuizScore === 150) {
  console.log("Well done, you have answered correctly =)")
} else if (myQuizScore === 140) {
  console.log('Yaay you only missed 1 question')
} else if (myQuizScore === 130) {
  console.log('No worries you have passed the test aswell')
} else if (myQuizScore === 120) {
  console.log('Nicely done')
} else {
  console.log('You failed')
}


// PROMPT

// the value that the user types is stored inside the prompt
// and to use it we initialize the variable firstNamePrompt to have
// the value of the prompts itself;

// let firstNamePrompt = prompt("Hey, what is your name?");
// console.log(firstNamePrompt)
// console.log('User has typed: ', firstNamePrompt)
// let lastNamePrompt = prompt("Hey, what is your last name?");
// console.log(lastNamePrompt)

// let userFullNameIs = `${firstNamePrompt} ${lastNamePrompt}`
// console.log(userFullNameIs);

// THE TYPE OF THE USER INPUT OF THE PROMPTS
// IS ALWAYS A STRING

let firstNumber = prompt("First Number:");
let secondNumber = prompt("Second number");

console.log(firstNumber);
console.log('The type of the prompt is: ',typeof firstNumber);


let result = firstNumber + secondNumber
console.log(result)

// parseInt => Converts string to number
// parseFloat => Converts string to number even if they have decimals

let secondResult = parseFloat(firstNumber) + parseFloat(secondNumber);
console.log(secondResult)

// if the result is more or equal to 50 AND less or equal then 100
if(secondResult >= 50 && secondResult <= 100){
  console.log("Yes result is more or equal to 50 and is:" ,secondResult)
} else if (secondResult < 10){
  console.log("Result is less then 10")
} else {
  console.log("Result is: ", secondResult)
}