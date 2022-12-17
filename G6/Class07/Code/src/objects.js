// Create an object with literal notation
let hotel = {
    name: "Alexander Palace",
    rooms: 100,
    bookedRooms: 65,
    roomTypes: ['twin', 'double', 'suite'],
    gym: true,
    checkAvailability: function() {
        return this.rooms - this.bookedRooms;
    }
}

console.log("Hotel name:");
console.log(hotel.name);
console.log("Is there a gym at the hotel?");
// console.log(hotel.gym);
console.log(hotel["gym"]);
console.log("Types of room");
for (const roomType of hotel.roomTypes) {
    console.log(`*${roomType}`);
}
console.log("Available rooms:");
console.log(hotel.checkAvailability());

// Exercise 1
let person = {
    firstName: "Blazo",
    lastName: "Blazovski",
    age: 26,
    company: "Vero",
    canCode: false
}

console.log(`Can ${person.firstName} code? ${person.canCode}.`);

// Creating an object with the object constructor notation
let newObj = new Object();
console.log(newObj);

newObj.newProperty = "new property"
console.log(newObj.newProperty);

newObj.newMethod = function() {
    console.log("I am an object method");
}

newObj.newProperty = "I am new value."

console.log(newObj.newProperty);

newObj.newMethod();

// Deleting a property
console.log("Deleting a property");
delete newObj.newProperty
console.log(newObj);

let anotherEmptyObj = {}; // We can also create an empty object with the literal notation
console.log(anotherEmptyObj);

// Exercise 2 
person.firstName = "Pero";
person.lastName = "Perovski";
person.age = 40;
person.company = "SEDC";
person.canCode = true;

console.log(person.firstName);
console.log(person.canCode);

// Exercise 3
let trainer = { 
	name :  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects"
}

delete trainer.lecture;
trainer.age = 30;
trainer.getFullName = function() {
    return `${trainer.name} ${trainer.lastName}`
}

console.log(trainer.lecture);
console.log(trainer.getFullName());


// Creating an object with a constructor function
function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    
    this.checkAvailability = function () {
        return this.rooms - this.booked
    }
}

let hotelArka = new Hotel('Arka', 200, 150);
console.log(hotelArka.name);
console.log(hotelArka.rooms);
console.log(hotelArka.checkAvailability());

// The 'this' keyword
function windowSize() { 
	let width = this.innerWidth; 
	let height = this.innerHeight; 
	return [height, width]; 
}

console.log(windowSize());

let rectangle = {
	width: 600,
	height: 400,
	getArea: function(){
		return this.width * this.height;
	}
};

console.log(rectangle.getArea());

let shape = {
    innerWidth: 300
//  showWidth : function () {
//      console.log(this.innerWidth)
//  }
}

function showWidth() {
    console.log(this.innerWidth);
}

shape.showWidth = showWidth; // This is same as if we had the commented code in the shape object
shape.showWidth();

showWidth(); // "this" refers to the window object here, and the window object has a property innerWidth, so that is the value that is read

// Exercise 4
let car = {
    brand: "Opel",
    model: "Astra",
    color: "silver",
    year: 2013,
    tankCapacity: 50,
    fuelInTank: 40,
    fuelConsumption: 7,
    hasEnoughFuelForSpecifiedDistance: function(distance) {
        let fuelNeeded = distance * (this.fuelConsumption/100);
        if(this.fuelInTank > fuelNeeded) {
            console.log("Shibaj!");
        } else {
            console.log("Nemas dovolno benzin za cel pat :(");
        }
    }
}

car.hasEnoughFuelForSpecifiedDistance(100);
car.hasEnoughFuelForSpecifiedDistance(1000);
