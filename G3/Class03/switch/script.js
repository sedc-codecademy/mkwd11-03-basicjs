console.log("Connected");

let day = 1;
let dayInWords = '';

switch(day) {
    case 1:
        // executes code
        console.log("Monday");
        break; // exits the switch statement
    case 2:
        console.log("Thuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("No day exists with that number");
        break;
}

let workingDay = "as";

switch(workingDay) {
    case "Monday":
    case "Wednesday":
    case "Saturday":
        console.log("Working day");
        break;
    case "Thursday":
    case "Friday":
        console.log("Non working days");
        break;
    case "Sunday":
        console.log("Weekend");
    default:
        console.log("We cannot find the day you are looking for");
}

let number = 1;
// switchwithout break;
switch(number) {
    case 1:
        console.log("case 1");
        number += 1;
    case 2:
        console.log("case 2");
        number += 2;
    case 3:
        console.log("case 3");
        number += 3;
    case 4:
        console.log("case 4");
        number += 4;
    default:
        console.log("we are in default");
        break;
}

console.log(number);


let name = "Todor";

switch(name) {
    case "Trajan":
        console.log("Trainer");
        break;
    case "Todor":
        console.log("Assistant");
        break;
    case "Bob":
        console.log("Coordinator");
        break;
    default:
        console.log("Enter valid value");
        break;
}

if(name === "Trajan") {
    console.log("Trainer");
} else if(name === "Todor") {
    console.log("Assistant");
} else if(name === "Bob") {
    console.log("Coordinator");
} else {
    console.log("Please enter a valid value");
}