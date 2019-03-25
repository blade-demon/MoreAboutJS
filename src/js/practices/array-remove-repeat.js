var arr = Array(10)
  .fill()
  .map(() => Math.round(Math.random() * 10));
// console.log("生成原始数组：", arr);
var arr = [1, 2, 1, "1", "2", 1];

/*
  数组去重: 双重循环去重
*/
function unique(array) {
  var res = [];
  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
    for (var j = 0, resLen = res.length; j < resLen; j++) {
      if (array[i] === res[j]) {
        break;
      }
    }
    if (j === resLen) {
      res.push(array[i]);
    }
  }
  console.log("双重循环去重：", res);
  return res;
}

/**
 * 数组去重: ES6 Set
 * 基本思路：
 */
function unique(array) {
  const result = Array.from(new Set(array));
  console.log("双重循环去重：", result);
  return result;
}

/**
 * 数组去重：filter中的indexOf方法
 * 基本思路：对于数组中的每一个不重复元素，它第一次出现的位置应该等于它的当前位置，而对于重复元素的元素显然不等于它第一次出现的位置。
 */
function unique(array) {
  uniqueArray = array.filter(
    (item, position, self) => self.indexOf(item) === position
  );
  console.log("filter数组去重：", uniqueArray);
  return uniqueArray;
}

/**
 * 数组去重：filter中排序后去重
 * 基本思路：有序数组排序后，只判断当前元素和上一个元素是否相同，相同就说明是重复的，不同说明元素是唯一的。对于有序数组的去重，这种方法效率更高。
 * 存在问题：如下数组[1, 2, 1, "1", "2", 1]，排序有问题。
 */
var arr = [1, 2, 1, "1", "2", 1];
function unique(array) {
  var res = [];
  var sortedArray = arr.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  console.log(res);
  return res;
}

function unique(array) {
  return array
    .concat()
    .sort()
    .filter((item, index, array) => !index || item !== array[index - 1]);
}

/**
 * Object键值对排序
 * 基本思路：利用一个空对象，把数组的值存成Object的key值，比如obj[value1]=true，在判断另一个值的时候，如果obj[value2]存在的话，说明该值是重复的。
 * 另外由于1和"1"是重复的，所以可以使用typeof item + JSON.stringify(item)拼接成字符串作为key的值来避免这个问题。
 */
var arr = [
  1,
  1,
  "1",
  "1",
  null,
  null,
  undefined,
  undefined,
  new String("1"),
  new String("2"),
  { a: 2 },
  { b: 2 },
  /a/,
  /a/,
  NaN,
  NaN,
  NaN
];

function unique(array) {
  var obj = {};
  return array.filter(item =>
    obj.hasOwnProperty(typeof item + JSON.stringify(item))
      ? false
      : (obj[typeof item + JSON.stringify(item)] = true)
  );
}

/**
 * Reduce方法过滤
 * 基本思路：还是和indexOf一样
 */
var arr = [1, 2, 1, "1", "2", 1];
function unique(array) {
  return array.reduce(
    (uniqueArray, item) =>
      uniqueArray.includes(item) ? uniqueArray : [...uniqueArray, item],
    []
  );
}

console.log(unique(arr));
