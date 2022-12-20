// Selectors
const submitBtn = document.querySelector("#submitBtn");

/* 
We are only declaring "pointers" to the inputs here, but we are NOT
accessing the values. The code here will execute only ONCE,
when the program initially executes. This means that if we access the values here,
then we will have saved the values as "" for the rest of the program.
*/
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const userEmailInput = document.querySelector("#userEmail");
const userPasswordInput = document.querySelector("#userPassword");
const paramContainer = document.querySelector("#param-container");

function printFormParams(name, surname, email, password) {
  paramContainer.innerHTML = `${name} ${surname}, ${email}-${password}`;
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  /*
  We are accessing the values because we ONLY need the values of the inputs
  when we click on the button.
  */
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const userEmail = userEmailInput.value;
  const userPassword = userPasswordInput.value;
  
  printFormParams(firstName, lastName, userEmail, userPassword);
});
