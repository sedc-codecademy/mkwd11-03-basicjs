console.log('test');

// Simple calculator

//inputs 
let input01 = document.getElementById('input01');
let input02 = document.getElementById('input02');

//buttons
let sumBtn = document.getElementById('sumBtn');
let difBtn = document.getElementById('difBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');
let powBtn = document.getElementById('powBtn');

// paragraph for result
let resultPar = document.getElementById('result');

// events

sumBtn.addEventListener('click', function() {
    let sum = parseInt(input01.value) + parseInt(input02.value); 

    resultPar.innerHTML = `The sum of the two numbers is <strong>${sum}</strong>`;
    input01.value = '';
    input02.value = '';
});

difBtn.addEventListener('click', function() {
    let dif = parseInt(input01.value) - parseInt(input02.value);

    // if (dif < 0) {
    //     resultPar.innerText = `The result is a negative value ${dif}`;
    // }
    // else {
    //     resultPar.innerHTML = `The diffrence of two numbers is <strong>${dif}</strong>`
    // }

    dif < 0 ? resultPar.innerText = `The result is a negative value ${dif}` : resultPar.innerHTML = `The diffrence of two numbers is <strong>${dif}</strong>`

    // resultPar.innerHTML = `The diffrence of two numbers is <strong>${dif}</strong>`
    input01.value = '';
    input02.value = '';
});

mulBtn.addEventListener('click', function() {
    let mul = parseInt(input01.value) * parseInt(input02.value); 

    resultPar.innerHTML = `The multiplication of the two numbers is <strong>${mul}</strong>`;
    input01.value = '';
    input02.value = '';
});

divBtn.addEventListener('click', function() {
    let div = parseInt(input01.value) / parseInt(input02.value); 

    resultPar.innerHTML = `The division of the two numbers is <strong>${div}</strong>`;
    input01.value = '';
    input02.value = '';
});

powBtn.addEventListener('click', function() {
    let pow = Math.pow(parseInt(input01.value), parseInt(input02.value)); 

    resultPar.innerHTML = `The number ${input01.value} on the power of ${input02.value} is ${pow}`;
    input01.value = '';
    input02.value = '';
});


// exercise 2

let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let ageInput = document.querySelector('#age');
let addBtn = document.querySelector('#addBtn');

let resultList = document.getElementById('resultList');

let students = [];

function Student(firstN, lastN, age) {
    this.firstName = firstN;
    this.lastName = lastN;
    this.age = age;
}

function showStudent(studentArr, list) {
    list.innerHTML = '';

    for (let student of studentArr) {
        list.innerHTML += `
        <li>
            First Name: ${student.firstName}
            Last Name: ${student.lastName}
            Age: ${student.age}
        </li>`
    }
}


addBtn.addEventListener('click', function() {
    let name = firstName.value;
    let surname = lastName.value;
    let age = ageInput.value

    let newStudent = new Student(name, surname, age);
    students.push(newStudent);

    showStudent(students, resultList);

    firstName.value = '';
    lastName.value = '';
    ageInput.value = '';
})



