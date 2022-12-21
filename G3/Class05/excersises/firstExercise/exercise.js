// select first div
let firsDiv = document.getElementById("first");
console.log(firsDiv);

// Select all paragraphs
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

// Select the last div
let lastDiv = document.querySelector('body').lastElementChild.previousElementSibling;
console.log(lastDiv);

// Select the header 3 in the last div
let header3iInLastDiv = document.querySelector('h3');
let header3iInLastDiv2 = lastDiv.querySelector('h3');
let header3iInLastDiv3 = lastDiv.lastElementChild;

// Select the header 1 in the last div
let header1iInLastDiv = lastDiv.querySelector('h1');

// Get the text from the first paragraph in the second div
let paragraphSecondText = document.getElementsByClassName('second')[0].innerText;

// Add the word "text" to the text element in the second div
document.querySelector('text').innerText += " text!";

// Change the text of the header 1 in the last div
header1iInLastDiv.innerText = "Change the text";

// Change the text of the header 3 in the last div
header3iInLastDiv2.innerText = "Change text 2";
