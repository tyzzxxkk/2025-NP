const character = { name: "맹구" };

console.log(character.name);
console.log(character["name"]);
const Name = "name";
console.log(character[Name]);

const person = {};
const person2 = { job: "teacher" };

person.job = "teacher";
console.log(person.job);

person.job = "student";
console.log(person.job);

delete person.job;
console.log(person.job);

function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

Car.prototype.age = function(currentYear) {
    return currentYear - this.year;
}

const myCar = new Car("Hyundai", 2020);
console.log(myCar.age(2025)); 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return (`Hi, I'm ${this.name}`);
    }
}

const p1 = new Person("기태연");
console.log(p1.greet()); 

