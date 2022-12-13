function digitsInNumber(num){
    console.log(`Digits in number: ${num}`);

    while(num > 0){
        let digit = num%10; //last digit in num

        console.log(digit);
        num = parseInt(num/10); //we move from right to left in num
    }
}

digitsInNumber(234);
digitsInNumber(7578582);
digitsInNumber(999);