let radiusInput =document.getElementById("radius");
let myButton = document.getElementById("myButton");
let getAreaButton = document.getElementById("getArea");
let getPerimeterButton = document.getElementById("getPerimeter");
let messageParagraph = document.getElementById("message");

let circle;

myButton.addEventListener("click", function(){
    if(!radiusInput.value){
        return
    }
    circle = {
        radius:radiusInput.value,
        getArea : function (){
            const pi = 3.14;
            return this.radius*this.radius*pi;
        },
        getPerimeter: function(){
            const pi = 3.14;
            return 2*this.radius*pi;
        }
    };
    console.log(circle);
});

getAreaButton.addEventListener("click", function(){
    if(!circle || !circle.hasOwnProperty("radius")){ //check if circle is defined and has radius
        return;
    }
    messageParagraph.innerText = `The area is ${circle.getArea()}`;
});

getPerimeterButton.addEventListener("click", function(){
    if(!circle || !circle.hasOwnProperty("radius")){
        return;
    }
    messageParagraph.innerText = `The perimeter is ${circle.getPerimeter()}`;
});