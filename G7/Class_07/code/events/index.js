// EVENT PROGPAGATION

let parentDiv = document.getElementById("parentDiv");
let childDiv = document.getElementById("childDiv");


// **** Event Bubbling **** //

// parentDiv.addEventListener("click", function(){
//   alert("Parent div was clicked");
// },false)


// childDiv.addEventListener("click", function(){
//   alert("Child div was clicked");
// }, false)


// **** Event Capturing **** //
// parentDiv.addEventListener("click", function(){
//   alert("Parent div was clicked");
// }, true)


// childDiv.addEventListener("click", function(){
//   alert("Child div was clicked");
// }, true)


// How we prevent event flow behaveur

// if we do not provide value for the 3rd parameter
// it is false by default =)
parentDiv.addEventListener("click", function(){
  alert("Parent div was clicked");
})


childDiv.addEventListener("click", function(event){
  event.stopPropagation() // it will prevent the child element to raise the event of the parent

  alert("Child div was clicked");
})


// PREVENT DEFAULT

let youtubeRedirect = document.getElementsByTagName("a");

console.log(youtubeRedirect)

// our <a> element  
youtubeRedirect[0].addEventListener("click", function(event){
  // WILL PREVENT THE DEFAULT BEHAVEUR OF THE ELEMENT SELECTED
  /*
   we have prevented the <a> element not TO REDIRECT US
   on clicking
   */
  event.preventDefault()

  // my custom logic to redirect

  // window.location = "https://www.youtube.com/"

})