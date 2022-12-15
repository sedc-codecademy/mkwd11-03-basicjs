let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

let titleDiv = document.getElementById("title");
let contentDiv = document.getElementById("content");

function printStudents(contentElement, studentsArray){
    //debugger;
    contentElement.innerHTML = contentElement.innerHTML + "<h3>Your students:</h3>";
    contentElement.innerHTML = contentElement.innerHTML + "<ol>";

    for(let student of studentsArray){
        //contentElement.innerHTML = contentElement.innerHTML +
        contentElement.innerHTML += `<li>${student}</li>`;
    }
    contentElement.innerHTML += "</ol>";
}


function printSubjectsAndGrades(contentElement, subjectsArray, gradesArray){
    //debugger;
    if(subjectsArray.length != gradesArray.length){
        console.log("Subjects and grades array have different length!!!!");
        return;
    }
    contentElement.innerHTML = contentElement.innerHTML + "<h3>Your subjects and grades:</h3>";
    contentElement.innerHTML = contentElement.innerHTML + "<ul>";
    //both arrays have same length, they have same indicies
    for(let index in subjectsArray){
        contentElement.innerHTML += `<li>${subjectsArray[index]} : ${gradesArray[index]}</li>`;
    }

    contentElement.innerHTML += "</ul>";
}

function display(fName, role, titleElement, conElement, studentsArray, subjectsArray, gradesArray){
    //debugger;
    if(fName == "" || fName == null){
        console.log("First name is required!!!");
        return;
    }

    if(role == "" || role == null){
        console.log("User role is required!!!");
        return;
    }

    if(role != "student" && role != "teacher"){
        console.log("Invalid role!!!");
        return;
    }

    titleElement.innerText = `Welcome ${fName}`;

    if(role == "teacher"){
        printStudents(conElement, studentsArray);
    }
    else{
        printSubjectsAndGrades(conElement, subjectsArray, gradesArray);
    }
}



//user enters input
let firstName = prompt("Enter name");
let userRole = prompt("Enter role: student|teacher");

//print data
display(firstName, userRole, titleDiv, contentDiv, students, subjects, grades);