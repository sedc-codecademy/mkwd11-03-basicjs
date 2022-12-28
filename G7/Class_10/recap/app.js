/**
 * 
 * 1. Select all the neccessery html elements; => DONE
 * 2. We are going to create function constructor called "Todo"; => DONE
 * 3. Create an empty array called allTodos; => DONE
 * 4. On each click of the ADD todo button, invoke the click event
 *    that is going to create new object 
 *    out of the Todo constructor.
 *    When created add it to the list allTodos; => DONE
 * 5. Create a function printTodos, which is going to accept
 *    the list of todos as a paremeter and print them in the DOM =) => DONE
 * 
 */


// #Step 1
let inputs = $("input") //get all inputs by tag name
let addTodoBtn = $("#addTodoBtn") // get by id
let printTodosContainer = $("#printTodosContainer") //get by id

let errMsg = $("#errMsg")
console.log(inputs)

let inputName = inputs.eq(0)


// #Step 2
function Todo(todoNameToRecieve, todoStatusToRecieve){
  this.todoName = todoNameToRecieve;
  this.todoStatus = todoStatusToRecieve;


  this.isTodoDone = function(){
    if(this.todoStatus === "done"){
      return `<span class="done">  Todo is done </span>`
    }
    return `<span class="notDone"> Todo is not done </span>` 
  }
}


// #Step 3
let allTodos = []

// #Step 4
addTodoBtn.click(function(event) {
  event.preventDefault();
  console.log("we click");

  //get me checked radio button
  let checkedRadioButton = $(":radio:checked");
  
  let isFormValid = validateForm(inputName.val(), checkedRadioButton.length)

  //console.log(checkedRadioButton.val()) // checkedRadioButton.value

  
  
  
  if(isFormValid){
    console.log('we enter here 1')
    errMsg.hide() // will set the display style css prop to NONE
    // errMsg.style.display = "none"
    // element.style.color = "red"
    let todo = new Todo(inputName.val(), checkedRadioButton.val().toLowerCase())

    allTodos.push(todo)
    
  
    printTodos(allTodos)
  
    // here we are clearing the inputs
    inputName.val("")
    $(":radio:checked").prop("checked", false) //reset the checked radio btn
  }else {
    errMsg.show()
    // errMsg.style.display = "block" or "flex"
  }

  
})

/**
 * addTodoBtn.addEventListener("click", function(event){})
 */



// let dummyTodo = new Todo("Walk the dog", 'Done'.toLowerCase())
// console.log(dummyTodo.isTodoDone())

// #Step 5

function printTodos(listOfTodos){
  printTodosContainer.html("") //printTodosContainer.innerHTML = ""

  for(let index = 0; index < listOfTodos.length; index++ ){
    printTodosContainer.append(
      `
        <div class="todoContainer">
          <h4>Todo Name: ${listOfTodos[index].todoName}</h4>
          <p>Todo Status: ${listOfTodos[index].isTodoDone()}</p>
        </div>

      `
    )
  }

}

function validateForm(inputName, todoStatusFromRadio){
  

  // #WAY 1

  // if we have empty string
  // if inputName OR todoStatusFromRadio at least one IS FALSY
  if(!inputName || !todoStatusFromRadio){
    return false
  }
  return true


  // #WAY 2
  // if(inputName === "" || todoStatusFromRadio === 0){
  //   return false
  // }
  // return true

  // #WAY 3
  // return inputName === "" || todoStatusFromRadio === 0

  // if u uncomment way 3 make sure you add if(isFormValid === false) or if(!isFormValid)
}