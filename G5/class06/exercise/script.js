console.log('test');

let resultDiv = document.getElementById('result');
let input = parseInt(prompt('Please enter your weight in kg'));

function weightInChickens(weight, displayResult) {
    let result = weight / 0.5;
    if(isNaN(weight)) {
        displayResult.innerHTML = '<h3>Sorry! Wrong input, please enter a number</h3>'
    }
    else {
        displayResult.innerHTML = `<h3>Your ${weight} in KG is ${result} <img src="chicken.png" style="height:5vh"> </h3>`
    }
}

weightInChickens(input, resultDiv);