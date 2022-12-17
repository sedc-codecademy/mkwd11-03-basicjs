let cityExample = ["Gevgelija", 1480, 15000, 3]
console.log(cityExample[0])

let cityName = "Skopje";
let cityZip = 1480;

let city = {
  // the key:value pair is separeted by => : it's not EQUALS =
  numberOfHotelCasinos: 3,
  name: "Gevgelija",
  zip: 1480,
  doesItHaveSwimmingPool: false,
  hotelCasinosNames: ["Flamingo", "Paint it Black", "Princess"],

  cityName: function(){
    // if we want to acess a property of the very same object
    // inside our method we should use the keyword this.propertyName
    return this.name
  }

}

console.log(city)

console.log("City name is: ", city.name)
console.log(city.zip)
console.log(city.hotelCasinosNames[1])
console.log("calling the method we created", city.cityName())

console.log("---- LITERAL NOTATION ----");


let car = {
  carColor: "white",
  carModel: "Lada Niva",
  fuelConsumption: 10
}


console.log("Car Literal Object: ", car)
// DOT NOTATION
console.log(car.carModel)
// KEY NOTATION
console.log('Car color is:', car["carColor"])




console.log("---- CONSTUCTOR NOTATION ----");
let hotel = new Object()
console.log(hotel)

hotel.name = "Paint it Black"
console.log(hotel)

hotel.hasGym = true;
console.log(hotel)

hotel.hotelName = function(){
  return this.name
}
console.log(hotel)

console.log('Hotel name is:', hotel.name)
console.log('Hotel name with function:', hotel.hotelName())


// Empty LITERAL OBJECT
let secondCar = {}
console.log(secondCar)
// Adding props to it
secondCar.name = "Fiat"
secondCar.model = "Punto"
console.log(secondCar)
console.log("Car model is:", secondCar.model)
secondCar["yearOfProduction"] = 1995
console.log(secondCar)


let thirdCar = {
  model: "Ford",
  yearOfProduction: 2020
}
console.log(thirdCar)

// Replace/Overwrite already existing properties to an object
thirdCar.model = "Mercedes"
console.log(thirdCar)

// Removing a property of an object
delete thirdCar.yearOfProduction
console.log("After deleting a prop.", thirdCar)


let trainer = { 
	name:  "Stefan",
	lastName: "Stefanovski",
	academy: "SEDC",
	lecture: "Objects",
}

delete trainer.lecture

trainer.age = 27

trainer.getFullName = function(){
  return` ${this.name} ${this.lastName}`
}

console.log(trainer)

console.log(trainer.getFullName())


console.log("---- FUNCTION CONSTRUCTOR ----")

// THIS IS OUR FABRIC OF PERSON
function Person(firstName, lastName, birthYear, job){
  this.firstName = firstName
  this.lastName = lastName
  this.birthYear = birthYear
  this.job = job

  this.sayHello = function(name){
    return `${this.firstName} says hello to ${name} =)`
  }
}

// we have created a new object out of the PERSON FABRIC/ Function constructor
// we have created a NEW INSTANCE OUR OF THE PERSON FUNCTION CONSTRUCOTOR
let personOne = new Person("Bob","Bobski", 1995, "JS Developer")

console.log(personOne)
console.log(personOne.sayHello("Foo"))

// a new instance(object) our of Person
let personTwo = new Person("John", "Doe", 2000, "Mechanic")
console.log(personTwo)