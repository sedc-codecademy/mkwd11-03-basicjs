var a = prompt("Enter side a");
var b = prompt("Enter side b");

console.log(a);
console.log(typeof(a));

var parsedA = parseInt(a);
var parsedB = parseInt(b);
var area = parsedA*parsedB;

console.log("The area is: "+ area);