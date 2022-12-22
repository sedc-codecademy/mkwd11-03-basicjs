console.log(window.jQuery);

// SELECTORS
console.log("---- SELECTORS ----")
// Selectors in JQUERY will always return collection of elements
let allElements = $("*")
console.log(allElements)

// id selector
let mainTitle = $("#mainTitle") //document.getElementById
console.log(mainTitle)

// class selector

let innerWrappers = $(".innerWrapper"); //document.getElementsByClassName
console.log("select by class: ", innerWrappers)

// multi select

let wrapperAndInnerWrappers = $(".wrapper, .innerWrapper")
console.log("multi select by 2 different class", wrapperAndInnerWrappers)

// first parag selection
let firstParagraph = $("p:first")
console.log("first parag:", firstParagraph)

// get by tag name
let getByTagName = $("p")
console.log(getByTagName)

console.log("---- JQUERY FUNCS. ----")

let listItems = $("li") //select by tag name
console.log("bucket list", listItems)

let firstListItem = listItems.first()
console.log(firstListItem)

let lastListItem = listItems.last()
console.log(lastListItem)

console.log("---- DOM MANIPULATION ----")

let textToHide = $("#textToHide")

textToHide.hide()
textToHide.show()

let headingToChange = $("h4")
console.log(headingToChange)

headingToChange.text("Hello World") // element.innerText = ""
headingToChange.css("color", "red")
headingToChange.css("background-color", "blue")

console.log("---- EVENT LISENERS ----")

let myButtons = $("button")
console.log(myButtons)

let myFirstButton = myButtons.eq(0)
let mySecondButton = myButtons.eq(1)

// let myFirstButton = myButtons.first()
// let mySecondButton = myButtons.last()

// 1st syntax
myFirstButton.click(function(){
  console.log("Hey I invoked the click event with jQuery syntax.")
})

// 2nd syntax
mySecondButton.on("click", function(){
  console.log("Hey I invoked the click event with second jQuery syntax.")

})