
//1. write a function that will reverse a number, ex:
//reverseNumber(321) //returns 123

//2. write a function that returns how many letters of a string 
//is located in a single word or a sentence, ex:
//checkSentence("Javascript is very interesting", "e") 
//returns 3   since letter e is included 3 times in the sentence
//checkSentence("Lorem ipsum", "a") //returns 0   since letter 0 is included 0

//3.   Write a for loop to print numbers 1 to 100 in console.log()

//4.   Write a function that accepts 1 argument, an array of numbers, 
//and returns an object with the smallest and 
//   largest number ex:
//   smallestAndLargest([2,5,6,88,145,1,-5,543])
// returns   {smallestNumber: 2, largestNumber: 543 }

//5. connect all of the prior functions to print 
//their results in DOM elements instead of console.log()

//6. fetch and display the name and height of the 
//first three people from https://swapi.dev/api/people


//HAPPY NEW YEAR





function reverse(number) {
    let stringFromNumber = `${number}`; //ova e momentalno brojot pretvoren vo string
    let emptyString = ''; //vo ovoj string ke dodavame bukvi obratno vrteni od stringFromNumber

    for (let i = stringFromNumber.length - 1; i >= 0; i--){
        emptyString += stringFromNumber[i];
    }

    // let i = stringFromNumber.length - 1;
    // while (i >= 0) {
    //     emptyString += stringFromNumber[i];
    //     i--;
    // }
    //posle ova empty string ni e fakticki svrten stringFromNumber naopaku, peski

    return parseInt(emptyString);
}
let number = 567;
let reversedNumber = reverse(number);
console.log(reversedNumber);
console.log(reverse(234567));
