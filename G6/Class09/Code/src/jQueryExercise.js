$(document).ready(function(){

let inputs = $(".input-form");
let resultHeader = $("#result");
let button = $("button").first();

function calculateAverage(num1, num2, num3){
    let average = (num1 + num2 + num3)/3;
    return average;
}

button.click(function(){
    let firstNumber = parseInt(inputs.first().val());
    let secondNumber = parseInt(inputs.eq(1).val());
    let thirdNumber = parseInt(inputs.last().val());

    let average = calculateAverage(firstNumber, secondNumber, thirdNumber);
    resultHeader.text(average);

    if(average >= 10){
        resultHeader.css("color", "green");
    }
    else{
        resultHeader.css("color", "red");
    }
})
})