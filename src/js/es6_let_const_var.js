console.log(total);
var total = 0;
function func(num1, num2) {
  console.log(total);
  let total = num1 + num2;
  console.log(total);
}
func(100, 200);
console.log(total);
// undefined, 0, 300, 0
