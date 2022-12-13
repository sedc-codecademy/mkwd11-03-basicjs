let groceries = ["Milk", "Bread", "Bananas", "Chocolate"];

function printGroceries(inputArray){
    console.log("Your groceries list:");

    for(let i =0 ; i < inputArray.length; i++){
    console.log(`${i+1}. ${inputArray[i]}`);
    }
}

function findItem(inputArray, item){
    if(typeof(item) !== "string"){
        console.log("Invalid input");
        return; //stop execution
    }

    let found = false;

    for(let product of inputArray){
        if(product === item){
            
            found = true;
            break;
        }
    }
    if(found == true){
        console.log(`True!You need to buy ${item}`);
    }
    else{
        console.log(`You don't need to buy ${item}`);
    }
}

function addItemInList(inputArray, item){
    if(typeof(item) !== "string"){
        console.log("Invalid input");
        return; //stop execution
    }

    inputArray.push(item);
    console.log(inputArray);
}

function deleteItem(inputArray, item){
    //finds the index of the item in inputArray. If it doesn't find item, returns -1.
    let index = inputArray.indexOf(item);

    if(index < 0){
        console.log(`The item ${item} was not found!`);
        return;
    }

    inputArray.splice(index, 1);
    console.log(inputArray);
}

printGroceries(groceries);
findItem(groceries, "Bread");
findItem(groceries, "Juice");

addItemInList(4);
addItemInList(groceries, "Cake");

deleteItem(groceries, "Bread");