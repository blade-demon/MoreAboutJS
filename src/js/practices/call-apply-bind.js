// var array = [1, 2, 3, 4, 5, 6];

// var max = Math.max.apply(null, array);
// console.log(max);

// function greet() {
//   var reply = [this.person, 'Is An Awsesome', this.role].join(' ');
//   console.log(reply);
// }

// var i = {
//   person: "Douglas Crockfrod",
//   role: 'JavaScript developer'
// };

// greet.call(i);

// function fn1() {
//   console.log(this); //window
// }
// fn1.call(window);

// function order(words) {
//   // ...
//   return words
//     .split(" ")
//     .sort(
//       (a, b) =>
//         parseInt(a.replace(/[a-z,A-Z]{1,}/g, "")) >
//         parseInt(b.replace(/[a-z,A-Z]{1,}/g, ""))
//           ? 1
//           : -1
//     )
//     .join(" ");
// }

// document.write(order("4of Fo1r pe6ople g3ood th5e the2"));

// acefhinoprstu;
// acefghilmnoprstuy;

var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function() {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  }
};

var pokemonName = function(snack, hobby) {
  console.log(this);
  console.log(this.getPokeName() + " loves " + snack + " and " + hobby);
};

// bind 1
// var logPokemon = pokemonName.bind(pokemon, "sushi", "algorithms");
// logPokemon();

// bind 2
var logPokemon = pokemonName.bind(pokemon);
console.log(pokemonName);
logPokemon("sushi", "algorithms");

// call()
pokemonName.call(pokemon, "sushi", "algorithms");

// apply()
pokemonName.apply(pokemon, ["sushi", "algorithms"]);

/* apply, call和 bind的区别
  1. bind(), call() 和 apply() 都可以携带额外的参数。
  2. call() 和 apply() 会立即执行。
  3. call() 和 apply() 不会拷贝它要执行的函数。
  4. call() 和 apply() 的主要的区别是参数是单个单个传入，而apply()是一个将所有参数作为数组传入。
*/

// 练习: 数组中找出最小值/最大值。
const array = [1, 2, 3, 44, 23, 13, 46, 42, 12, -10];
console.log(Math.min.apply(null, array));
console.log(Math.max.apply(this, array));
