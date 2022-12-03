var a = 2;
var b = 4;

var sum = a + b;
console.log("a: ");
console.log(a);
console.log("b: ");
console.log(b);

console.log("sum: ");
console.log(sum);

console.log(a+b); //6

console.log("The total is: " + a + b + "mkd"); // The total is: 24mkd
console.log("The total is: " + sum + "mkd"); // The total is: 6mkd

var c = 8;
console.log("C before:");
console.log(c);
c--; //this changes the value of c. c = c - 1;
console.log("C after:");
console.log(c);

var result = a == b;
console.log(result);

var num = 95;
var num2 = "95";
var firstComparison = num == num2; //by value -> true
var secondComparison = num === num2; //by value and type -> false