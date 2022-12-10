let result = 10 + 15

// if we do not have the break keyword 
// all of the rest below of the matching will be entered
switch (result) {
  case 10: // is result equal to 10
    console.log("Case of 10, Result is:" , result)
    break // exit the case state
  case 15: // is result equal to 15
    console.log("Case of 15, Result is:" , result)
    break
  case 20: // is result (value ) equal to 20
    console.log("Case of 20, result is", result)
    break
  case 25: // is 25 equal to result
    console.log("Case of 25, result is", result)
    break // break => exit the case and the switch when condition is met
  case 30: 
    console.log("Case of 30, result is", result)
    break 
  default:
    console.log("Default case")
    break
}


// Age calulator 
// We should, ask the user for birthyear
// and tell the user how old is he/she
// BONUS=> use js to get the value of the current year


/*
  1. Create a function called ageCalculator; => DONE
  2. Ask the user through prompt for his birth year; => DONE
  3. Find out how can we find the current year through JS; => DONE
  4. Calculate the user years by = current year - year of birth; => DONE
  5. Print to the user his years; => DONE

  6. BONUS: Check if the user clicked cancel => DONE;
  7. BONUS: Check if the year is valid and not a future year => DONE
*/


// step #1
function ageCalculator(){
  // step #2
  let userYearOfBirthInput = prompt("Dear user, what is your year of birth?");
  
  // if the user clicks cancel on the prompt
  if (userYearOfBirthInput === null || userYearOfBirthInput === ""){
    // CASE 1 
    // instead of message you can return false or something else
    // return "Wrong input, please provide year!"

    // CASE 2
    // or we can simply FORCE the user to enter a year by
    // reinvoking a function
    // ageCalculator()

    // CASE 3
    return false
  }

  // step #3
  let date = new Date();
  let currentYear = date.getFullYear();

  if (Number(userYearOfBirthInput) > currentYear) {
    // CASE 1 
    // return "Man, have you watch back to the future or what?"

    // CASE 2
    return false
  }
  
  // step #4
  let userYears = currentYear - Number(userYearOfBirthInput);

  return userYears

}

// this function IS RETURNING A VALUE
// let usersYears = ageCalculator();
// console.log(usersYears)

// console.log(ageCalculator())

function userYearMessage(){
  let userYearsOutput = ageCalculator();
  console.log('DEBUG 1', userYearsOutput)

  if(userYearsOutput === false){
    return "Man you messed up the year input obv."
  }
  else {
    return userYearsOutput
  }
}

let userYearToPrint = userYearMessage()
console.log(userYearToPrint)