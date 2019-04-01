// const add = (a, b, c, d) => a + b + c + d;

// const add = (...a) => a.reduce((accu, current) => (accu += current), 0);
// const curry = f => (f.length ? (...a) => curry(f.bind(f, ...a)) : f());
// const f = curry(add);
// console.log(f(1, 2, 3, 4));
// console.log(f(1)(2, 3, 4));
// console.log(f(1, 2)(3, 4));
// console.log(f(1, 2, 3)(4));
// console.log(f(1)(2)(3, 4));

const add = (...a) => a.reduce((accu, current) => (accu += current), 0);
var curry = f => (f.length ? (...a) => curry(f.bind(f, ...a)) : f);
const f = curry(add);
console.log(f(1, 2, 3));
console.log(f(1, 2, 3, 4));
console.log(f(1)(2, 3, 4));
// console.log(f(1, 2)(3, 4));
// console.log(f(1, 2, 3)(4));
// console.log(f(1)(2)(3, 4));
