class Person {
	constructor(firstName, lastName, age) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._age = age;
		this._cars = [];
	}
	addCar(car) {
		this._cars.push(car);
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

const person1 = new Person("Chuck", "Norris", 80);
person1.addCar(car1);
person1.addCar(car2);

console.log(person1);
