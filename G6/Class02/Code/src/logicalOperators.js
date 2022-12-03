//AND
console.log("=======AND=======")
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//OR
console.log("========OR======")
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//NEGATION
console.log("========NEGATION======")
console.log(!true); //false
console.log(!false); //true

var comp1 = 5 > 4; //true
var comp2 = 3!=3; //false
console.log("========COMPARISONS======")
var result = comp1 && comp2; //true && false -> false
console.log(result); 

// == - > compare by value if they are same
// === -> compare by value and TYPE if they are same
// != -> compare by value if they are different
// !== -> compare by value and TYPE if they are different

var comp3 = 5 !== "6"; // true
console.log(comp3);

var expression = comp1 || comp2 || comp3; //true || false || true
console.log(expression);

var secondExpression = (5 < 2) || (2 == 3); //false || false -> false

var negationResult = !"Cat"; //negation of truthy value returns false
console.log(negationResult);

var secondNegation = !0; //true
console.log(secondNegation);

console.log("====comparison of strings====");
console.log("abc" < "cbd"); //alphabetical comparison, a is infront of c
console.log("4" < "12"); //alphabetical comparison

//alphabetical comparison -> strings
//numbers are infront of letters 0-9, a-z A-Z

var firstNum = 12;
var secondNum = "4";

//when we compare number and string, js tries to parse string
console.log(firstNum < secondNum); //12 < "4" -> 12 < 4 -> false