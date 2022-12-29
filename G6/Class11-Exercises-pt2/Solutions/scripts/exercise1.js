function cleanFalsyValues(inputArray){
    let result = [];
    for(let item of inputArray){
        if(!!item){
            result.push(item);
        }
    }
    return result;
}

console.log(cleanFalsyValues([2, 5, ['a', 'b', 'c'], "sedc"]));
console.log(cleanFalsyValues([2, NaN , 7, ['a', 'b', 'c'], null, "sedc", 0]));

//1. !5 -> false
//!!5 -> !false -> true
//if(item) == if(!!item)