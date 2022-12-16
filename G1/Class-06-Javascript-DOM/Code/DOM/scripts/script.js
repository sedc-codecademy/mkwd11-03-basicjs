// SELECT BY ID
let myHeader = document.getElementById("myTitle");
console.log(myHeader);
console.log(myHeader.innerText);
console.log(myHeader.outerText);
console.log((myHeader.innerHTML += "<span>utre odam Bitola</span>"));
console.log((myHeader.outerHTML += "<span>utre odam Bitola</span>"));

console.log("====================================================");

// SELECT BY CLASS
let paragraphsByClass = document.getElementsByClassName("myParagraph");
let secondParagraph = document.getElementsByClassName("second");

console.log(paragraphsByClass);
console.log(paragraphsByClass[0]);
console.log(paragraphsByClass[1]);
console.log(secondParagraph);
console.log(secondParagraph[0]);

console.log("====================================================");

// SELECT BY TAG NAME
let paragraphsByTag = document.getElementsByTagName("p");
let texts = document.getElementsByTagName("text");

console.log(paragraphsByTag);
console.log(paragraphsByTag[1]);
console.log(texts);
console.log(texts[0]);

console.log("====================================================");

// SELECT BY QUERY SELECTORS

// Selects all elements with the same tag or class
console.log("WITH querySelectorAll !!!");
let queryAllParagraphs = document.querySelectorAll("p");
let allElementsWithClass = document.querySelectorAll(".myParagraph");
console.log(queryAllParagraphs[0].innerHTML);
console.log(queryAllParagraphs[1].innerHTML);
console.log(queryAllParagraphs[0].textContent);
console.log(queryAllParagraphs[0].innerText);
console.log(allElementsWithClass[1].innerHTML);

console.log("====================================================");

// Selects first element of many by tag or class or id
console.log("WITH querySelector !!!");
let myTitle = document.querySelector("#myTitle");
console.log(myTitle.outerHTML);

let firstParagraph = document.querySelector(".myParagraph");
console.log(firstParagraph.outerHTML);

// SELECT BY SIBLINGS
let myParagraph = document.getElementsByClassName("myParagraph")[0];
let siblingNext = myParagraph.nextElementSibling;
let siblingPrev = myParagraph.previousElementSibling;
console.log(siblingNext.outerHTML);
console.log(siblingPrev.outerHTML);

console.log("====================================================");

// SELECT CHILDREN
let parentDiv = myParagraph.parentElement;
let divChildren = parentDiv.children;
let divFirstChild = parentDiv.firstElementChild;
let divLastChild = parentDiv.lastElementChild;

console.log(parentDiv.outerHTML);
console.log(divChildren[2].outerHTML);
console.log(divFirstChild.outerHTML);
console.log(divLastChild.outerHTML);

console.log("====================================================");

let exampleWithWhiteSpace = document.getElementById("myTitle");
console.log(exampleWithWhiteSpace.textContent); //with white space
console.log(exampleWithWhiteSpace.innerText); //with no white space

console.log("====================================================");

let container = document.getElementById("newDiv");
let titleInDiv = container.querySelector("#title");
let paragraphOne = container.children[1];
let paragraphTwo = container.children[2];
let paragraphThree = container.children[3];

titleInDiv.innerText += " from Bojancho";
paragraphOne.innerText = "I changed this paragraph !!!";
paragraphTwo.innerText += " I ADDED SOME TEXT IN THE END";
paragraphThree.innerText = "Next up is the innerHTML things !";

container.innerHTML += `<div id="innerDiv">
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
</div>`;

let innerDiv = document.getElementById("innerDiv");
innerDiv.innerHTML += `<p>This is out of the div</p>`;
innerDiv.outerHTML += `<p>This is out of the div</p>`;

let myList = document.getElementById("myList");

let names = ["Bojan", "Ivan", "Tosho"];

myList.innerHTML = "";

for (let name of names) {
  myList.innerHTML += `<li>${name}</li>`;
}
