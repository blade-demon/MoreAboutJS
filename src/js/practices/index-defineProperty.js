const input = document.getElementById("input");
const span = document.getElementById("span");
const obj = {};

// 方法一：ES5使用Object.defineProperty进行属性劫持实现双向数据绑定。
// 劫持obj的text属性
Object.defineProperty(obj, "text", {
  get: function() {
    console.log("get val", text);
    return text;
  },
  set: function(newVal) {
    console.log("set val:" + newVal);
    input.value = newVal;
    span.innerHTML = newVal;
  }
});

// 元素绑定事件处理函数
input.addEventListener("keyup", function(e) {
  obj.text = e.target.value;
});

// 方法二：Proxy支持多达13种劫持操作。

// const newObj = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     console.log(`getting ${key}`);
//     return Reflect.get(target, key, receiver);
//   },
//   set: function(target, key, value, receiver) {
//     console.log(target, key, value, receiver);
//     if (key === "text") {
//       span.innerHTML = value;
//     }
//     return Reflect.set(target, key, value, receiver);
//   }
// });

// // 元素绑定事件处理函数
// input.addEventListener("keyup", function(e) {
//   newObj.text = e.target.value;
// });
