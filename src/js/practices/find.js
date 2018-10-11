// 实现二分查找

// step1: 随机生成100个随机数
var arr = [];
for (var i = 0; i < 100; i++) {
  arr[i] = Math.floor(Math.random() * 101);
}
// 实现排序
console.log(arr.sort((a, b) => a - b));
