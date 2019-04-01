/**
 * 实现以下功能；
 * add(1)(2)  //3
 * add(1,2,3)(4)  //10
 * add(1)(2)(3)(4)(5)  //15
 */

// 当我们没有重新定义toString与valueOf时，函数的隐式转换会调用默认的toString方法，它会将函数的定义内容作为字符串返回。
// 而当我们主动定义了toString/vauleOf方法时，那么隐式转换的返回结果则由我们自己控制了。

// function add() {
//   return 20;
// }
// console.log(add + 10);

// add.toString = () => {
//   return 10;
// };
// console.log(add + 10);

// add.valueOf = () => {
//   return 5;
// };
// console.log(add + 10);

// 1.实现add(3)(4)
// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }
// console.log(add(3)(4));

// 2. 实现add(3)(4)(5)
// function add(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(3)(4)(5));

// 3. 实现add(1, 2, 3)(4, 5, 6)(7, 8, 9)
function add() {
  var args = [].slice.call(arguments);

  var fn = function() {
    var fn_args = [].slice.call(arguments);
    return add.apply(null, args.concat(fn_args));
  };

  // fn.toString = function() {
  //   return args.reduce(function(accu, curr) {
  //     return (accu += curr);
  //   });
  // };

  fn.valueOf = function() {
    return args.reduce(function(accu, curr) {
      return (accu += curr);
    });
  };

  return fn;
}

console.log(+add(1, 2, 3)(4, 5, 6)(7, 8, 9));
