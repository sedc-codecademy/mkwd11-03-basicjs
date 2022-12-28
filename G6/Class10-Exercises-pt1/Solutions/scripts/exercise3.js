function divideArray(inputArray){
    if(!validateArray(inputArray)){ //if(validateArray(inputArray) == false)
        console.log("Not all members are numbers");
        return;
    }
    let evenNumbers = [];
    let oddNumbers = [];
    for(let item of inputArray){
        if(item%2==0){
            evenNumbers.push(item);
        }
        else{
            oddNumbers.push(item);
        }
    }
   return {
       oddNums: oddNumbers,
       evenNums: evenNumbers
   };

}

function validateArray(inputArray){
    for(let item of inputArray){
        if(typeof(item) != "number"){
            return false;
        }
    }
    return true;
}

console.log(divideArray([1,2, "sedc"])); //undefined
console.log(divideArray([1,2, 3, 4, 5]));