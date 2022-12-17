let inputs = document.getElementById("userInputs").children;
let submitBtn = document.getElementById("submit");
let resultPar = document.getElementById("result");

function getUserInfo (inputElements) {
    let result = "User: ";
    for(let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered."
    return result
}

submitBtn.addEventListener("click", function() {
    resultPar.innerText = getUserInfo(inputs)
})