function test(fruit) {
  // extract conditions to array
  const redFruits = ["apple", "strawberry", "cherry", "cranberries"];

  if (redFruits.includes(fruit)) {
    console.log("red");
  }
}

test(["apple"]);
