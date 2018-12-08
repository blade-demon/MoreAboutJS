/*
  数组去重，并统计元素出现次数: 方法1和方法2都不能去分别数字和字母
*/
const array = [1, "2", "3", "a", 2, 4, 5, -1, 2, 1, 1, 1, 6, 4, 3];
// 方法1:
function audit1(array) {
  let obj = {};
  array.forEach(element => {
    if (!obj[element]) {
      obj[element] = 0;
    }
    array.indexOf(element) !== -1 ? (obj[element] += 1) : 0;
  });
  return obj;
}

// 方法2:
function audit2(array) {
  const mapArray = new Map();
  array.reduce((prev, current) => {
    !prev.has(current)
      ? prev.set(current, 1)
      : prev.set(current, prev.get(current) + 1);
    return prev;
  }, mapArray);
  return mapArray;
}

// audit1(array);
console.log(audit2(array));

// function list(names) {
//   return names.reduce((prevValue, currentValue, index, array) => {
//     if (index === 0) {
//       return current.name;
//     } else if (index === array.length - 1) {
//       return prev + " & " + current.name;
//     } else {
//       return prev + ", " + current.name;
//     }
//   }, "");
// }

// console.log(list([]));

/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 *
 * moveZeros([false,1,0,1,2,0,1,3,"a"])
 * returns[false,1,1,2,1,3,"a",0,0]
 */

// var moveZeros = function(arr) {
//   // TODO: Program me
//   return arr.filter(item => item !== 0).concat(arr.filter(item => item === 0));
// };

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/**
 * Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

    For instance:

    "hello case".camelCase() => HelloCase
    "camel case word".camelCase() => CamelCaseWord
 */
// String.prototype.camelCase = function() {
//   return this.split(" ")
//     .map(function(word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join("");
// };

// console.log("hello case".camelCase());
// console.log("camel case word".camelCase());

/**
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
 * The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

  toWeirdCase( "String" );//=> returns "StRiNg"
  toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

// function toWeirdCase(string) {
//   //TODO
//   return string
//     .split(" ")
//     .map(function(word) {
//       return word
//         .split("")
//         .map(
//           (character, index) =>
//             index % 2 === 0 ? character.toUpperCase() : character
//         )
//         .join("");
//     })
//     .join(" ")
//     .trim();
// }

/**
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
 *
 * toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
 * toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */

// function toCamelCase(str) {
//   return str
//     .split(/\-|\_/)
//     .map(function(word, index) {
//       if (index > 0) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//       } else {
//         return word;
//       }
//     })
//     .join("");
// }
// function toCamelCase(str) {
//   var regExp = /[-_]\w/gi;
//   return str.replace(regExp, function(match) {
//     return match.charAt(1).toUpperCase();
//   });
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));

// reject

console.log(array.filter(item => parseInt(item) >= 3));
