let hotel = {
    name: "Quay",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],

    checkAvailability: function() {
        return this.rooms - this.booked;
    }
};

let name = hotel.name;
let hasGym = hotel['gym'];
let availableRooms = hotel.checkAvailability();
// console.log(name);
// console.log(hasGym);
// console.log(availableRooms);

let hotel1 = new Object();
hotel1.name = 'Quay';
hotel1.rooms = 40;
hotel1.booked = 25;
hotel1['gym'] = true;

hotel1.checkAvailability = function() {
    return this.rooms - this.booked;
}

// console.log(hotel1);

hotel1.name = 'Park';

delete hotel1.name;
delete hotel1['gym'];

// console.log(hotel1);




// COnstructor function

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}


// let hotel2 = new Hotel('Hilton', 120, 20);
// console.log(hotel2);
// let hotel3 = new Hotel('Holiday inn', 100, 5);
// console.log(hotel3);
// let hotel4 = new Hotel('Palace', 500, 100);
// console.log(hotel4);



function getWIndowSize() {
    let width = this.innerWidth;
    let height = this.innerHeight;
    console.log(this);
    return [height, width];
}

// console.log(getWIndowSize());

let shape = {
    width: 600,
    height: 400,
    getArea: function() {
        console.log(this);
        return this.width * this.height;
    }
}

// console.log(shape.getArea());



let width = 600;
let shape1 = {
    width: 300
}

function showWidth() {
    console.log(this);
    console.log(this.width);
}

shape1.showWidth = showWidth;

showWidth(); //global
shape1.showWidth(); // from shape object