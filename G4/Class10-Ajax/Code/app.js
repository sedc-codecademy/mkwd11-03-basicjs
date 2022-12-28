console.log("works");

const student = {
  name: "John Doe",
  age: 30,
  country: "USA",
  classes: ["Basic HTML", "Basic JS", "Advanced JS"],
  isApplied: true,
};

// console.log(student);

// This will be a json string
const jsonStudent = JSON.stringify(student);

console.log(jsonStudent);

const parsedStudent = JSON.parse(jsonStudent);

// Back to javascript object
console.log(parsedStudent);

const todosContainerEl = document.querySelector(".todos-container");

function renderAllTodos(todosData, containerEl) {
  let todosHTML = "";

  for (let todo of todosData) {
    todosHTML += generateTodoHTML(todo);
  }

  containerEl.innerHTML = todosHTML;
}

function generateTodoHTML(todoData) {
  return `
  <div class="todo">
  <h3><strong>${todoData.id}</strong> ${todoData.title}</h3>
  <p>Todo is ${todoData.isCompleted ? "completed" : "not completed"}</p>
  </div>`;
}

console.log("before fetch");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (todos) {
    // this will always be executed after the "after fetch" console.log
    console.log("in the success for todo");

    renderAllTodos(todos, todosContainerEl);
  })
  .catch(function (error) {
    console.log(error);
  });
console.log("after fetch");

// Exercise One Solution

const personDetailsEl = document.querySelector(".person-details");

function renderDetails(personData, element) {
  element.innerHTML = `
        <h3>Name: ${personData.name}</h3>
        <p>Height: ${personData.height}cm</p>
        <p>Mass: ${personData.mass}kg</p>
    `;
}

function fetchStarWarsPersonDetails(id) {
  fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(data => {
      renderDetails(data, personDetailsEl);
    });
}

// More advanced example, experiment and try different things at home
document.querySelector("#lukeBtn").addEventListener("click", function () {
  fetchStarWarsPersonDetails(1);
});

document.querySelector("#threeBtn").addEventListener("click", function () {
  fetchStarWarsPersonDetails(2);
});
