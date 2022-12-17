let studentForm = document.getElementById("studentForm");
let resultDiv = document.getElementById("resultDiv");

let students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.studentsAge = age;
}

function showStudents(studentsArr, element) {
    element.innerHTML = '';
    for (const student of studentsArr) {
        element.innerHTML += `<li><b>Name:</b> ${student.firstName} ${student.lastName} <b>Age:</b> ${student.studentsAge}</li>`
    }
}

let submitBtn = studentForm.getElementsByTagName("button")[0];

submitBtn.addEventListener('click', function() {
    let firstName = studentForm.children[0].value;
    let lastName = studentForm.children[1].value;
    let age = studentForm.children[2].value;

    let newStudent = new Student(firstName, lastName, age);
    
    students.push(newStudent);

    let list = resultDiv.getElementsByTagName('ul')[0];

    showStudents(students, list);

    studentForm.children[0].value = '';
    studentForm.children[1].value = '';
    studentForm.children[2].value = '';
})