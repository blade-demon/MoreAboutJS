// function add(a, b) {
//   return this + a * b;
// }

// console.log(add.call(null, 2, 5));
// // console.log(add(3, 4).apply);
// console.log(add.call(1, 2, 3));
// console.log(add.apply(4, [2, 5]));

// var arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 45, 66, 22, 11];
// // console.log(Math.max.apply(null, arr));

// console.log(Math.max(arr));

/*
let doSomething = new Promise((resolve, reject) => {
  console.log("hi!");
  resolve();
});

doSomething.then(() => {
  console.log("over");
});
*/

/*
let doSth = new Promise((resolve, reject) => {
  console.log("hi!");
  resolve();
});

setTimeout(function() {
  doSth.then(() => {
    console.log("over!");
  });
}, 10000);
*/

// setTimeout(function() {
//   console.log(1);
// }, 0);

// new Promise(function executor(resolve) {
//   console.log(2);
//   for (var i = 0; i < 10000; i++) {
//     i == 9999 && resolve();
//   }
//   console.log(3);
// }).then(function() {
//   console.log(4);
// });

// console.log(5);

// function Person(name) {
//   this.name = name;
// }

// let person = new Person("yuyongyu");

// console.log(person.__proto__ === Person.prototype);

// console.log(Person.__proto__ === Function.prototype);

// console.log(Function.__proto__ === Function.prototype);

// console.log(Function.prototype.__proto__ === Object.prototype);

// 深拷贝实现方式
// var user1 = { name: "blade", age: 18, skills: ["nodejs", "web"] };
// // 深拷贝
// // var user2 = JSON.parse(JSON.stringify(user1));
// var user2 = Object.assign({}, user1);
// // user2.skills.push("java");
// user2.age = 25;
// console.log(user1);
// console.log(user2);

// 浅拷贝实现方式
function simpleClone(obj) {
  var newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
var user1 = { name: "blade", age: 18, skills: ["nodejs", "web"] };
var user2 = simpleClone(user1);
user2.age = 25;
console.log(user1);
console.log(user2);

// var user1 = { name: "blade", age: 18, skills: ["nodejs", "web"] };
// var user2 = { ...user1 };
// // var user2 = simpleClone(user1);
// // user2.skills.push("java");
// user2.age = 22;
// console.log(user1);
// console.log(user2);

// 深度拷贝实现方式
// Object.assign和{...Object}都是一级深拷贝，
