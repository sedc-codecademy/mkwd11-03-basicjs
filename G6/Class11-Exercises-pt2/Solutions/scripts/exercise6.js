let sideAinput =document.getElementById("sideA");
let sideBinput =document.getElementById("sideB");
let myButton = document.getElementById("myButton");
let messageParagraph = document.getElementById("message");


myButton.addEventListener("click", function(){
    if(!sideAinput.value || ! sideBinput.value){ //check if we have entered both sides
        messageParagraph.innerText = "You must enter all the values";
        return;
    }
    //remove style if there is any (if we repeat the events)
    messageParagraph.style.removeProperty("color");
    messageParagraph.style.removeProperty("font-size");
    messageParagraph.innerText = `The area is: ${sideBinput.value * sideAinput.value}`;
});

messageParagraph.addEventListener("mouseover", function(){
    
    console.log(this); //target
    if(!sideAinput.value || ! sideBinput.value){
        
        this.innerText = "You must enter all the values";
        return;
    }
    this.innerText = `The perimeter is: ${sideBinput.value*2 + sideAinput.value*2}`;
    this.style.color = "red";
    this.style.fontSize ="5em";
    
});