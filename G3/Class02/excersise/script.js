

let userInput = prompt("Vnesi broj");
let parsedInput = parseInt(userInput);
if(!Number.isNaN(parsedInput)) {

    if(parsedInput > 50) {
        console.log(50);
    } else if(parsedInput > 40) {
        console.log(40);
    } else if(parsedInput > 30) {
        console.log(30)
    } else if(parsedInput > 20) {
        console.log(20)
    } else {
        console.log("Stay home");
    }

} else{
    console.log("Not a valid input");
}