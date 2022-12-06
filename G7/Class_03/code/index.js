console.log('HERE 1');
console.log("HERE 2");

// alert("Hey I am an alert");
console.log("HERE 3");


console.log(isNaN("25")); 
console.log(isNaN("coca-cola"));
console.log("----")
console.log(Number.isNaN("25"));
console.log(Number.isNaN("coca-cola"));
console.log(Number.isNaN(25))
                          // NaN
console.log(Number.isNaN(25 * "qwe")) // true

// Prompt

// 1. will always a string
// 2. if we click cancel, we get NULL
// 3. if we do not provide a value we get empty string
// let userNameInput = prompt("Hello mate, what is your name?");
// console.log(userNameInput);
// console.log("User's first name is: ", userNameInput);



// **** WAY ONE ****

// let numberOne = prompt("Number one: ");
// let numberTwo = prompt("Number two: ");

// let parsedNumberOne = parseFloat(numberOne);
// let parsedNumberTwo = parseFloat(numberTwo)

// let finalResult = parsedNumberOne + parsedNumberTwo;

// **** WAY TWO ****

// let numberOne = parseFloat(prompt("Number one: "));
// let numberTwo = parseFloat(prompt("Number two: "));
// console.log(numberOne, numberTwo)

// if(Number.isNaN(numberOne) || Number.isNaN(numberTwo)){
//   alert("Hey dude, dont play smart please provide valid values")
// }

// let finalResult = numberOne + numberTwo;
// console.log('Result is: ', finalResult)

// when we do parseInt on a decimal
// the decimal is ignored
// let numberThree = parseInt(prompt("Enter number"));

// console.log("NUMBER THREE: ",numberThree)

console.log("---- SWITCH STATEMENT ----");

let result = 10

switch(result){
    case 10:
      console.log("Yes the result is 10 from Switch");
      break
    case 15:
      console.log("Yes the result is 15 from Switch");
      break

}

// THIS IS THE SAME CHECK AS ABOVE
if(result === 10){

  //complex code here

  console.log("Yes the result is 10 from If");

}
else if (result === 15){
  console.log("Yes the result is 15 from If");
}

let jsInventedByQuestion = prompt("Who Invented JS");


/*
 We must use the "break" keyword so we stop the executing 
 of the switch case when the condition is met
*/
switch(jsInventedByQuestion ){
    // George
    case "George":
      console.log("Nope, that is wrong answer");
      break
    case "Aneta":
      console.log("Nope, It is not Aneta");
      break
    case "Brandan Eich":
      console.log("Yes that is correct !");
      break
    default:
      console.log("Nothing of the above was met");
      break
}


let inputPet = prompt("What kind of pet do you want?");
console.log("PROMPT OUTPUT: ", inputPet)

/*
toLowerCase() => will put all the letters in lowercase
toUpperCase() => will put all the letters in uppercase
*/

// we have trasnformed the user input
// to lower case (all letters in lowercase)

let transformedLowerInputPet = inputPet.toLowerCase();
console.log("TRANSFORMED: ", transformedLowerInputPet)

switch(transformedLowerInputPet){
    case "dog":
    case "puppy":
      console.log("Dogs are really friendly");
      break

    case "cat":
    case "kitty":
    console.log("Cats are awesome!");
    break

    case "tiger":
    console.log("You should not pet a Tiger");
    break

    default:
    console.log("The pet you want, it is not available yet.")
    break

}