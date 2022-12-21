//Example for objects

//just basic variables
let playerName = "Fred";
let playerScore = 10000;
let playerRank = 1;

// we access the basic variables like we access all of them
console.log(playerName, playerScore, playerRank);

// This is an object, with 3 properties, each property has a key and a value.
// The key must be unique, therefore we can declare the key "name" only once
const playerFred = {
  name: "Fred",
  score: 10000,
  rank: 1,
};

// This is how we access the properties from the object
console.log(playerFred.name, playerFred.score, playerFred.rank);

const bojan = {
  name: "Bojan",
  lastName: "Damchevski",
  age: 24,
  email: "bojan123@email.com",
  address: {
    country: "Macedonia",
    city: "Bitola",
    street: "Some street",
    streetNumber: 105,
  },
};

const ivan = {
  name: "Ivan",
  lastName: "Lazarevski",
  age: 30,
  email: "ivan123@email.com",
  address: {
    country: "Macedonia",
    city: "Skopje",
    street: "Other street",
    streetNumber: 5,
  },
};

console.log(`Full name: ${bojan.name} ${bojan.lastName}`);
console.log(`Address: ${bojan.address.street} ${bojan.address}`);

let someArr = ["hello", "bye"];

console.log(ivan.address);
console.log(ivan.address.street);
console.log(`${someArr}`);
console.log(someArr);

// Creating objects
// The literal way
const user = {
  username: "johndoe", //property with key username and value "johndoe"
  email: "johndoe@gmail.com", //property with key email and value "johndoe@gmail.com"
  premiumMembership: true, //property with key premiumMembership and value true
  latestProducts: [
    {
      id: 1,
      productName: "Mug",
      //productName: "bottle", you can not have this
      price: 3.99,
    },
    {
      id: 2,
      productName: "Water bottle",
      price: 0.99,
    },
  ], //property with key latestProducts and value array of other objects
};

console.log("=================================");

let hotel = {
  name: "Quay",
  rooms: 40,
  booked: 25,
  hasGym: true,
  roomTypes: ["twin", "double", "suite"],
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
  printSelf: function () {
    console.log(this); //the "this" keyword is the object itself, in this case it's the object {hotel} !!!
  },
};

console.log(hotel.checkAvailability());
hotel.printSelf();

hotel.name = "The boki hotel";
hotel.hasGym = false; //we can change the value of a property outside of the definition of the object
hotel.hasSauna = true; //we can add a property outside of the definition of the object
console.log(hotel);

console.log("=================================");

//Creating objects
//The constructor way
const person = new Object(); //constructor notation
console.log(person);
person.firstName = "Mihail";
person.lastName = "Kuzmanovski";
console.log(person.firstName);
console.log(person.lastName);
console.log(person);

//Constructor function
//Can be used to generate objects
// function VideoGame(inputTitle, inputGenre, inputRating) {
//   return {
//     title: inputTitle,
//     genre: inputGenre,
//     rating: inputRating,
//   };

// //   this.title = inputTitle;
// //   this.genre = inputGenre;
// //   this.rating = inputRating;
// }

// const myVideoGame = VideoGame('Witcher 3', 'RPG', 10);
// console.log(myVideoGame);

function VideoGame(inputTitle, inputGenre, inputRating) {
//   debugger;
  this.title = inputTitle;
  this.genre = inputGenre;
  this.rating = inputRating;

  // the "this" keyword references the object itself
  // the object will be of type VideoGame, more of this on the line with the fifa22 object
}

// Equivalent of the VideoGame constructor function
function videoGameCreator(
  inputTitle,
  inputGenre,
  inputRating,
  inputReleaseDate
) {
  const videoGameObject = {}; // This is created immediately when the function is called
  videoGameObject.title = inputTitle; // Equivalent of this.title = inputTitle;
  videoGameObject.genre = inputGenre; // Equivalent of this.title = inputGenre;
  videoGameObject.rating = inputRating; // Equivalent of this.title = inputRating;
  videoGameObject.releaseDate = inputReleaseDate;
  videoGameObject.calculateAge = function () {
    return 2022 - this.releaseDate;
  };

  return videoGameObject; // This is the last thing that happens after the function is executed
}

const videoGameWithOrdinaryFunction = videoGameCreator(
  "Cyberpunk 2077",
  "RPG",
  10,
  2020
);

console.log(videoGameWithOrdinaryFunction);
const gameAge = videoGameWithOrdinaryFunction.calculateAge();
console.log("gameAge", gameAge);

const fifa22 = new VideoGame("FIFA 22", "Sport/Simulator", 7); //this is an instance of an object with the variable/object name "fifa22" and is of type VideoGame, which has the properties: title, genre, rating.
console.log(fifa22);
const diablo3 = new VideoGame("Diablo 3", "Adventure/Horror", 10);
diablo3.hasDiscount = true;
diablo3.rating = 9;
console.log(diablo3);

function Trainer(inputFirstName, inputLastName, inputAcademy, inputLecture){
    this.firstName = inputFirstName; //this.property = value   ->  this is the object of type Trainer, it's the same on every line in this constructor function
    this.lastName = inputLastName;
    this.academy = inputAcademy;
    this.lecture = inputLecture;
    this.getInfo = function(){ // this.property = value which is a function with no name. That's why it's called anonymous function. And we are going to call this kind of functions METHODS !!!
        return `${this.firstName} ${this.lastName} - ${this.academy} - ${this.lecture}`;
    };
}

const sedcTrainer = new Trainer("Ivan","Lazarevski", "SEDC","JS, NodeJS, Angular, React, PostgreSQL");

const sedcTrainer2 = new Trainer("Bojan","Damchevski", "gradezen fakultet","JS, NodeJS, Angular, React, PostgreSQL");

console.log(sedcTrainer);
console.log(sedcTrainer.getInfo());

function checkTrainer(object){
    if(object.academy === "SEDC") {
        console.log("He is our guy !");
    }
    else {
        console.log("Who is that guy ?!");
    }
};

checkTrainer(sedcTrainer);
checkTrainer(sedcTrainer2);