//=====The SWITCH control structure=====

// Used to evaluate if a given expression matches a value defined in some of the switch cases;
// A switch case defines a value that the switch expression is matched against;
// This matching is done by using the strict equality operator (switch expression === case value);
// This means that the code in a case block will be executed if the switch expression is equal to the
// case value by type and value;

var input = prompt("Enter day of week (1-7):")

switch(input) {
    case 1:
        alert("It's Monday");
        break;
    case 2:
        alert("It's Tuesday");
        break;
    case 3:
        alert("It's Wednesday");
        break;
    case 4:
        alert("It's Thursday");
        // If you omit the code from the following case (or cases, until a break keyword is found) 
        // will be executed, regardless of the fact that the switch expression does not match the next case value;
        // This is called fall-through behavior;
        // break; 
    case 5:
        alert("It's Friday");
        break;
    case 6:
        alert("It's Saturday");
        break;
    case 7:
        alert("It's Sunday");
        break;
        // You don't have to use the default keyword, but it is a good practice to use it when you want
        // to handle the scenario when neither of your case values matched the switch expression
    default:
        alert("No such day!")
        break;
}

switch(input) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert("It's a work day");
        break;
    case 6:
    case 7:
        alert("Yay! Weekend!")
        break;
    default:
        alert("Invalid input!")
        break;

}

var colorInput = prompt(`Choose a color to help me sort you in the suitable house:
1. red
2. green
3. blue
4. yellow
5. silver
6. gold
7. bronze
8. black`)

switch(colorInput) {
    case "red":
    case "gold":
        alert("You are a true gryffindor!");
        break;
    case "black":
    case "yellow":
        alert("A loyal hufflepuff! Congratulations!");
        break;
    case "green":
    case "silver":
        alert("A proud Slytherin! Good for you.");
        break;
    case "blue":
    case "bronze":
        alert("You are a wise Ravenclaw!");
        break;
    default:
        alert("You probably got the Hogwarts acceptance letter by mistake :(");
        break;
}