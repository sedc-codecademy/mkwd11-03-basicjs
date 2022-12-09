console.log("CONNECTED");

// let monday = "Monday";
// let tuesday = "Tusday";
// let wednesday = "Wednesday";

// .length is a property to the string too
// it refers to how many characters are in the string
// including the empty space
console.log("Hello World".length);

let emptyArray = [];
console.log(emptyArray);

//an array of strings
// **** IMPORTANT: Arrays in JS are 0 (zero) indexed.

                    //index:0 . //index:1 . //index:2 . //index:3 . //index:4 . //index:5 . //index:6
let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thusrday", "Friday", "Saturday", "Sunday"];

console.log(daysOfTheWeek);


// **** IMPORTANT: .length property returns the number of elements that are in the array
console.log(`There are ${daysOfTheWeek.length} elements in the array named: daysOfTheWeek`);


let mixedArray = ["Hello world", false, 25, true, null, "George", 20 + 10 ];

console.log("Mixed array: ", mixedArray);

console.log("---- Accessing elements in the array ----");

// to access an element in the array we can use their index
// nameOftheArray[indexOfElement]
console.log(daysOfTheWeek[0])
console.log(daysOfTheWeek[1])
console.log(daysOfTheWeek[5])
console.log(daysOfTheWeek[6])

console.log("---- Accessing last element in the array ----");
let lengthOfDaysOfWeekArray = daysOfTheWeek.length // 7
let lastElementOfDaysArray = daysOfTheWeek[lengthOfDaysOfWeekArray - 1] // Sunday

let oneMoreApproach = daysOfTheWeek[daysOfTheWeek.length - 1] // Sunday
console.log(oneMoreApproach)
console.log(`Better way to get the last element of the array: `, lastElementOfDaysArray);

console.log("---- Add new elements to an array ----");

let ourBasket = ["Bread", "Bananas", "Coffee"];
console.log(ourBasket);

          // on index 3 // Add the value "Table water" on index of 3
ourBasket[ourBasket.length] = "Table water";
console.log(ourBasket);

console.log("---- PUSH => Add element/elements on the ending of the array ----");

let todoList = ["Walk the dog", "Read an article", "Do the homework", "Learn JS"];
console.log("OUR TODO LIST:", todoList);

// it will add a value at the ending of the array
todoList.push("Watch a movie");
console.log(todoList);

todoList.push("Listen a song", "Play a game");
console.log(todoList);
// is going to overwrite the value on index 2
// todoList[2] = "Something";
// console.log(todoList);

// Simulate adding an item on index of 2 and storing the previous at the ending
let valueToBeSaved = todoList[2];
todoList[2] = "Something";
todoList.push(valueToBeSaved);
console.log(todoList);

console.log("---- UNSHIFT => Add element/elements on the beggining of the array ----");

// add element at the beginning of the array
todoList.unshift("Call a friend");
console.log(todoList)

// add elements at the beginning of the array
todoList.unshift("Visit grandparents", "Buy a bread");
console.log(todoList)

console.log("---- POP => REMOVE element on the ending of the array ----");
// it will remove the last element of the array
// but (optional) we can store it in a variable so we can see the element removed
let lastElementOfTheArray = todoList.pop();
console.log('last element removed value',lastElementOfTheArray); // Do the homework
console.log(todoList);

todoList.pop()
console.log(todoList);


console.log("---- SHIFT => REMOVE element on the beggining of the array ----");
// it will remove first element
// if stored (optinal) in variable we have the value on the element removed
let firstElementRemoved =  todoList.shift()
console.log("first element removed value: ", firstElementRemoved)
console.log(todoList);