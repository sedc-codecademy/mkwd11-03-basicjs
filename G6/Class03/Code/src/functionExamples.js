console.log("====PARAMETERS======")

function greeting(firstName, lastName){
    console.log(`Hello and welcome ${firstName} ${lastName}`);
}

greeting("Tanja", "Stojanovska"); //firstName = Tanja, lastName = Stojanovska
greeting("Jana", "Simjanovska"); //firstName = Jana, lastName = Simjanovska

function increaseByTen(num){
 console.log(num+10);
}

increaseByTen(5); //num = 5;

var firstNumber = parseInt(prompt("Enter a number"));
increaseByTen(firstNumber); //num = firstNumber

increaseByTen(parseInt(prompt("Enter a number")));

console.log("========RETURN========");
function sum(x, y){
    var result = x + y;
    return result;
}

console.log("Result 1:");
var firstResult = sum(5, 2);
console.log(firstResult);

var anotherResult = sum(10, 6);
if(anotherResult % 2 == 0){
    console.log("Even result");
}
else{
    console.log("Odd result");
}

sum(1,1); //we lose the result
//we can save it or use it like this: console.log(sum(1,1));, var a = sum(1,1);

function greet(){
    var firstName = "Ana";
    return `Hello ${firstName}`; //stops execution

    console.log(firstName);
}

var message = greet();
console.log(message);