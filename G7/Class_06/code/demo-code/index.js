console.log("connected")

// ********** HTML EVENT HANDLERS ********** => BAD PRACTICE

function greetingsMessage(){
  alert("Hello from Events class");
}

// ********** Better event handling **********


let textToChange = document.getElementById("textToChange");
console.log(textToChange);
let changeTextBtn = document.getElementById("changeTextBtn");
console.log(changeTextBtn);

let resultBtn = changeTextBtn.nextElementSibling
console.log(resultBtn)

let mousePosition = document.getElementById("mousePosition")

function changeText(){
  textToChange.innerText = "Heyy I have changed the text :)"
}

// whenever the button changeTextBtn is clicked
// the click event is RAISED
// and this RAISED event will call the function
// changeText

// we passed reference to the function
changeTextBtn.onclick = changeText

// this is bad
// because it will invoke the function INSTANTLY
// changeTextBtn.onclick = changeText()

function calculationsOfTwoNumber(numberOne, numberTwo){
  let result = numberOne + numberTwo
  textToChange.innerText = `Result is: ${result}`
}

// THIS IS BAD!
// resultBtn.onclick = calculationsOfTwoNumber(2, 4);

/* 
  whenever we have a fucntion that accepts params.
  we do it with the following syntax
 */
resultBtn.onclick = function(){
  calculationsOfTwoNumber(2,5)
}

// The functions assign to the event 
// can access a SPECIFIC argument
// called event
document.body.onmousemove = function(event){

  mousePosition.innerText = `X: ${event.x}; Y: ${event.y}`
}

// ********** Event listeners **********

let sayHelloHeading = document.getElementById("sayHelloHeading")

function sayHello(){
  alert("This message is sent from event listener")
}

sayHelloHeading.addEventListener("dblclick", sayHello)

let todoInput = document.getElementById("todoInput");
let todoBtn = document.getElementById("todoBtn");
let todosContainer = document.getElementById("todosContainer");

let todos = [];

function printTodos(todoList, elementToPrintIn){
  elementToPrintIn.innerHTML = ""
  elementToPrintIn.style.backgroundColor = "yellow"
  for(let i = 0; i < todoList.length; i++){
    elementToPrintIn.innerHTML += `<p> ${todoList[i]} </p>`
  }
}


todoInput.addEventListener("input", function(event){
  // console.log(event.target)
  // console.log(event.target.value)
})


todoBtn.addEventListener("click", function(){
  // the inputs has the property .value
  // which the current value inside the input
  let valueOfInput = todoInput.value


  todos.push(valueOfInput)
  printTodos(todos, todosContainer)

  todoInput.value = "" // clear input after it is added
})