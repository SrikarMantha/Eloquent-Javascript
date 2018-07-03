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

// THE CALL STACK
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");

// OPTIONAL ARGUMENTS
// In the following example we'll define square with only one parameter. Yet when we'll call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.
function square(x) { return x * x; }
console.log(square(8 , true, "hedgehog"));


function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}
console.log(power(4));
console.log(power(2, 6));

//CLOSURE (A function that references bindings from local scopes around it is called a closure)
function multiplier(factor) {
  return number => number * factor;
}
let twice = multiplier(4);
console.log(twice(5));

// RECURSION (A function that calls itself is called recursive)
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}
console.log(power(2, 3));

// GROWING FUNCTIONS
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
