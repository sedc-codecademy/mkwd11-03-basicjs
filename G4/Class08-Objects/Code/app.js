console.log("it works");

const student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  knowledge: 25,
  isSignedUp: true,
  classes: ["basic html", "basic js", "advanced js"],
  study: function () {
    this.knowledge += 5;
  },
  studyHarder: function () {
    this.knowledge += 20;
  },
  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

// Acessing methods in an object
student.studyHarder();
student.studyHarder();
student.printFullName();

// using dot notation
console.log("Dot Notation");
console.log(student.isSignedUp);
console.log(student.age);
console.log(student.knowledge);

// using bracket notation
console.log("Bracket Notation");
console.log(student["isSignedUp"]);
console.log(student["age"]);
console.log(student["knowledge"]);

// Dont do this
// student["studyHarder"]();

// Avoid deleting properties
// delete student.knowledge;

// Use this instead
student.knowledge = 0;

// Updating object properties
student.firstName = "Bojan";
student.lastName = "Bojanovski";

// Adding properties and methods to objects

student.country = "Macedonia";
student.city = "Strumica";

student.dontStudy = function () {
  this.knowledge -= 5;
};

student.dontStudy();
student.dontStudy();
student.dontStudy();
student.dontStudy();

console.log(student);

// Constructor function that create instances of specific objects
function Person(name, yearOfBirth, job) {
  // if it doesn't have this then it's argument
  // if it does have this then it's an object property

  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge = function () {
    const currentYear = new Date().getFullYear();

    console.log(`${this.name} is ${currentYear - yearOfBirth} years old`);
  };
}

const jack = new Person("Jack", 1984, "programmer");
const jane = new Person("Jane", 1993, "lawyer");
const bob = new Person("Bob", 1902, "soldier");

console.log(jack);
console.log(jane);
console.log(bob);

jack.calculateAge();
jane.calculateAge();
bob.calculateAge();

// This and all it's variants

function windowSize() {
  console.log(this);

  //Function that returns the width and height of the global browser window object
  const width = this.innerWidth;
  const height = this.innerHeight;
  console.log(width, height);
}

const square = {
  //   innerHeight: 150,
  innerWidth: 150,
};

square.windowSize = windowSize;

// Called in global context or outside of any object
console.log("Calling in global context");
windowSize();

// Called as method of an object
console.log("Calling as object method");
square.windowSize();
