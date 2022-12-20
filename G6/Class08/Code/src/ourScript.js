$(document).ready(function(){

let allElements = $("*");
console.log(allElements);
console.log(allElements[0]);

//select by id
let mainTitleHeader = $("#mainTitle");
console.log(mainTitleHeader);

//by class
let innerWrapperDivs = $(".innerWrapper");
console.log(innerWrapperDivs);

//by tag
let paragraphs = $("p");
console.log(paragraphs);

//get all elements that satisfy at least one of the css selectors
let multipleSelectorsElements = $("#mainTitle, .innerWrapper, .wrapper");
console.log(multipleSelectorsElements);

let firstParagraph = $("p:first");//get first p
let lastParagraph = $("p:last"); //get the last p

console.log(firstParagraph);
console.log(lastParagraph);

let firstChildren = $("h3:first-child"); //get all h3 elems, that are first child of their parents
console.log(firstChildren);

let lastChildren = $("p:last-child"); //get all p elems, that are last child of their parents

let secondChildrenParagraphs = $("p:nth-child(2)"); //all p that are second child of the parent
console.log(secondChildrenParagraphs);

//DOM elements vs Jquery elements
let firstParagraphDOM = paragraphs[0]; //DOM element
console.log(firstParagraphDOM);
console.log(firstParagraphDOM.innerText);

let firstParagraphJquery = paragraphs.first(); //JQuery element
console.log(firstParagraphJquery);
console.log(firstParagraphJquery.text()); //get the text

//firstParagraphDOM.innerText = "New text for first paragraph!";
firstParagraphJquery.text("New text for first paragraph!"); //set the text

let lastParagraphJquery = paragraphs.last();
let siblingParagraphJquery = lastParagraphJquery.prev(); //find the previous sibling
console.log(siblingParagraphJquery.text());
let anotherWayLastParagraph = paragraphs.last().prev();

let nextSiblingText = $("#thirdTitle").next().text();
console.log(nextSiblingText);
$("#thirdTitle").next().text("We changed the text of the previous sibling of third title");

let inputElement = $("input[value='Cool']"); 
console.log(inputElement.val());

inputElement.val("Enter something cool!");

console.log(innerWrapperDivs.first().html()); //html() -> innerHtml in Vanilla JS
innerWrapperDivs.first().html("<span>New span</span>");

//TOGGLE
paragraphs.last().hide(); //display property
paragraphs.last().show(); 

//CSS
paragraphs.last().css("color", "red");
paragraphs.last().css("background-color", "yellow");

//
paragraphs.last().after("<h2>This is a next header!</h2>");
paragraphs.last().before("<h2>This is a previous header!</h2>");
});