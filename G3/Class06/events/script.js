function countRabbits() {
    for(let i = 1; i <= 3; i++) {
        alert("Rabbit number " + i);
    }
}

function changeColor() {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.style.backgroundColor = 'red';
}

function changeColor2() {
    let mainDiv = document.getElementById('mainDiv');
    mainDiv.style.backgroundColor = 'yellow';
}


let element = document.getElementById('btnHello');

// element.onclick = function() {
//     alert("Hello world!");
// }

function sayHello() {
    alert("Hello world!");
}
// element.onclick = sayHello;

// element.onmouseover = function() {
//     element.style.backgroundColor = 'blue';
// }

// function iWon() {
//     alert("I Won");
// }
// element.onclick = iWon;

// element.onclick = iWon(); // not valid it will call the function at  start


// let element1 = document.getElementById('username');
// // element1.addEventListener('blur', greetingFunc);

// function greetingFunc() {
//     let greeting = `Hello ${element1.value}`;
//     alert(greeting);
// }

// element1.addEventListener('keyup', function(event) {
//     console.log(event);
//     // console.log(event.target)
//     let pTag = document.getElementById('text');
//     pTag.innerText = event.target.value;
// });

// function test(event) {
//     console.log(event);
// }

// element1.addEventListener('click', test);


// let redDiv = document.getElementById('redDiv');
// function setColorToDiv(event) {
//     console.log(event);
//     event.target.style.backgroundColor = 'red';
// }

// redDiv.addEventListener('mousemove', setColorToDiv);
// redDiv.removeEventListener('click', function() {
//     console.log("removed")
// });

// let myBtn = document.getElementById('myBtn');

// function clearEvent() {
//     alert("Btn was clicked and removed the event");
// }

// myBtn.addEventListener('click', clearEvent)
// myBtn.addEventListener('click', function() {
//     console.log("Second func");
// });
// myBtn.addEventListener('click', function() {
//     console.log("third func");
// });

// myBtn.removeEventListener('click', clearEvent);


// let usernameElement = document.getElementById('username');
// let messageElement = document.getElementById('feedback');

// function checkUsername(minLength) {
//     if(usernameElement.value.length < minLength) {
//         messageElement.innerText = `Username mist be ${minLength} characters or more`;
//     } else {
//         messageElement.innerHTML = '';
//     }
// }

// usernameElement.addEventListener('blur', function() {
//     checkUsername(5);
// });


// let input = document.getElementById('name');

// document.getElementById('btn').addEventListener('click', function() {
//     console.log(`Somebody entered the name: ${input.value}`);
//     input.value = '';
// });