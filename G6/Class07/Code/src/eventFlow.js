// ===== Event flow =====
// it is the order in which the event is triggered on the DOM nodes

let parent = document.getElementById("parent");
let child = document.getElementById("child");

// Bubbling oOOoo OOo Oo
// child.addEventListener("click", function() {
//     console.log("Child clicked");
// })

// parent.addEventListener('click', function() {
//     console.log("Parent clicked too");
// })

// document.addEventListener('click', function() {
//     console.log("Document clicked too");
// })

// Capturing o o o o o o ⍩⃝
child.addEventListener("click", function() {
    console.log("Child clicked");
})

parent.addEventListener('click', function() {
    console.log("Parent clicked");
}, true)

document.addEventListener('click', function() {
    console.log("Document clicked");
}, true)

window.addEventListener('click', function(){
    console.log("Window clicked.");
}, true)

// Removing an event listener
let myDiv = document.getElementById("myDiv");

function setRedColorToDiv(event) {
    event.target.style.backgroundColor = 'red';
}

myDiv.addEventListener('mousemove', setRedColorToDiv);
myDiv.removeEventListener('mousemove', setRedColorToDiv);

// How are events processed
// If an event happens while this code below is still being executed, the code that that event triggered will be
// executed after the code below finishes (and after all code that could be written below, that doesn't
// depend on anything to be executed, like the code in the event listeners depends on the event actually happening.);
for (let index = 0; index < 100000; index++) {
    console.log(index);
}