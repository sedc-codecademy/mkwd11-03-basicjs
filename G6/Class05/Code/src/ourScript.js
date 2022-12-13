console.log("===by id====");
let ourHeader = document.getElementById("myTitle");
console.log(ourHeader);
console.log(`Our header's text: ${ourHeader.innerText}`);

console.log("===by class====");
let ourParagraphs = document.getElementsByClassName("myParagraph");
console.log(ourParagraphs.length);
console.log(ourParagraphs[0]);

console.log("===by tag====");
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);
console.log(paragraphs[0]);


console.log("===by css selectors====");
let firstMyDiv = document.querySelector(".myDiv"); //returns first element with class myDiv
console.log(firstMyDiv);
let ourDivs = document.querySelectorAll(".myDiv");
console.log(ourDivs.length);
console.log(ourDivs[0]);

console.log("====Siblings=====");
let headers = document.getElementsByTagName("h1");
let header = document.getElementsByTagName("h1")[0]; //headers[0]
let nextSibling = header.nextElementSibling;
console.log(nextSibling);
let previousSibling = header.previousElementSibling;
console.log(previousSibling);

console.log("====Children===");
let parent = document.getElementById("main");
let children = document.getElementById("main").children; //parent.children
console.log(children);
console.log(children.length);



