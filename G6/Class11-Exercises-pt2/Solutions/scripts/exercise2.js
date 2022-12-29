function getNumberStats(inputNumber){
    //best check is with typeof
    if(isNaN(inputNumber)){
        console.log(`${inputNumber} is not a number`);
        return;
    }
    console.log(`${inputNumber} has ${getNumberOfDigits(inputNumber)} digits`);

    if(inputNumber>0){
        console.log(`${inputNumber} is positive.`);
    }
    else if( inputNumber < 0){
        console.log(`${inputNumber} is negative.`);
    }
    else{
        console.log(`${inputNumber} is zero.`);
    }

    if(inputNumber%2==0){
        console.log(`${inputNumber} is even.`);
    }
    else{
        console.log(`${inputNumber} is odd.`);
    }
}

function getNumberOfDigits(inputNumber){
   
    if(inputNumber == 0){
        return 1;
    }
    let counter = 0;
    while(inputNumber!=0){
        counter++;
        inputNumber=parseInt(inputNumber/10);
    }
    return counter;
}

getNumberStats(10);
getNumberStats(-123);
getNumberStats("sedc");
