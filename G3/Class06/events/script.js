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
element.onclick = sayHello;

element.onmouseover = function() {
    element.style.backgroundColor = 'blue';
}

function iWon() {
    alert("I Won");
}
element.onclick = iWon;

// element.onclick = iWon(); // not valid it will call the function at  start