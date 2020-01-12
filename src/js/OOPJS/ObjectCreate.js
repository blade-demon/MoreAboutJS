const personPrototypes = {
	greeting: function() {
		return `Hello, ${this.firstName} ${this.lastName}`;
	},
	getsMarried: function(newLastName) {
		this.lastName = newLastName;
	}
};

const mary = Object.create(personPrototypes);

mary.firstName = "John";
mary.lastName = "Smith";
mary.age = 18;
mary.getsMarried("Tompson");

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
	firstName: {
		value: "Json"
	},
	lastName: { value: "Mike" },
	age: { value: 36 }
});

console.log(brad);
console.log(brad.greeting());
