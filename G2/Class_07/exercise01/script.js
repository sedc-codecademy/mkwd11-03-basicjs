console.log('hello g2');


let student = {
    name: 'Pero',
    lastName: "Perovski",
    age: 31,
    profession: `Kopac na bunari`,
    isSick: false,

    kopanjeBunari: function () {
        console.log('Kop kop kop');
    }
}
console.log(student.name);
console.log(student.lastName);
student.kopanjeBunari();





class Student {
    constructor() {
        this.name = 'Ivan';
        this.lastName = 'Jamandilovski';
        this.drinksBeer = true;
    }
}

let student1 = new Student();
console.log(student1);


student1.name;
student1.lastName;

let student2 = new Student();


class Car {
    constructor(name, color, horsepower, fuelCapacity, currentFuel) {
        this.imeNaKola = name;
        this.bojaNaKola = color;
        this.konjskiSili = horsepower;
        this.kapacitetNaGorivo = fuelCapacity;
        this.momenatlnoGorivo = currentFuel;
        this.noiseSound;

        this.innerWidth = 'sirinata na kolata';

    }

    makeNoise() {
        this.noiseSound = 'brm brm brm';
        console.log(this.noiseSound);
    }

    openTrunk() {
        console.log('trunk is opened');

        this.bojaNaKola
    };

    loadFuel() {
        this.momenatlnoGorivo = this.kapacitetNaGorivo;
    }
};

let beenve = new Car('BMW', 'crvena', 240, 80, 20);
let mercedes = new Car('Mercedes', 'siva', 130, 100, 80);
let skoda = new Car('Skoda', "zelena", 54, 50, 10);

// console.log(beenve);
// console.log(mercedes);
console.log(skoda);

skoda.loadFuel();


skoda.makeNoise();
console.log(skoda);


function windowSize() {
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [width, height];
}
skoda.windowSize = windowSize;

console.log(windowSize())
console.log(skoda.windowSize());

this.console.log();








class Horse {
    constructor(color, height, weight, age) {
        this.boja = color;
        this.visina = height;
        this.tezina = weight;
        this.vozrast = age;
    }
    makeSound(sound) {
        console.log(`The horse made this sound: ${sound}`);
    }
    checkStatus() {
        console.log(`The ${this.boja} horse that is ${this.visina} high, and weighs ${this.tezina}`)
    }
}
let konj1 = new Horse('red', 180, 250, 10);
let konj2 = new Horse('blue', 159, 300, 20);
konj1.makeSound('tgt tgt tgt');
konj2.makeSound('zgzp zgzp zgzp');
konj1.checkStatus();
konj2.checkStatus();


























