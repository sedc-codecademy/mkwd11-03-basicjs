console.log('Class 10, AJAX');

let objekt = [{
    name: 'Luka',
    lastName: 'Sokolovski'
}]

let parsedToJSON = JSON.stringify(objekt);

console.log(objekt);
console.log(parsedToJSON);

let parsedObjectFromJSON = JSON.parse(parsedToJSON);

console.log(parsedObjectFromJSON);


const nameSpan = $('#fullName');
const weightSpan = $('#mass');
const heightSpan = $('#height');
const textValue = $('#textValue');
const setButton = $('#setButton');


setButton.click(() => {
    setElement(textValue.val())
})







