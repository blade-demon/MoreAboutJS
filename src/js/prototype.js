// // 从原型到原型链
// function Person() {}

// Person.prototype.name = "blade";

// var person1 = new Person();
// var person2 = new Person();
// console.log(person1.name);
// console.log(person2.name);
// console.log(person1.__proto__ === Person.prototype);
// console.log(Person.prototype.constructor === Person);
// console.log(Object.getPrototypeOf(person1) === Person.prototype);
// console.log(Person.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);
// console.log(person1.__proto__.__proto__ === Object.prototype);

const dog = {
  sound: "Woof!",
  bark() {
    console.log(this.sound);
  }
};

dog.bark();

const max = {
  sound: "RAAARGH!!"
};

max.__proto__ = dog;

max.bark();

const catDog = {
  sound: "Meowoof"
};

catDog.__proto__ = max;

catDog.bark();

console.log(max.bark === catDog.bark);
