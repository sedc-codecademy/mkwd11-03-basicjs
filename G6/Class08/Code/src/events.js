$(document).ready(function(){

let button = $("button").first();

//FIRST WAY FOR EVENT LISTENERS
button.on("click", function(){
    console.log("Hello from first click event listener!");
});

//SECOND WAY
button.click(function(){

    let paragraphs = $("p");
    paragraphs.hide();
    //$(this) -> represents the target element of the event as Jquery element
    //this -> button
    $(this).text("Click me!");
    print();

})

function print(){
    console.log("Printing....");
}

});