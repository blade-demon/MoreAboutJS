// 文章转载连接地址： https://juejin.im/post/58cf180b0ce4630057d6727c

// step1: 第 1 个 5 直接输出，1 秒之后，输出 5 个 5
// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(new Date(), i);
//   }, 1000);
// }
// console.log(new Date(), i);

// step2-1: 5 -> 0,1,2,3,4
// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(new Date(), j);
//     }, 1000);
//   })(i);
// }

// console.log(new Date(), i);

// step2-2: 5 -> 0,1,2,3,4
// for (var i = 0; i < 5; i++) {
//   setTimeout(
//     function(i) {
//       console.log(new Date(), i);
//     },
//     1000,
//     i
//   );
// }
// console.log(new Date(), i);

// step2-3: 5 -> 0,1,2,3,4
// var output = function(value) {
//   setTimeout(function() {
//     console.log(new Date(), value);
//   }, 1000);
// };

// for (var i = 0; i < 5; i++) {
//   output(i);
// }

// console.log(new Date(), i);

// step3 (Best practice ES7): 0 -> 1 -> 2 -> 3 -> 4 -> 5
const sleep = async timeOut =>
  new Promise(resolve => {
    setTimeout(resolve, timeOut);
  });

(async () => {
  for (var i = 0; i < 5; i++) {
    await sleep(1000);
    console.log(new Date(), i);
  }
  await sleep(1000);
  console.log(new Date(), i);
})();

// step3-1 (ES6 Promise):  0 -> 1 -> 2 -> 3 -> 4 -> 5
// const tasks = [];
// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     tasks.push(
//       new Promise(resolve => {
//         setTimeout(function() {
//           console.log(new Date(), j);
//           resolve();
//         }, 1000 * j);
//       })
//     );
//   })(i);
// }

// Promise.all(tasks).then(function() {
//   setTimeout(() => {
//     console.log(new Date(), i);
//   }, 1000);
// });
