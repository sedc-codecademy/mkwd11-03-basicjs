function findSumOfSalaries(inputArray){
    let sum = 0;
    for(let person of inputArray){
        sum+= person.salary;
    }
    return sum;
}

let people = [{fullName:"Petko Petkovski", job:"doctor", salary: 2000}, {fullName:"Ana Markovska", job:"teacher", salary: 1500}];
console.log(`The sum of  salaries is ${findSumOfSalaries(people)}`);