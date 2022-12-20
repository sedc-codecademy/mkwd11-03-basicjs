console.log("it works");

const clickMeBtn = document.getElementById("clickMeBtn");
console.log(clickMeBtn);

function sayHello() {
  console.log("Hello world!");
}

function printWin() {
  console.log("I'm the WINNER");
}

// Defining a function as a value directly
// clickMeBtn.onclick = function () {
//   console.log("i was clicked by the trainer");
// };

// Passing a function reference as the value (function definition not result from calling it)
clickMeBtn.onclick = sayHello;
// First function will not be executed like this
clickMeBtn.onclick = printWin;

// Event listener example

const nameBtn = document.querySelector("#nameBtn");

function printFullName() {
  console.log("Danilo Borozan");
}

console.log(nameBtn);

nameBtn.addEventListener("click", printFullName);
nameBtn.addEventListener("mouseenter", sayHello);
nameBtn.addEventListener("mouseleave", printWin);

// Blur event example

const usernameInput = document.getElementById("username");
const errorMsgEl = document.querySelector(".error-msg");

errorMsgEl.style.color = "red";

console.log(usernameInput, errorMsgEl);

function inputGreeting(event) {
  console.log(`This is the target element value ${event.target.value}`);
  // How to access an html inputs value
  console.log(`This is the input's value: ${usernameInput.value}`);

  console.log(`Hello from ${usernameInput.value}!`);
  usernameInput.value = "";
}

// usernameInput.addEventListener("blur", inputGreeting);

function validateUsernameLength(minLength) {
  if (usernameInput.value.length < minLength) {
    errorMsgEl.textContent = "Username too short, please try again";
  } else {
    errorMsgEl.textContent = "";
  }
}

usernameInput.addEventListener("blur", function () {
  // We can write whatever we need here
  console.log("i am printed from an anonymous function");
  validateUsernameLength(6);
});
