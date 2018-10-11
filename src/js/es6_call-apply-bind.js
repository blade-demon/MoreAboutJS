// var array = [1, 2, 3, 4, 5, 6];

// var max = Math.max.apply(null, array);
// console.log(max);

// function greet() {
//   var reply = [this.person, 'Is An Awsesome', this.role].join(' ');
//   console.log(reply);
// }

// var i = {
//   person: "Douglas Crockfrod",
//   role: 'JavaScript developer'
// };

// greet.call(i);

// function fn1() {
//   console.log(this); //window
// }
// fn1.call(window);

function order(words) {
  // ...
  return words
    .split(" ")
    .sort(
      (a, b) =>
        parseInt(a.replace(/[a-z,A-Z]{1,}/g, "")) >
        parseInt(b.replace(/[a-z,A-Z]{1,}/g, ""))
          ? 1
          : -1
    )
    .join(" ");
}

document.write(order("4of Fo1r pe6ople g3ood th5e the2"));

// acefhinoprstu;
// acefghilmnoprstuy;
