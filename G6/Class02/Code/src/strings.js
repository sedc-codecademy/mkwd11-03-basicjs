var helloGreeting = "Hello";
var academy = 'SEDC';

console.log("Hello"+" "+"SEDC"); //concatenation

var greeting = helloGreeting + " " + academy; //concatenation of strings
console.log(greeting);
console.log(typeof(greeting));

var num = 20;
var message = "test";
var result = num + message; //20 + "test" -> concatenation, one of the operands is string
console.log("result: ");
console.log(result);

var secondResult = num + num + message; //left to right
console.log(secondResult);

var firstNum = 10;
var secondNum = "25";
var thirdResult = firstNum + secondNum; //concatenation because "25" is string
console.log(thirdResult);

console.log(2+" "+5);// -> "2 "+5

//Interpolation
var academyName = "SEDC";
var sentence = `Jana is a student of ${academyName}`; //string
console.log("sentence:");
console.log(sentence);

var firstName = "Marko";
var age = 25;
var text = `${firstName} is ${age} years old.`;
console.log(text);

//Quotes
var secondMessage = "It's really nice to be a web developer";
console.log(secondMessage);

var thirdMessage = 'It is "nice" to be a programmer';
console.log(thirdMessage);

var anotherMessage = "It's really \"nice\" to be a programmer "; //escape of double quote
console.log(anotherMessage);

var a; //undefined
var b = null;
//....
b = 10;