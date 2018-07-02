// DEFINING A FUNCTION

const square = function(x) {
  return x * x;
};
console.log(square(12));

// Parameters
const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
console.log(power(3,4));

// Scope
let x = 10;
if (true) {
  let y = 20; // let has limited scope
  var z = 30; // var has global scope
  console.log(x + y + z);
}
// y is not visible here
console.log(x + z);
// console.log(x + y); (ERROR!! y is not defined)

const halve = function(n) {
  return n / 2;
};
let n = 10;
console.log(halve(100)); // The code inside the halve function refers to n, it is seeing its own n, not the global n.

// DECLARATION NOTATION
console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}
