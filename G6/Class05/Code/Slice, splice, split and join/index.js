// Some useful methods

// SLICE
// Slice returns a copy of a part of an array. With the first parameter we define the index from which we would like to start
// taking items to include in the copy (including the element on that index), and with the second one we define up until which
// we would like to include elements in the copy (not including the element on that index);
// Both parameters are optional, which means you can call the slice method like this:
// 1. someArray.slice() => will return a copy of the someArray array with all the elements;
// 2. someArray.slice(3) => will return a copy of someArray starting with the element on index 3, up until the end of someArray;
// 3. someArray.slice(3, 5) => will return a copy of someArray starting with the element on index 3, up until the element on index 5, but not
// including it (so, elements on index 3 and 4);
let weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let workingDays = weekDays.slice(0, 5);
let weekend = weekDays.slice(5);

console.log(workingDays); // => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
console.log(weekend); // => ['Sat', 'Sun']

// Slice doesn't alter the original array
console.log(weekDays); // => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// SPLICE
// The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// of the removed ones, and returns an array containing the removed elements;
let numArray= [1, 2, 3, 4, 5, 34, 33, 7, 6, 7, 8, 9];

console.log(numArray)
let removedNumsArray = numArray.splice(5, 4);
console.log(removedNumsArray) // => [34, 33, 7, 6]

// Original array after splice - Splice does alter original array;
console.log(numArray) // => [1, 2, 3, 4, 5, 7, 8, 9]

// Remove and insert with splice
let monthsArr = ["Jan", "Feb", "Feb", "Feb", "May", "Jun", "Jul"];
let removedMonthsArr = monthsArr.splice(2, 2, "Mar", "Apr");
console.log(monthsArr); // => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
console.log(removedMonthsArr); // => ['Feb', 'Feb']

// SPLIT - Transforms a string in an array (returns an array) after splitting it by using a specified separator
let stringToTransform = 'abcdefghijklmnopqrstuvwxyz';
let anotherStringToTransform = 'Blazo%20Blazovski';

let lowercaseAlphabetLettersArray = stringToTransform.split('');
console.log(lowercaseAlphabetLettersArray); // => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let nameAndSurnameArray = anotherStringToTransform.split("%20");
let firstName = nameAndSurnameArray[0];
let lastName = nameAndSurnameArray[1];

console.log(nameAndSurnameArray); // => ['Blazo', 'Blazovski']
console.log(`First name: ${firstName};`); // => First name: Blazo;
console.log(`Last name: ${lastName};`); // => Last name: Blazovski;

// JOIN - creates and returns a string from the array elements, which are joined into a string, separated by the specified string separator
// that we give it as an argument. If we omit the separator argument, the array elements are separated with a comma.
let fullNameString = nameAndSurnameArray.join(' ');
let fullNameStrSeparatedByComma = nameAndSurnameArray.join();
console.log(`Full name: ${fullNameString};`) // => Full name: Blazo Blazovski;
console.log(`Full name: ${fullNameStrSeparatedByComma};`) // => Full name: Blazo,Blazovski;


