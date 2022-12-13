for(let num = 1;num <= 10; num++){
    console.log(num);
}

/*order of execution
for(1. ; 2. ; 4.){
    3.
}

1 2 3 4 2 3 4 2
*/

let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
for(let i = 0; i < workingDays.length; i++){
    console.log(`i: ${i}`);
    //print the member of workingDays on index i
    console.log(workingDays[i]);
}

let example = ['first','second','third','last']; 
for (let j = example.length -1; j >= 0; j--) {
    console.log(`j: ${j}`);    
	console.log(example[j]); 
}

//FOR OF
console.log("=====for of=====");
let numbers = [4, 6, 7, 8, 2];
//print the even members
for(let num of numbers){
    if(num % 2 == 0){
     console.log(num);
    }
}

//FOR IN
console.log("=====for in=====");
for(let index in numbers){
    console.log(index);
}

let mixedArray = [4, true, "test"];
for(let item of mixedArray){
   console.log(typeof(item));
   console.log(item);
}

//BREAK and CONTINUE
console.log("====break=====");

let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

for(let day of days){
    console.log(day);
    if(day == "Fri"){
        console.log("Weekend starts!");
        break;
    }
}

//[4, 6, 7, 8, 2]
for(let num of numbers){
    console.log(num);
    if(num == 6){
        console.log("We found the number 6");
        break;
    }
}

console.log("====continue=====");
//let workingDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
//print all days except Tue and Thu
for(let index = 0; index < workingDays.length; index++){
    if(workingDays[index] == "Thu" || workingDays[index] == "Tue")
     {
        continue;
     }

     console.log(workingDays[index]);
}

let index = 0;
while(index < workingDays.length){ //index < 5
    if(workingDays[index] == "Thu" || workingDays[index] == "Tue")
     {
        index++;
        continue;
     }
    console.log(workingDays[index]);
    index++;
}