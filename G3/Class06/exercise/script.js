let inputs = document.getElementById('userInputs').children;
let result = document.getElementById('result');

function getUserInfo(inputElements) {
    let result = "User: ";
    for(let input of inputElements) {
        result += input.value + " ";
    }
    result += "is registered";
    return result;
}

document.getElementById('submit').addEventListener('click', function() {
    result.innerText = getUserInfo(inputs);
});