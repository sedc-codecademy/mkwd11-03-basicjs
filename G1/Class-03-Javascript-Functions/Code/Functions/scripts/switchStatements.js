// SWITCH

let userInput = prompt("Enter day of the week");
let dayNumber = parseInt(userInput);

// if (dayNumber === 1) {
//   console.log("Monday");
// } else if (dayNumber === 2) {
//   console.log("Tuesday");
// } else {
//   console.log("Please insert valid day number");
// }

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Please enter a valid input !!!");
    break;
}

let subject = prompt("Choose a subject (JS, C#, HTML)");
console.log(subject);
let subjectToLower = subject.toLowerCase();
console.log(subjectToLower);



switch (subjectToLower) {
  case "js":
    console.log("We are going to learn JS");
    break;
  case "c#":
    console.log("We are going to learn C#");
    break;
  case "html":
    console.log("We are going to learn HTML");
  case "css":
    console.log("And CSS as well.");
    break;
  default:
    console.log("We are not learning anything.");
    break;
}
