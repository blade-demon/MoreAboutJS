
function* Counter() {
  var a = 0;
  while (1 < 2) {
    yield ++a;
  }
}

let gen = Counter();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);