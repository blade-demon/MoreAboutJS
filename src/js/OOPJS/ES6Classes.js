class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName} ${this.birthday}`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getMarried(newLastName) {
		this.lastName = newLastName;
	}

	static addNumbers(x, y) {
		return x + y;
	}
}

const mary = new Person("Json", "Mike", "12-12-1980");
mary.getMarried("Tompson");
console.log(mary.calculateAge());

console.log(Person.addNumbers(1, 2));
