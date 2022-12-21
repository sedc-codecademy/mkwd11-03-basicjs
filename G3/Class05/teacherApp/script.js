let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let content = myApp.children[1];

// let content = titleDiv.nextElementSibling; 
// let content = myApp.lastElementChild;

let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];


function printGrades(subjects, grades, element) {
    element.innerHTML = ''; // clearing html
    element.innerHTML = '<ul>';
    for(let i = 0; i < subjects.length; i++) {
        element.innerHTML += `<li>${subjects[i]} : ${grades[i]}</li>`;
    }
    element.innerHTML += '</ul>';
}

function printStudents(students, element) {
    element.innerHTML = '';
    element.innerHTML = '<ol>';
    for(let student of students) {
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += '</ol>';
}

function printWellcome(role, name, element) {
    element.innerHTML += "<h1><b>Hello " + name + "</b></h1>";
    element.innerHTML += `<p>Welcome to your ${role} page</p>`;
}

function academyPanel(role, name) {
    if(role === 'student' && name.length >= 2) {
        printWellcome(role, name, titleDiv);
        content.innerHTML += '<h3>Your grades:</h3>';
        printGrades(subjects, grades, content);
    } else if(role === 'teacher' && name.length >= 2) {
        printWellcome(role, name, titleDiv);
        content.innerHTML += '<h3>Your students:</h3>';
        printStudents(students, content);
    } else {
        titleDiv.innerHTML += "<h1><b>Your login was unsecessfull</b></h3>";
        titleDiv.innerHTML += "<p>Please try again!</p>";
    }
}


// let role = prompt('Are you a student or teacher?');
// let name = prompt('Whats your name?');

// academyPanel(role, name);

let counter = 0;
let isValidLogin = false;
while(counter < 3 && !isValidLogin) {

    let role = prompt('Are you a student or teacher?');
    let name = prompt('Whats your name?');
    
    if((role === 'student' || role === 'teacher') && name.length >= 2) {
        academyPanel(role, name);
        isValidLogin = true;
    }else {
        counter += 1;
    } 
}