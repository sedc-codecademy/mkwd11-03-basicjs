let todos = [];

function addTodo(todo) {
  if (typeof todo !== "string") {
    return "Invalid input";
  }
  todos.push(todo);
  return "Todo successfully added!";
}

function getTodoByIndex(index) {
  if (Number.isNaN(Number(index))) {
    return "Invalid input";
  }

  if (!todos[index]) {
    return "Todo does not exist!";
  }

  return `Todo: ${todos[index]}`;
}

function getTodoByName(todoName) {}

function printAllTodos() {
  if (todos.length === 0) {
    return "No todos in array!";
  }
  for (const todo of todos) {
    console.log(todo);
  }
}

// Deleting ALWAYS goes by index
function deleteTodo(index) {
  if (Number.isNaN(Number(index))) {
    return "Invalid input";
  }
  // Splice can be used to delete an item from an array. (Do a bit of research how it works for bonus points.)
  // There's a better way to do this but we'll learn that in AdvancedJS
  todos.splice(index, 1);
  return "Todo deleted!";
}

function updateTodo(todo, index) {
  if (typeof todo !== "string" || todo.length <= 0) {
    return "Invalid todo input!";
  }

  if (Number.isNaN(Number(index))) {
    return "Invalid index input";
  }

  todos[index] = "todo";
  return "Todo successfully updated!";
}

addTodo("Walk the dog.");
addTodo("Feed the cat");
addTodo("Write homework");
console.log(todos);
deleteTodo(2);
console.log(todos);