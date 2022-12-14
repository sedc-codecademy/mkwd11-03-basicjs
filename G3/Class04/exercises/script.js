function printMessageInConsole(message) {
    console.log(message);
}

function validateIfInputIsANumber(number) {
    if(typeof(number) === 'number' && !Number.isNaN(number)){
        return true;
    } else {
        return false;
    }
}

function getNumberInput(inputMessage) {
    let input = prompt(inputMessage);
    let parsedInput = parseInt(input);

    if (validateIfInputIsANumber(parsedInput)) {
        return parsedInput;
    }
    return -Infinity;
}

// Gets and input from user and parses it to boolean
// valid input as boolean t,T,F,f,True,False,Yes,yes,No,no

function getBooleanInput() {
    let message = `Please enter one of the values to confirm (t,T,True,true,Yes,yes) for Yes (False,false,F,f,No,no) for No`
    let input = prompt(message);

    switch (input) {
        case "T":
        case "t":
        case "True":
        case "true":
        case "Yes":
        case "yes":
            return true;
        case "F":
        case "f":
        case "False":
        case "false":
        case "No":
        case "no":
            return false;
        default:
            return null;
    }
}




let num1 = getNumberInput("Please enter a number");
console.log("First input: ", num1);

let num2 = getNumberInput("Please enter your age");
console.log("Second input: ", num2);

let num3 = getNumberInput("Please enter your year of birth");
console.log("Third input: ", num3);

let num4 = getNumberInput("Please enter value");
console.log("Fourt input: ", num4);

