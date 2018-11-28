const numbers = [1, 5, 8, 19, 21];
const createAddingFunction = number => arr => arr.map(num => num + number);
const numbersPlusOne = createAddingFunction(1);
console.log(numbersPlusOne(numbers));
