// var obj = new Proxy({}, {
//   get: function (target, key, receiver) {
//     console.log(`getting ${key}!`);
//     // return Reflect.get(target, key, receiver);
//   },
//   set: function (target, key, value, receiver) {
//     console.log(`setting ${key}!`);
//     // return Reflect.set(target, key, value, receiver);
//   }
// });

// // obj.count = 1;
// ++obj.count;

// var target = {};
// var handler = {};
// var proxy = new Proxy(target, handler);
// proxy.a = 'b';
// console.log(target.a);
var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
})

var obj = Object.create(proxy);
console.log(obj.time);