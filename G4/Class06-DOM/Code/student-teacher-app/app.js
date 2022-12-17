const appEl = document.getElementById("app");
const titleEl = document.querySelector("#title");
const contentEl = document.querySelector("#content");
console.log(appEl, titleEl, contentEl);

const students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
const subjects = ["Math", "English", "Science", "Sport"];
const grades = ["A", "B", "A", "C"];

function printGrades(subjects, grades, element) {
  // First clear the element innerhtml
  element.innerHTML = "";

  let liContent = "";

  for (let i = 0; i < subjects.length; i++) {
    liContent += `<li>${subjects[i]}: ${grades[i]}</li>`;
  }
  element.innerHTML += `<ul>${liContent}</ul>`;
}

// printGrades(subjects, grades, contentEl);

function printStudents(students, element) {
  element.innerHTML = "";

  let liContent = "";

  for (let student of students) {
    liContent += `<li>${student}</li>`;
  }

  element.innerHTML += `<ol>${liContent}</ol>`;
}

// printGrades(subjects, grades, contentEl);
// printStudents(students, contentEl);

function renderAcademyPanel(userType, name) {
  if (userType === "student") {
    titleEl.innerHTML += `<h1><b>Hello there ${name}</b></h1>
    <p>Welcome to your student page</p>`;
    contentEl.innerHTML += `<h3>Your grades:</h3>`;
    printGrades(subjects, grades, contentEl);
    return;
  }

  if (userType === "trainer") {
    titleEl.innerHTML += `<h1><b>Hello ${name}!</b></h1>
    <p>Welcome to your trainers page</p>`;
    contentEl.innerHTML += "<h3>Your students:</h3>";
    printStudents(students, contentEl);
    return;
  }

  titleEl.innerHTML += `<h1><b>Your login was unsucessfull</b></h1>
  <p>Please try again!</p>`;
}

let userType = prompt("Are you a student or a trainer?");
let username = prompt("What is your name?");

renderAcademyPanel(userType, username);

// Changing style
appEl.style.fontFamily = "sans-serif";
appEl.style.backgroundColor = "lightblue";
appEl.style.margin = "20px";
appEl.style.padding = "20px";
