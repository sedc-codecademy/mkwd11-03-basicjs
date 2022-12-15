// ===== HTML Event Handlers ======

function countToFive() {
    for(let i = 1; i <=5; i++) {
        console.log(`Count is now ${i}`);
    }
}

// ===== Named vs. Anonymous function =====

function namedFunction() {
    console.log("I am named function.");
}

namedFunction();

let anonymousFunc = function () {
    console.log("I am anonymous function");
}

anonymousFunc();

// ===== DOM Event Handler =====

let btn = document.getElementById("btn");

function someFunc () {
    console.log("Hello from someFunc.");
}

function funcWithParam(name) {
    console.log(`Hello, I am ${name}.`);
}

btn.onclick = someFunc; // We assign just the function name, without the parentheses 
// btn.onclick = someFunc(); // This is incorrect syntax

// This will overwrite the previously created event handler, meaning that when we click the btn button, only
// the code below will be triggered and executed
// This is the main drawback of the DOM event handlers - for a given element, we can only bind one function to one event type 
btn.onclick = function() {
    funcWithParam("Jana");
}

// ===== Event Listeners =====

let pinkDiv = document.getElementById("pinkDiv");

function firstFunc() {
    console.log("I AM FIRST FUNC");
}
function secondFunc() {
    console.log("I AM SECOND FUNC");
}

// We can create as many event listeners for one element and one event type as we want and need - this is the
// advantage over the traditional DOM handlers
pinkDiv.addEventListener("mouseover", firstFunc);
pinkDiv.addEventListener("mouseover", secondFunc);

let inputElem = document.getElementById("input");

function focusGreeting() {
    console.log("Focus on input");
}

function blurGreeting() {
    console.log("Input lost focus");
}

inputElem.addEventListener("focus", focusGreeting);
inputElem.addEventListener("blur", blurGreeting);

let enteredName = '';

inputElem.addEventListener("blur", function(event) {
    // console.log(event); 
    // console.log(event.target);
    // console.log(event.target.value);
    enteredName = event.target.value;
})

// Some more examples
function functionWithParam(name) {
    // ... some code...
    if(name.length != 0) {
        console.log(`Hello, I am ${name}`);
    } else {
        console.log(`Please enter your name in the input field`);
    }
    // ... plus some more code...
    // basically, the anonymous function makes it possible for us to trigger as much code as we want 
    // when an event occurs with only one event listener if we need or want to
    // Also, the anonymous function gives us the option to bind functions with parameters to the events
}

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    functionWithParam("Blazo");
})

btn1.addEventListener("click", function() {
    functionWithParam(enteredName);
})

let registerDiv = document.getElementById("registerDiv");

function checkRegisterInput(value, length, element) {
    if(value.length < length) {
        element.innerText = `Name must be at least ${length} character long. Please try again`
    }
    else {
        element.innerText = `Welcome, ${value}`
    }
}

btn1.addEventListener("click", function() {
    checkRegisterInput(enteredName, 2, registerDiv)
})