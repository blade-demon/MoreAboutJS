// 实现类似：add(2)(4) 输出 6

// function add(num) {
//   var sum = 0;
//   sum = sum + num;
//   return function(numB) {
//     sum = sum + numB;
//     return sum;
//   };
// }

// console.log(add(2)(4));

var foo = "hello";
(function() {
  var bar = " world";
  console.log(foo + bar);
})();

console.log(foo + bar);
