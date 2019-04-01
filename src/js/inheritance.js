document.body.innerHTML = ``;
document.write("JavaScript继承");
/**
 * ES5原型继承
 */

function User(email, name, score) {
  this.email = email;
  this.name = name;
  this.score = score;
}

User.prototype.login = function() {
  console.log(this.email, "has logged in.");
};

User.prototype.logout = function() {
  console.log(this.email, "has logged out.");
};

function Admin(...args) {
  console.log(...args);
  // User.apply(this, args);
  User.call(this, ...args);
  this.role = "super admin";
}

Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = User;
Admin.prototype.deleteUser = function(user) {
  users = users.filter(u => user.email !== u.email);
};

/**
 * ES6类继承
 */
// class User {
//   constructor(email, name) {
//     this.email = email;
//     this.name = name;
//     this.score = 0;
//   }

//   login() {
//     console.log(this.email, "just logged in");
//     return this;
//   }

//   logout() {
//     console.log(this.email, "just logged out");
//     return this;
//   }

//   updateScore() {
//     this.score++;
//     console.log(this.email, "score is now", this.score);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(email, name) {
//     super(email, name);
//   }

//   deleteUser(user) {
//     users = users.filter(u => u.name !== user.name);
//   }
// }

const user1 = new User("john@abc.com", "john", 100);
const user2 = new User("henry@xyz.com", "henry", 99);
const user3 = new User("david@avx.com", "david", 97);
const admin = new Admin("admin@xxx.com", "admin");
var users = [user1, user2, user3];
console.log(user1);
console.log(user2);
console.log(user3);
console.log(admin);
user1.login();
user2.login();
user1.logout();
user2.logout();
admin.login();
admin.deleteUser(user1);
console.log(users);

console.log(user1.constructor === User);
console.log(user1.__proto__ === User.prototype);
console.log(User.prototype.constructor === User);
console.log(admin.__proto__ === Admin.prototype);
console.log(admin.__proto__.__proto__ === User.prototype);
console.log(user2 instanceof Admin);
console.log(admin instanceof Admin);
console.log(admin instanceof User);
// user1.deleteUser();
