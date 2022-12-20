// ====================== */
/* [[DOM EVENT HANDLERS]] */
// ====================== */
// elementName.on[event_name] = functionName
// FUNCTION DECLARATION

function navigateToArticle() {
  window.location.href =
    "https://derbi.mk/kros-go-ispofali-mesi-nikogash-ne-sum-videl-vakvo-neshto/";
}

// ELEMENT SELECTOR
const articleBtn = document.querySelector("#article-btn");

// ELEMENT LISTENER ATTACHMENT
/* 
Don't use the () here. It will execute the function on load.
We only need to give the element a reference to the function.
*/
articleBtn.onclick = navigateToArticle;

/* 
What you're doing here, is you're assigning a function to the onclick attribute of the articleBtn.
 So, whenever the button is clicked, it will call the function that was assigned.
 */

// function sumTwoNumbers(first, second) {
//   return first + second;
// }
// const result = sumTwoNumbers;

/* 
If you don't need to add more than one event listener to the element,
.on[event_name] is good enough.
Frameworks such as react and Angular use .addEventListener() in the background
*/

// DOM EVENT HANDLERS EXAMPLE #2
function printComment(event) {
  // console.log(event);
  // console.log(target.event);
  // console.log(event.target.value);
  const value = event.target.value;
  commentBox.innerHTML = value;
}

const commentTextArea = document.querySelector("#commentArea");
const commentBox = document.querySelector(".comment-box");

commentTextArea.oninput = printComment;

// ====================== */
/* [[ADD EVENT LISTENER]] */
// ====================== */

function registerUser(event) {
  /*
  Every function that is assigned to be executed after an event was fired has access to that event
  as an input parameter. You only need to write it as a parameter when you declare the function,
  and you can use it.

  Among other attributes of this event, you can find the target of the event.
  The target is an HTML element representing the element upon which this event was fired on.
  Example, the button that was clicked, or the form that was submitted.
  REMEMBER: The target is an HTML element.
  
  */
  event.preventDefault();
  //   console.log(event);
  /* 
  HTML Forms have an attribute called elements.
  This is an array of all the <input> and <button> elements within that form.
  All these elements are HTML elements.
  You can access the value of any <input> or <textarea> HTML element in Javascript
  by accessing their .value attribute.
  */
  const userEmail = registerForm.elements[0].value;
  const userPassword = registerForm.elements[1].value;

  console.log(userEmail, userPassword);

  // REMOVE EVENT LISTENER
  // Rarely used, if ever.
  // registerForm.removeEventListener("submit", registerUser);
  /*
   You can remove a listener similarly to how you added it.
   The idea is to "disable" a functionality once you've executed it once, such as disabling a 
   button after it's been clicked. But there are better ways to do this.
   */
}

const registerForm = document.querySelector("#register-form");
// registerForm.onsubmit = registerUser;
registerForm.addEventListener("submit", registerUser);

// ADD EVENT LISTENER EXAMPLE #2
const registerBtn = document.querySelector("#register-btn");

// Anonymous functions
// If you don't need the event, you can omit it.
registerBtn.addEventListener("mouseenter", function (event) {
  registerBtn.innerHTML = "Welcome!";
});

registerBtn.addEventListener("mouseleave", function () {
  registerBtn.innerHTML = "Register";
});
