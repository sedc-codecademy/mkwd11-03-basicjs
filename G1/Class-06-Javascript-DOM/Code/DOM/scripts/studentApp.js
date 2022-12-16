let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = document.getElementById("content");

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades, element) {
  element.innerHTML = "";
  element.innerHTML += `<ul id="subjectList"></ul>`;
  let list = document.getElementById("subjectList");
  list.innerHTML = "";
  for (let i = 0; i < subjects.length; i++) {
    list.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
  }
}

printGrades(subjects, grades, contentDiv);

function printStudents(students, element) {
  element.innerHTML = "";
  element.innerHTML = "";
}
