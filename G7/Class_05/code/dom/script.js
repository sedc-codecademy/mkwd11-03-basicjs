console.log("Connected");

// console.log(document)

// DOM SELECTORS;

console.log("--- ID SELECTOR ---");
// ID SELECTOR; => Will select the element with the given id
let myTitle = document.getElementById("myTitle");
console.log(myTitle);

// Since we do have the element selected
// we can access it's properties as .innerText
console.log(myTitle.innerText);

console.log("--- CLASS SELECTOR ---");

// Will return you a collection/array of the elements =)
let paragraphs = document.getElementsByClassName("myParagraph");
console.log(paragraphs);

let firstParag = paragraphs[0];
console.log(firstParag);

console.log("--- TAG SELECTOR ---");
// Will return you a collection/array of the elements =)
let myDivs = document.getElementsByTagName("div");
console.log(myDivs);

console.log("--- QUERY SELECTORS ---");

let paragraphsByQuery = document.querySelectorAll("p");
console.log(paragraphsByQuery);


// with this approach/syntax will select you the first element
// that has that class
let firstParagWithQuery = document.querySelector(".myParagraph");
console.log(firstParagWithQuery)

// select element with id #main
let myMainDiv = document.querySelector("#main");
console.log(myMainDiv)


console.log("--- FAMILY DOM SELECTION ---");

let singleParag = paragraphs[0]
console.log(singleParag)

let siblingParag = singleParag.nextElementSibling
console.log(siblingParag)
console.log(siblingParag.innerText)

let evenNextParagSibling = siblingParag.nextElementSibling
console.log(evenNextParagSibling)

let mainDivChildren = myMainDiv.children
console.log(mainDivChildren)

let firstMainDivChild = myMainDiv.firstElementChild;
console.log('First main div child',firstMainDivChild)

let lastMainDivChild = myMainDiv.lastElementChild;
console.log('Last main div child', lastMainDivChild);

// DOM MANIMULATION
console.log(myTitle.innerText);

// WE CAN MANIPULATE THE TEXT NODE OF THE ELEMENT

// change value of the h1
myTitle.innerText = "Hello fellas!!"

// add more text
singleParag.innerText += "New text attached to the existing one";

// change color
singleParag.style.color = "red";


// WE CAN ADD MORE ELEMENT NODES
// with innerHTML we can manipulate with the selected elements elements' NODES

let firstName = "Bob";
let lastName = "Bobski";


//  will add new NODE elements as children to the element selected 
myMainDiv.innerHTML += `
  <h3> Welcome user to our website </h3>
  <p style="color: blue" > User's full name is ${firstName} ${lastName} </p>
`

let helloWorldDiv = document.getElementById("welcomeMsg");

helloWorldDiv.innerHTML = ""