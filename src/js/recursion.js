// 递归训练

// Demo1: Flatten数组，将[1,[2,[3,4]]] => [1,2,3,4]
const array = new Array([1, "2", [2, [3, [4, 5, 6]]]]);
function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
console.log(flatten(array));

// Demo2: 计算阶乘
function Factorial(num) {
  if (num < 1) {
    return 1;
  } else {
    return num * Factorial(num - 1);
  }
}

console.log(Factorial(5));
