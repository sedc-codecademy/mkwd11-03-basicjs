console.log('Test');

// Selectors

// id selector - returns one element
let myHeader = document.getElementById('myTitle');
console.log(myHeader);

// class selector - returns an array of elements
let paragraphs = document.getElementsByClassName('myParagraph');
console.log(paragraphs);

let paragraphWithOneElement =document.getElementsByClassName('second');
console.log(paragraphWithOneElement);

// console.log(paragraphs[0]);

// tag selector - returns array of elements
let tagParagraphs = document.getElementsByTagName('p');
console.log(tagParagraphs);


// query selector

let firstDiv = document.querySelector('.myDiv');
console.log(firstDiv);

let myHeaderQuery = document.querySelector('#myTitle');
console.log(myHeaderQuery);

let allParagraphsQuery = document.querySelectorAll('.myParagraph');
console.log(allParagraphsQuery);

// Traversing
console.log('------ Traversing through the DOM -----');

let child = document.querySelector('.child');
console.log(child);

let nextSibling = child.nextElementSibling;
console.log(nextSibling);

let previousSibling = nextSibling.previousElementSibling;
console.log(previousSibling);

// parent selector

let parentElement = child.parentElement;
console.log(parentElement);

console.log(parentElement.querySelector('#parent p:nth-child(2)'));

let childrenOfParent = parentElement.children;
console.log(childrenOfParent);

console.log(parentElement.firstElementChild);
console.log(parentElement.lastElementChild);

// changing content

console.log(myHeader);
console.log(myHeader.textContent);
console.log(myHeader.innerText);

myHeader.innerText = '';
myHeader.innerText = 'I am a     new        header from JS      ';
myHeader.innerText += ' G5';

console.log(myHeader.textContent);

let students = ['Nikola', 'Hristina', 'Dimitar', 'Tode', 'Petar', 'Dragisha'];

let myList = document.getElementById('list');

for (let student of students) {
    myList.innerHTML += `<li>${student}</li>`
}

myList.style.color = 'red';
myList.style.backgroundColor = 'green';
// myList.style.display = 'none';








