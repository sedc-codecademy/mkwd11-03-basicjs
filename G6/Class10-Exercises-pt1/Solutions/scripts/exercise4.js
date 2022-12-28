function findString(inputArray, len){
    for(let item of inputArray){
        if(item.length > len){
            return item;
        }
    }
    return null;
}

console.log(findString(["sedc","javascript basic"], 10)); //javascript basic
console.log(findString([], 10)); //null 