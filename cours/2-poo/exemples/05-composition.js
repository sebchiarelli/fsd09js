class Person {
	constructor(firstName, lastName, age, car) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._age = age;
		this._car = car;
	}
}

class Car {
	constructor(brand, model, year) {
		this._brand = brand;
		this._model = model;
		this._year = year;
	}
}

const car1 = new Car("Lada", "Niva", 1977);
const car2 = new Car("Renaud", "Super 5", 1982);

const person1 = new Person("Chuck", "Norris", 80, car1);
const person2 = new Person("Steven", "Seagal", 65, car2);

console.log(person1);
console.log(person2);
