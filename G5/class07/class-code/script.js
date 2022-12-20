console.log('Test');

// ------------ HTML Event Handlers --------

function hello() {
    alert('HELLO!');
}

// ------- Traditional DOM Event Handlers --------

// let myBtn = document.getElementById('myDiv').lastElementChild;
// let myBtn = document.getElementsByTagName('button')[1];
let myBtn = document.getElementById('clickBtn');

console.log(myBtn);

function saySomething() {
    alert('Hello G5!')
}

// WRONG! - dont call the function immidiatly!!!
// myBtn.onclick = saySomething();

myBtn.onclick = saySomething;
// console.log(saySomething);

myBtn.onclick = function() {
    console.log('Hello G5!');
}


// ------------- Event Listeners -------------

// Getting values from input

let input = myBtn.previousElementSibling;
let greetBtn = document.getElementById('greetBtn');

function greetSomeone() {
    let name = input.value;
    console.log(input);
    console.log(input.value);
    console.log(`Hello ${name}`);
    hiNewStudent();
    input.value = '';
}

function hiNewStudent() {
    console.log('Hi new Student');
}


greetBtn.addEventListener('click', greetSomeone, false);
// greetBtn.addEventListener('click', hiNewStudent, false);

// ---- dynamic input ---- 

let dynamicInput = document.getElementById('dynamic-input');

dynamicInput.addEventListener('keyup', function(event) {
    let inputValue = event.target.value;
    console.log(event);
    console.log(inputValue);
});

// using parameters with event handlers

function sumOfNumbers(num1, num2) {
    console.log(num1 + num2)
    return num1 + num2;
}

let sumBtn = document.getElementById('sumBtn');
// sumBtn.addEventListener('click', sumOfNumbers(2, 5), false);

sumBtn.addEventListener('click', function() {
    sumOfNumbers(2, 5);
});

// Exercise 3

let fname = document.getElementById('firstname');
let lname = document.getElementById('lastname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let regBtn = document.getElementById('register');
let showUser = document.getElementById('showUser');


function getUserInfo(firstName, lastName, email, password) {
    let passDots = '';

    for(let i = 0; i < password.length; i++) {
        passDots += '*'
    }

    return `First Name: ${firstName} 
    Last Name: ${lastName} 
    Email: ${email}
    Password: ${passDots}`
}

regBtn.addEventListener('click', function() {
    showUser.innerText = '';

    let inputFirstName = fname.value;
    let inputLastName = lname.value;
    let inputEmail = email.value;
    let inputPassword = password.value;

    let userInfo = getUserInfo(inputFirstName, inputLastName, inputEmail, inputPassword);

    fname.value = '';
    lname.value = '';
    email.value = '';
    password.value = '';


    showUser.innerText = userInfo;
})

