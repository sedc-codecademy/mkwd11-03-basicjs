

let myTinexBasket = ["Sunflower Oil", "Table Water", "Frozen berries", "Bread"];
console.log(myTinexBasket[0])
console.log(myTinexBasket[1])
console.log(myTinexBasket[2])
console.log(myTinexBasket[3])

// Create a function that will print in the DOM all of the products inside the basket

/*
  1. Create a function names printProductsOfBasket; => DONE
  2. This function should accept parameter which is array of products; => DONE
  3. Check if the provided parameter is not an empty array => DONE
    - If it is return error message to the user (alert or whatever) => DONE
  4. Print the products in the console ;) => DONE
  5. Print the products in the DOM => DONE
*/


let container = document.getElementById("container");



console.log("---- FROM FUNCTION ----")
function printProductsOfBasket(basketList){

  if(basketList.length === 0){
    console.log("Hey man the list is empty");
    // In this case if this statement is fullfilled
    // with the keyword return
    // we will EXIT the execution of the function
    return;
  }
  /*
    1st ITERATION => iterator is 0; is 0 < 4 => YES! 
      Then console.log the element of that iteration. and incement the iterator

    2nd ITERATION => iterator is 1; is 1 < 4 => YES!
      Then console.log the element of that iteration. and incement the iterator

    3rd ITERATION => iteration 2; is 2 < 4 => YES!
      Then console.log the element of that iteration. and incement the iterator

    4th ITERATION => iterator 3; is 3 < 4 => YES!
      Then console.log the element of that iteration. and incement the iterator
    
    5th ITERATION => iterator 4; is 4 < 4 => NO!
      Then our JS is exiting the LOOP

  */
      // let i = 0      0 < 0
  
  
  container.innerHTML = "<h1>Hello fellas</h1>"
  // container.innerHTML = "";
  
  for(let iterator = 0; iterator < basketList.length; iterator++){
    console.log(`${basketList[iterator]}`)
    
    container.innerHTML += `<li> ${basketList[iterator]} </li>`
   
  }
  
  
}

printProductsOfBasket(myTinexBasket)
printProductsOfBasket(["Bananas", "Pineapple", "Smart Watch"])
// printProductsOfBasket([])