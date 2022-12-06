var a = 5; //global scope

let b = 4;

function example(){
    var firstVar = 10; //belongs to the function, is known across the function

    if(true){
        let secondVar = 7; //block scope - between if brackets
        var thirdVar = 8; //function scope - between function brackets {}

        console.log("Second var:");
        console.log(secondVar);

        console.log("Third var:");
        console.log(thirdVar);
    }
        console.log("Second var:");
        //console.log(secondVar); //ERROR , secondVar is known only in the if block

        console.log("Third var:");
        console.log(thirdVar);

}

example();

//VARIABLES DECLARED IN FUNCTION, ARE KNOWN ONLY IN THE FUNCTION!
console.log(firstVar); //ERROR
console.log(secondVar);