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

console.log("===Parent====");
let firstParagraph = paragraphs[0];
let parentOfFirstParagraph = firstParagraph.parentElement;
console.log(parentOfFirstParagraph);

console.log("====Content=====");
let thirdParagraph = paragraphs[2];
console.log(`Third paragraph's text: ${thirdParagraph.innerText}`);
thirdParagraph.innerText = thirdParagraph.innerText + " New text!!!";

let mainDiv = document.getElementById("main");
let mainDivHtml = mainDiv.innerHTML;
console.log("mainDiv html:");
console.log(mainDivHtml);

mainDiv.innerHTML = mainDiv.innerHTML + "<h2>New header!</h2>";

console.log(mainDiv.innerHTML);

// let a = 5;
// let b = a;

// a = 7;

let secondParagraph = paragraphs[1];
secondParagraph.innerHTML = "<span>This is a span!</span>";

//create empty span element
let spanElement = document.createElement("span");
//add text to the span
spanElement.innerText = "Dynamic span!";
//add class
spanElement.setAttribute("class", "ourDynamicSpan");

secondParagraph.appendChild(spanElement);

//bodyElements is a collection (array)!!!!!!
let bodyElements = document.getElementsByTagName("body");
console.log(bodyElements);
let bodyElem = bodyElements[0];
//bodyElem.appendChild .........










