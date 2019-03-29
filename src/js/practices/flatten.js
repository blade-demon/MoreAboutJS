// 函数curry
const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

// 方式一：使用reduce与concat/扩展运算符
const flatArray = array =>
  array.reduce(
    (flattenArray, item) =>
      Array.isArray(item)
        ? [...flattenArray, ...flatArray(item)]
        : [...flattenArray, item],
    []
  );

console.log(flatArray(arr));

/**
 * 方式二：使用原型方法Array.prototype.flat()
 * flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
 * var newArray = arr.flat(depth)
 * @param {Array} arr
 * @param {Number} depth
 * @returns {Array} newArray
 */
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity);
// [1, 2, 3, 4, 5, 6]

// flat() 方法会移除数组中的空项:
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

console.log(flatArray(arr));

/**
 * 方式三：使用toString()和split()方法
 */
console.log(
  arr
    .toString()
    .split(",")
    .map(item => parseInt(item, 10))
);
