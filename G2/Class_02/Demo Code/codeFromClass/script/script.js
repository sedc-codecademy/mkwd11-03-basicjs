// //strings
// var someString = "SEDC";
// var someOtherString = "2021";

// var concatanation = someString + " " + someOtherString;
// console.log(concatanation)

// console.log(`${someString} is the bes academy for programing`)

// var a = 1 / 0;
// console.log(a);

// //logical operators

// //LOGICAL AND
// console.log (true && true);
// console.log (true && false);
// console.log (false && true);
// console.log (false && false);

// //LOGICAL OR
// console.log (true || true);
// console.log (true || false);
// console.log (false || true);
// console.log (false || false);

// //LOCICAL NOT
// console.log (!true);
// console.log (!false);

// //operators with operands 
// var pass = 50;	//pass mark
// var score = 90; //score
// var hasPassed = score >= pass; //what is the value in hasPassed?
// console.log(hasPassed);

// var a = 40;
// var b = 30;

// var c = 20;
// var d = 10;

// var result = (a + b) > (c + d);
// console.log(result);

// var result2 =  (5 > 2) && (3 <= 3);
// console.log(result2);

//Truthy and falsy values
//Logical AND &&
// var a1 = true  && true       // t && t returns true
// console.log(a1);
// var a2 = true  && false      // t && f returns false
// console.log(a2);
// var a3 = false && true       // f && t returns false
// console.log(a3);
// var a4 = false && (3 == 4)   // f && f returns false
// console.log(a4);
// var a5 = 'Cat' && 'Dog'      // t && t returns "Dog"
// console.log(a5);
// var a6 = false && 'Cat'      // f && t returns false
// console.log(a6);
// var a7 = 'Cat' && false      // t && f returns false
// console.log(a7);
// var a8 = ''    && false      // f && f returns ""
// console.log(a8);
// var a9 = false && ''         // f && f returns false
// console.log(a9);

//Logical OR ||
// var o1 = true  || true       // t || t returns true
// console.log(o1);
// var o2 = false || true       // f || t returns true
// console.log(o2);
// var o3 = true  || false      // t || f returns true
// console.log(o3);
// var o4 = false || (3 == 4)   // f || f returns false
// console.log(o4);
// var o5 = 'Cat' || 'Dog'      // t || t returns "Cat"
// console.log(o5);
// var o6 = false || 'Cat'      // f || t returns "Cat"
// console.log(o6);
// var o7 = 'Cat' || false      // t || f returns "Cat"
// console.log(o7);
// var o8 = ''    || false      // f || f returns false
// console.log(o8);
// var o9 = false || ''         // f || f returns ""
// console.log(o9);

//Logical NOT !
// var n1 = !true               // !t returns false
// console.log(n1);
// var n2 = !false              // !f returns true
// console.log(n2);
// var n3 = !"Cat"             // !t returns false
// console.log(n3);

// var a = "43";
// var b = "44ab";
// result = b > a;
// console.log(result);


//control structure

// var score = 75;
// if (score > 100){
//     console.log("the number is higher than 100")
// }


// var points = 60;

// if(points >= 60){
//     console.log("The student has passed the exam")

// }
// else {
//     console.log("The student has failed")
// }


// var scorePoints = 30;
// var indexNumber = 5556666;


// if(scorePoints >= 91){
//     console.log("Grade A")
//     if(indexNumber === 555666 ){
//         console.log("this stuent name is Zvonko")
//     }else {
//         console.log("ne znam koj e ovoj student")
//     }
// }else if (scorePoints >= 81 && scorePoints <= 90){
//     console.log("Grade B")
// }else if (scorePoints >= 71 && scorePoints <=80){
//     console.log("Grade C")
// }else if (scorePoints >= 61 && scorePoints <=70 ){
//     console.log("Grade D")
// }else {
//     console.log(`the student has failed because he has ${scorePoints} points`)
// }

//Getting an input form user
// var input = prompt("Enter a number:");
// var numberInput = parseInt(input);
// console.log(numberInput + 10);