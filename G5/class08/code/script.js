console.log('Test');

// ------------ Objects --------------

// --------- Literal Notation ----------

let firstName = 'Radmila';

let pane = {
    firstName: 'Panche',
    lastName: 'Manaskov',
    age: 30,
    job: 'developer',
    canSing: false,

    saySomething: function(text) {
        return `${this.firstName} says ${text}`;
    }
}

console.log(pane);
    
// access a property in a object

console.log(pane.firstName);
console.log(pane.age);

let saysText = pane.saySomething('JS is really strange');
console.log(saysText);

// changing value of a property
pane.job = 'software developer';
console.log(pane.job);

// adding new property
pane.hobby = 'books';
console.log(pane.hobby);
console.log(pane);

let radmila = {};
console.log(radmila);

radmila.firstName = 'Radmila';
console.log(radmila);
console.log(radmila.firstName);

// ------------- Dot Notation -------------

let dog = new Object();
console.log(dog);

dog.name = 'Max';
dog.breed = 'husky';
dog.bark = function() {
    return 'Woof Woof'
}

console.log(dog);
console.log(dog.breed);
console.log(dog.bark());

// accessing property with ['propertyName']
console.log(dog['name']);

delete dog.breed;
console.log(dog);

// ------------ Constructor Notation --------------

function Dog(nameFromUser, breedFromUser, age, isLazyFromUser) {
    this.name = nameFromUser;
    this.breed = breedFromUser;
    this.age = age;
    this.isLazy = isLazyFromUser;

    this.bark = function() {
        return 'WOOF WOOF WOOF';
    }
}

let myDog = new Dog('Sparky', 'spic', 7, true);
console.log(myDog);

let vasilisDog = new Dog('Angie', 'retriver-dzuki', 4, true);
console.log(vasilisDog);

let newDog = new Dog('Rex', 'dzuki', null, false);
delete newDog.breed;
delete newDog.age;

newDog.name = 'Jeki';

console.log(newDog)

// let sparky = {
//     name: 'Sparky',
//     breed: 'spic',
//     age: 7,
//     isLazy: true
// }

console.log('--------Exercise 4 ---------');

function Car(model, color, year, fuel, fuelConsumption) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;

    this.calculateDistance = function(inputDisnce) {
        let fuelWeNeed = inputDisnce * (this.fuelConsumption / 100);

        // if(fuelWeNeed > fuel) {
        //     return 'Sorry, you dont have enough fuel'
        // }
        // else {
        //     return 'Yay, you have enough fuel';
        // }
        return fuelWeNeed > fuel ? 'Sorry, you dont have enough fuel' : 'Yay, you have enough fuel'
    }
}

let car1 = new Car('Toyota', 'red', 2022, 50, 7.5);

console.log(car1.calculateDistance(1000));


