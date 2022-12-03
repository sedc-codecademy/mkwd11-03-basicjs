var a = prompt("Enter side a"); //a is of type string
console.log(a);
console.log(typeof(a));

var b = prompt("Enter side b:");
console.log(b);
console.log(typeof(b));

var sideA = parseInt(a); //sideA is of type number
var sideB = parseInt(b); 

var area = sideA * sideB;
console.log(area);