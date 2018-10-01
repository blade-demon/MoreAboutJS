function Person() {
  this.name = "person1";
}

function Animal() {
  this.name = "animal1";
}

function Factory() {
  Factory.prototype.getInstance = function(className) {
    return eval("new " + className + "()");
  };
}

var factory = new Factory();
var obj1 = factory.getInstance("Person");
var obj2 = factory.getInstance("Animal");

console.log(obj1.name);
console.log(obj2.name);
