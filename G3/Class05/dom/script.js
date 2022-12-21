// access by id
let ourHeader = document.getElementById("myTitle");
// console.log(ourHeader);

console.log("====Access by class=====");
let ourParagraphs = document.getElementsByClassName("myParagraph");
// console.log(ourParagraphs);
// console.log(ourParagraphs[0]);

console.log("====Access by tag=====");
let ourParagraphs1 = document.getElementsByClassName("second");
// console.log(ourParagraphs1);

let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs);

let texts = document.getElementsByTagName("text");
// console.log(texts);


console.log("====Access by css selectors=====");
let firstParagaph = document.querySelector('p');
let allParagraphs = document.querySelectorAll("p");
// console.log(firstParagaph);
// console.log(allParagraphs);

let firstParagraphByClass = document.querySelector(".myParagraph");
let allParagraphByClass = document.querySelectorAll(".myParagraph");
// console.log(firstParagraphByClass);
// console.log(allParagraphByClass);

let firstHeaderById = document.querySelector("#myTitle");
let allHeadersById = document.querySelectorAll("#myTitle");
// console.log(firstHeaderById);
// console.log(allHeadersById);

console.log("===Siblings====");
let myParagraph = document.getElementsByClassName("myParagraph");
let firstElement = myParagraph[0];
let nextSibling = firstElement.nextElementSibling;
// console.log(nextSibling);
let prevSibling = firstElement.previousElementSibling;
// console.log(prevSibling);


// finding parent node

let para1 = document.querySelector('.myParagraph');
let parentElement = para1.parentElement;
// console.log(parentElement);

let allChildren = parentElement.children;
// console.log(allChildren);

let firstChildElement = parentElement.firstElementChild;
let lastChildElement = parentElement.lastElementChild;

// console.log(firstChildElement);
// console.log(lastChildElement);

let h1Element = document.getElementById('myTitle');
// get text value
let textInH1 = h1Element.textContent;
console.log(textInH1);
// chnge text content
h1Element.innerText = "We changed the text of this element";
// h1Element.innerText = "<h1>Yeeeeee</h1>";

// h1Element.innerText = h1Element.innerText + "Something else"

let mainDiv = document.getElementById("main");

mainDiv.innerHTML = "<h2>Yeee we added a new element</h2>";



let elementParagraph = document.querySelector('.second');
elementParagraph.style.color = 'yellow';
// elementParagraph.style.display = 'none';
elementParagraph.style.backgroundColor = 'blue';