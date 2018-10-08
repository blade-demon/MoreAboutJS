const obj = {};
Object.defineProperty(obj, "text", {
  get: function() {
    console.log("get val");
  },
  set: function(newVal) {
    console.log("set val:" + newVal);
    document.getElementById("input").value = newVal;
    document.getElementById("span").innerHTML = newVal;
  }
});

const input = document.getElementById("input");
// console.log(input);
input.addEventListener("keyup", function(e) {
  obj.text = e.target.value;
});

// const obj = {};

// const input = document.getElementById("input");
// const span = document.getElementById("span");
// Object.defineProperty(obj, "text", {
//   get: function() {
//     console.log("get value");
//   },
//   set: function(newVal) {
//     console.log("new value:", newVal);
//     span.innerHTML = newVal;
//   }
// });

// input.addEventListener("keyup", function(e) {
//   obj.text = e.target.value;
// });

// const input = document.getElementById("input");
// const span = document.getElementById("span");
// const obj = {};
// const newObj = new Proxy(obj, {
//   get: function(target, key, receiver) {
//     console.log(`getting ${key}`);
//   },
//   set: function(target, key, value, receiver) {
//     console.log(target, key, value, receiver);
//     if (key === "text") {
//       span.innerHTML = value;
//     }
//   }
// });

// input.addEventListener("keyup", function(e) {
//   newObj.text = e.target.value;
// });
