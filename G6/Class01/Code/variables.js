//Numbers
var num = 7; 
console.log(num);
console.log("Type of num:");
console.log(typeof(num));

//Strings
var firstName = "Ana";
console.log(firstName);
console.log("Type of firstName:");
console.log(typeof(firstName));

var numericString = "24"; //this is a string because we use quotes
console.log(numericString);
console.log("Type of numericString:");
console.log(typeof(numericString));

var message = 'Hello SEDC!'; //string, with single quotes
console.log(message);
console.log("Type of message:");
console.log(typeof(message));

var character = "a";
console.log(character);
console.log("Type of character:");
console.log(typeof(character));

//Booleans
var bool = true; // var bool = false;
console.log("======Booleans=========");
console.log(bool);
console.log("Type of bool:");
console.log(typeof(bool));

//a variable can change value and type
message = 8;
console.log("======Message=========");
console.log(message);
console.log("Type of message:");
console.log(typeof(message));

//get the value from a numeric string
var value = parseInt(numericString); //"24", extract the number from the string
console.log("======Parsed=========");
console.log(value);
console.log("Type of value:");
console.log(typeof(value));

/*
Comment 
in
multiple lines
*/

var n; //undefined
console.log("======Undefined=========");
console.log(n);
console.log("Type of n:");
console.log(typeof(n));

var username = null;
console.log("======Null=========");
console.log(username);
console.log("Type of username:");
console.log(typeof(username));

//.......

username = "sedc@seavus.com";
console.log(username);
console.log("Type of username:");
console.log(typeof(username));

var newLineString = "This is first line. \n This is second line";
console.log(newLineString);