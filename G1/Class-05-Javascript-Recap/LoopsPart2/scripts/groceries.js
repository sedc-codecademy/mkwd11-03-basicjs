function printGroceries(array) {
  for (let item of array) {
    console.log(item);
  }
  console.log("====================================================");
}

function addToGroceriesList(item) {
  if (typeof item !== "string") {
    console.log("Item is not a grocery !");
    return;
  }
  groceries.push(item);
}

function findGroceryInList(input) {
  for (let item of groceries) { //loops every item in given/passed array
    if (input.toLowerCase() === item.toLowerCase()) { //check every item if it is the same with the input, make sure to make it to lower for less mistakes and validations
      console.log("We have that item in the list !"); //print the outcome/result
      return; //exit/stop the function because we did what we wanted
    }
  }
  console.log("No we don't have it !");
  return;
}

function deleteFromGroceryList(input) {
  for (let i = 0; i < groceries.length; i++) { //loop through all the items
    if (groceries[i].toLowerCase() === input.toLowerCase()) { //check every item if it is the same with the input, make sure to make it to lower for less mistakes and validations
      groceries[i] = null; //set the item you found to null
      return; //exit the function because the main thing we want to do is done
    }
  }
}

function deleteFromGroceryListWithSplice(input) {
  groceries.splice(groceries.indexOf(input), 1);
  //START FROM THE ELEMENT WITH THAT INDEX AND DELETE HOW MANY ITEMS
  //start from example: index=2 and delete 1 item !
  //returns an array 
}

function updateGroceriesListItem(input, newValue){ //this gets 2 parameters/arguments, one for findint the element, one for setting a new value to it
    for (let i = 0; i < groceries.length; i++) { //loop through all the items
        if (groceries[i].toLowerCase() === input.toLowerCase()) { //check every item if it is the same with the input, make sure to make it to lower for less mistakes and validations
          groceries[i] = newValue; //set the item you found to the new value
          return; //exit the function because the main thing we want to do is done
        }
      }
}

// Define all the functions in the beginning of the document, and then use them below where ever you like

let groceries = ["Bread", "Milk", "Butter", "Eggs", "Flour", "Juice"];

// printGroceries(groceries);
// addToGroceriesList("Pork Thigh");
// addToGroceriesList(3);
// printGroceries(groceries);
// let input = prompt("Enter item name");
// findGroceryInList(input);
// deleteFromGroceryList(input);
// printGroceries(groceries);
// updateGroceriesListItem("eggs","cigarettes");
// printGroceries(groceries);