function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
	return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Haris");

function Customer(firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName);

	this.phone = phone;
	this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// create customer
const customer1 = new Customer("Tom", "Smith", "18616345128", "Standard");
console.log(customer1);
console.log(customer1.greeting());
