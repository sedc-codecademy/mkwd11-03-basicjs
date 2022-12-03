var result = 2 / "test";
console.log(result); //NaN

console.log("Type of result:");
console.log(typeof(result)); //number

var res1 = result == NaN;
console.log(res1); //false

var res2 = result === NaN;
console.log(res2); //false

var res = isNaN(result); // if result is not a number
console.log(res);

var text = "test";
var resultText = isNaN(text);
console.log(resultText); //true

console.log("Number.isNan");
var firstNanCheck = Number.isNaN(result); //is result something
//that is not a number, but of type number
console.log(firstNanCheck);
var secondNanCheck = Number.isNaN(text); //false
console.log(secondNanCheck);

//isNaN - check if variable is not a number, but can be string, boolean etc.
//Number.isNaN - check if variable is not a number, but is of type number, typical NaN

var c = Infinity;
var d = -Infinity;

var divideWithZero = 5 / 0; //Infinity
console.log(typeof(c));