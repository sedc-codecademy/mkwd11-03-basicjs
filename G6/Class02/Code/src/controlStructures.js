//===== CONTROL STRUCTURES =====

//****** IF/ELSE ******

/*
    We use the if/else control structure to execute
    a piece of code depending on some condition (conditional execution).
    A condition is any expression that can be evaluated to true or false.
    The code in the if part of the structure will be executed only
    if the condition evaluates to true.
*/

var condition = 5 > 2; // evaluates to true
if(condition) {
    // The code we write here will be executed
}
else {
    // The code we write here won't be executed
}

var condition2 = 5 < 2; // evaluates to false
if(condition2) {
    // The code we write here won't be executed
}
else {
    // The code we write here will be executed
}

// Example 1
var score = 50;

if (score > 100) {
    //This code won't be executed
    console.log("DID I WIN?");
}

// Example 2
var points = 51;

// 61 points are needed for the student to pass the exam, and that's the condition that we're checking in the if
if (points > 60) {
    console.log("YAY, YOU PASSED! :)");
} else {
    console.log("Sorry, you didn't pass :( Work harder next time");
}

/*
    The *else if* part of the if/else structure specifies another condition to be evaluated.
    The condition in the *else if* will be evaluated only 
    if the previous condition/s was/were evaluated to false.
*/

// Example 3 - Grades
var scoredPoints = 89;

if (scoredPoints >= 91) {
    console.log("You got an A! Excellent!");
} 
else if (scoredPoints >= 81 && scoredPoints <= 90) {
    console.log("You got a B! Keep up the good work :)");
} 
else if (scoredPoints >= 71 && scoredPoints <= 80) {
    console.log("You got a C. It's a good effort, but study harder next time.");
} 
else if (scoredPoints >= 61 && scoredPoints <= 70) {
    console.log("You got a D! Study harder, you can do much better!");
}
else {
    console.log("You failed. You have to study harder!.");
}

/* 
    The if/else structure is also known as a branching structure because
    the if, else if, and else parts of it resemble branches,
    and they represent an alternative of the flow of the execution.
    This means, that depending on the condition, the code in ONLY ONE OF THEM
    will be executed.

    If there is no "else" clause chained at the end of the if/else structure, 
    it is possible that no code in the structure will be executed.
*/

// Exercise
var money = parseInt(prompt("How much money do you have?"))

if (money > 500) {
    alert ("Mozes da odis vo kafana.");
} 
else if (money > 300) {
    alert ("Mozes da si kupis sendvic od Fat Kitchen.");
}
else if (money > 100) {
    alert ("Mozes da si kupis cokolado.");
} 
else {
    alert("Mozes da se slikas.");
}
