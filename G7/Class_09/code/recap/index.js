let headings = document.getElementsByTagName("h1");
let colorPicker = document.getElementById("colorPicker");
let myHeading = headings[0];

console.log(colorPicker)
colorPicker.addEventListener("change", function(event){
  // event.target returns us the input that
  // triggered the EVENT

  console.log(event.target.value)
  myHeading.style.color = event.target.value
})

// INCREMENT & DECREMENT EXERCISE
let buttons = document.getElementsByTagName("button")

let incrementBtn = buttons[0]
let decrementBtn = buttons[1]
let numberToIncrement = headings[1];

let ourNumber = 0
numberToIncrement.innerText = ourNumber

function incrementOrDecrementNumber(number, option){

  if(option === "increment"){
    return number + 1
  }else {
    return number - 1
  }
}

incrementBtn.addEventListener("click", function(){
  let resultOfOperation = incrementOrDecrementNumber(ourNumber, "increment")
  ourNumber += 1
  numberToIncrement.innerText = resultOfOperation
})

decrementBtn.addEventListener("click", function(){
  let resultOfOperation = incrementOrDecrementNumber(ourNumber)
  ourNumber -= 1
  numberToIncrement.innerText = resultOfOperation
})

// Song library exercise

// Step #1 with document.getElementById we select the neccesery
// elements from our html
let songName = document.getElementById("songName")
let songAuthor = document.getElementById("songAuthor")
let songGenre = document.getElementById("songGenre")
let addSongBtn = document.getElementById("addSongBtn")
let printSongLibraryContainer = document.getElementById("printSongLibraryContainer")

// Step #2 we create empty array so later we will store
// (Song) objects inside of this array
let songLibraryList = [];

// Step #3 we create a Song function constructor, so this is JS means like fabric for songs.
// and each time we create a song out of this construcor (out of this fabric)
// and the created we will store in the array above (songLibraryList)
function Song(nameOfSong, authorOfSong, genreOfSong){
  this.song = nameOfSong;
  this.author = authorOfSong;
  this.genre = genreOfSong;

  this.songInfo = function(){
    return `Song name is: ${this.song} and singer is ${this.author}`
  }
}

// Step #4 on the selected button previously (addSongBtn), we attach event listener
// so our button is LISTENING when that event occurs, and when the event occurs,
// it is going to trigger the functionallity inside the body of the eventListener

addSongBtn.addEventListener("click", function(event){
  //Step #5 we use preventDefault, to prevent the default behaveour of the button
  // so we prevent the form to be submited, when the button is clicked
  event.preventDefault()

  // Step #6 we create a new song object out of the constructor Song
  // we create a new song of the fabric Song ;)
  let songCreated = new Song(songName.value, songAuthor.value, songGenre.value);

  // Step #7 we store the song created in the list songLibraryList
  songLibraryList.push(songCreated)
  
  // Step #8 we call the function to print our songs, in the div previously selected
  printSongLibrary(printSongLibraryContainer, songLibraryList)

  // Step #9 we clear the values of the inputs, only for better UX =)
  songName.value = ""
  songAuthor.value = ""
  songGenre.value = ""
})



// Step #10 this function accepts 2 params. An element to print in, and the array of songs
function printSongLibrary(elementToPrintIn, songsLibrary){
  console.log('List of all songs', songsLibrary)
  // Step #11 we clear the element that we would like to print in
  // so we do not have multiplied data
  elementToPrintIn.innerHTML = ""

  // Step #12 we create an unordered list from JS
  let myUnorderedList = document.createElement("ul");
  // Step #13 we add/append the created list inside the element to print it
  elementToPrintIn.appendChild(myUnorderedList)

  // Step #14 we iterate through the array of songs objects and print them
  for(let index = 0; index < songsLibrary.length; index++){
    console.log(songsLibrary[index]) // this is the object of the current iteration
    let songOfCurrentIteration = songsLibrary[index]
    // Step #15 on the unordered list we add 3 list items
    // each list item has the property of the song object of the current iteration 
    myUnorderedList.innerHTML += 
    `
    <hr />
    <li>Song name: ${songOfCurrentIteration.song} </li>
    <li>Song author: ${songOfCurrentIteration.author} </li>
    <li>Song genre: ${songOfCurrentIteration.genre} </li>

    `
  }

}