console.log("connected");

// we have a plain object
let trainerOne = {
  trainerName: "Bob",
  trainerLastName: "Bobski"
}
console.log(trainerOne)
console.log(trainerOne.trainerName)
console.log(typeof trainerOne)


console.log("---- JSON STRINGIFY ----")

// JSON.stringify converts OBJECT into stringified JSON
let stringifiedTrainerOne = JSON.stringify(trainerOne);
console.log(stringifiedTrainerOne)
console.log(typeof stringifiedTrainerOne)
console.log(stringifiedTrainerOne.trainerName)

console.log("---- JSON PARSE ----")

let personTwo = {
  firstName: "Adam",
  lastName: "Adams"
}

let stringifiedPersonTwo = JSON.stringify(personTwo)
console.log(stringifiedPersonTwo);

// JSON.parse converts stringified JSON into object
let parsedStringifiedPersonTwo = JSON.parse(stringifiedPersonTwo)
console.log(parsedStringifiedPersonTwo)

//console.log(JSON.stringify("hello world")) // this will cause WRONG JSON FORMAT


// https://swapi.dev/api/people

console.log("---- AJAX CALLS ----")

// JQUERY SYNTAX 
// let myBtn = $("#myBtn");

// myBtn.click(function(){
//   // do not mistake $.ajax() from jquery
//   // with AJAX calls

//   $.ajax({ 
//     url: "https://swapi.dev/api/people",
    
//     success: function(response){
//       console.log("Request has succeded")
//       console.log(response) //whole response
//       console.log(response.results) // just a property from the response

//       console.log(response.results[0].name)
//       // here I can call a function that prints elements 
//     },
//     error: function(error){
//       console.log("Error occured", error)
//     }

//   })
// })

// FETCH

let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function (){
  fetch("https://swapi.dev/api/people")
  .then(function(response){
    console.log(response)

    return response.text()
  })
  .then(function(result){
    /** the result argument
     * is the value RETURNED from the first .then
     */

    // console.log(result)

    let parsedResult = JSON.parse(result)
    console.log(parsedResult)
    // you can create a function that will print from array
    // and call it here
  })
})