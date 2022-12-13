console.log("CONNECTED");

/*
  * Create a function that will accept a number as parameter, and
    for each number we will print which is even which is odd.
  
  1. Create a function names printEvenOrOddNumbers; => DONE;
  2. The function should accept a parameter that will be number; => DONE;
  3. We should iterate to the provided number, and print all the following numbers; => DONE;
  4. We should check if the number is even/odd on each iteration; => DONE
  5. If a number is odd/even, add to a string the following msg in format: "number is EVEN/ODD"; => DONE
  6. After the iteration return the message from the function and print it somewhere; => DONE
*/



/*
   1 is odd;
   2 is even;
   3 is odd;
   4 is even;
*/

// step #1                       step #2
function printEvenOrOddNumbers( inputNumber ){

  let myFinalMsg = "";

  // step #3
  for(let i = 1; i <= inputNumber; i++){
    //this code here will be executed on EACH iteration

    // let myMsg = "" => this variable will be declared and initialized on EACH iteration, we do not want that;
    //  step #4
    if( i % 2 === 0 ){
      // step #5
      myFinalMsg += `${i} is even\n`
    }else {
      // step #5
      myFinalMsg += `${i} is odd\n`
    }
  }

  // step #6
  
  return myFinalMsg

}


let userInputNumber = parseFloat(prompt("Hey man enter a number")); 
// Number(value_here) is same as parseFloat(value_here)
let numbersOutput = printEvenOrOddNumbers(userInputNumber)

console.log(numbersOutput)

console.log("---- For Of Loop ----");

let todoList = ["1. Walk the dog", "2. Wash the dishes", "3. Learn Javascript"];

for (let todo of todoList){
  console.log(todo)
}

console.log("EXERCISE 2 RECAP")
/*  

  Print all the movies of the given array

  1. Write a function with name: printMovieNames => DONE
  2. Write a parametar that will be array of strings: ["Movie name 1", "Movie name 2"] => DONE
  3. Check if the parametar (array of movies) is not empty, if it is, show the user error message => DONE
  4. Iterate through the array and print all the movies => DONE
  5. Concatinate to a string each movie name => DONE
  5.5. Return the concatanated movie names => DONE
  6. Print the final message result
*/

                          // array of elements (array of movie names)
function printMovieNames(movieNames){

  let movieNamesConcatinated = "";

  // there are no elements in the array
  if(movieNames.length === 0){
    return "Please provide values in the array";
  }
  else {
                    // 0 < 5
    for(let i = 0; i < movieNames.length; i++){
      movieNamesConcatinated += `${i + 1}. ${movieNames[i]}\n`
    }
    return movieNamesConcatinated
  }


}
let movies = ["John Wick", "Fantastic Beasts", "Before the rain"]
console.log(movies)
console.log(movies[0]) // give me the element of the array movies on index 0
let moviesPrinted = printMovieNames(movies)

console.log(moviesPrinted)
document.write(moviesPrinted)

let noMoviesProvided = printMovieNames([])
console.log(noMoviesProvided)