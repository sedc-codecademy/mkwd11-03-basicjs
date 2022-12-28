let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySelect = document.getElementById("mySelect");
let messageParagraph = document.getElementById("message");

myButton.addEventListener("click", function(){
    messageParagraph.innerText ="";
    if(!myInput.value){ //check if we haven't entered a value (null, undefined, "")
        messageParagraph.innerText = "You must enter a value";
        return;
    }

    let option = document.createElement("option");
    option.setAttribute("name", myInput.value);
    option.setAttribute("value", myInput.value);
    option.innerText = myInput.value;
    mySelect.appendChild(option);
});

myInput.addEventListener("blur",function(){
    messageParagraph.innerText ="";
    if(!myInput.value){ //check if we haven't entered a value (null, undefined, "")
        messageParagraph.innerText = "You must enter a value";
        return;
    }
});