### For

```js
// For loop that counts
let countingNumber = 10;
for(let i = 1; i <= countingNumber; i++){
    console.log(i);
}

// For loop, going through an array 
let names = ["Bob", "Jill", "Greg"];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// For loop, going through a string
let name = "Bob Bobsky";
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}
```

### For Of

```js
// For of loop, going through an array 
let names = ["Bob", "Jill", "Greg"];
for(let name of names){
    console.log(name);
}

// For of loop, going through a string
let name = "Bob Bobsky";
for(let letter of name){
    console.log(letter);
}
```

### Examples with loops

```js
// Using break to cancel a loop from looping
// break works in any loop
let names = ["Bob", "Jill", " ", "Greg"];
for(let name of names){
    if(name === " ") {
        console.log("Empty names are not allowed. Loop stopped!");
        break;
    }
    console.log(name);
}

// Using continue to cancel an iteration of a loop
// continue works in any loop
let names = ["Bob", "Jill", " ", "Greg"];
for(let name of names){
    if(name === " ") {
        console.log("Empty names are skipped. Loop continues!");
        continue;
    }
    console.log(name);
}

// Using return from a function to stop a loop along with the whole function
let names = ["Bob", "Jill", "Greg"];
function findItemInArray(array, itemToFind){
    for(let item of array){
        console.log(`Checking item: ${item}`);
        if(item === itemToFind) {
            return "Item is found"; // This will exit of the function and with that, not continue with the loop
        }
    }
    return "Item is not found"; // If the loop finished, it means that the return in the loop was never executed and with that, we can conclude that it never found the item
}
console.log(findItemInArray(names, "Jill"));

// Using a loop that loops from back to front
let names = ["Bob", "Jill", "Greg"];
for(let i = names.length; i >= 0; i--){
    console.log(names[i]);
}

// Loop inside of another loop
let arrayOfArrays = [[1, "Bob"], [2, "jill"], [9, "Greg"]];
for(let i = 0; i < arrayOfArrays.length; i++){
    console.log(`Array no. ${i} is being processed...`);
    array = arrayOfArrays[i];
    for(let j = 0; j < array.length; j++ ){
        console.log(`Info about person: ${array[j]}`)
    }
}
```

# DOM Manipulation 🤞

## Document

```js
// The representation of the whole HTML file is in the document object
console.log(document);

// Using document to find the title of the page
console.log(document.title);

// Using document to find the current URL
console.log(document.URL);

// Using document to forcea reload on the page from JavaScript
document.location.reload();
```

## Selectors

```html
<h1 class="header"> Welcome to our paper company </h1>
<div id="services">
    <h2 class="header"> These are our services: </h2>
    <ul id="services-list">
        <li>Selling paper</li>
        <li>Calling to ask if you need paper</li>
        <li>Shipping paper</li>
    </ul>
</div>
```

```js
// Selecting an element by id
let servicesElement = document.getElementById("services");

// Selecting elements by class
let headers = document.getElementsByClassName("header");

// Selecting specific header from the items that have header class
let firstHeader = headers[0]; // The first
let secondHeader = headers[1]; // The second

// Selecting an element by tag
let listItems = document.getElementsByTagName("li");

// Selecting an element parent 
let parentOfHeader = secondHeader.parentElement;

// Selecting child elements
let servicesList = document.getElementById("services-list");
let childElements = serviceList.children;

// Selecting one item with querySelector
let servicesListQuery = document.querySelector("#services-list");

// Selecting multiple items with querySelectorAll
let allHeaders = document.querySelectorAll(".header");

// Selecting sibling elements
let headerNextSibling = firstHeader.nextElementSibling;
let headerPreviousSibling = firstHeader.previousElementSibling; // Will return null since it wont find any siblings that are before the header
```
