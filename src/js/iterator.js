var it = makeIterator(new Set([1,2,3,3,3,3,33,4]));

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length ? { value: array[nextIndex++] } :
        {
          done: true
        }
    }
  };
}

