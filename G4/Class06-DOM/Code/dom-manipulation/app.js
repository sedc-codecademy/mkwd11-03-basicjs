console.log("this is working");

// Selecing an element using id
const mainHeadingEl = document.getElementById("mainTitle");

console.log(mainHeadingEl);
console.log(mainHeadingEl.textContent);

// Selecting elements by class

// const paragraphs = document.getElementsByClassName("paragraph");

// console.log(paragraphs);
// console.log(
//   "This is the first paragraph in the HTML Elements array",
//   paragraphs[0]
// );

// const paragraphsSecond = document.getElementsByClassName("second");

// console.log(paragraphsSecond);

// Selecting elements by tag name and adding them to a variable for later use\
// *Very rarely used because it is too generic and working with large arrays of elements is complicated
// const paragraphs = document.getElementsByTagName("p");
// const texts = document.getElementsByTagName("text");
// console.log(paragraphs); // Will give us an array with 2 paragraphs
// console.log(paragraphs[0]); // Will give us the first paragraph
// console.log(texts); // Will give us an array with 1 text
// console.log(texts[0]); // Will give us the only text

// Query Selector - Modern and used almost exclusively in modern development

const secondParagraphEl = document.querySelector(".second");

const paragraphs = document.querySelectorAll(".paragraph");

const firstDivEl = document.querySelector("div");

const allContainerEl = document.querySelectorAll(".container");

console.log(secondParagraphEl);
console.log(paragraphs);
console.log(firstDivEl);
console.log(allContainerEl);

// Changing text content of an element

console.log(mainHeadingEl.textContent);
console.log(mainHeadingEl.innerText);

mainHeadingEl.textContent = "This is now updated";
mainHeadingEl.textContent = "";
mainHeadingEl.textContent = "Now the heading is back";

mainHeadingEl.innerText = "Changed again";
mainHeadingEl.innerText += ", and again";

// Changing inner html of an element

const mainDivEl = document.querySelector("#mainDiv");

console.log(mainDivEl);

// Removes all inner html
// mainDivEl.innerHTML = ""

mainDivEl.innerHTML += `<p>This is added from javascript</p>
<p>And also this is added from javascript</p>
<ul class="main-list" >
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
    <li>List item 4</li>
</ul>
`;

const mainListEl = document.querySelector(".main-list");

console.log(mainListEl);
