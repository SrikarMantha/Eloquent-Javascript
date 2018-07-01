// Defining a variable (BINDING)
let ten = 10;
console.log(ten * ten);

// Assigning a new value
let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

// Defining multiple bindings
let one = 1 , two = 2;
console.log(one + two);

// const (points at the same value for as long as it lives)
const greeting = "hello";
console.log(greeting);

let x = 30;
console.log("the value of x is", x);

console.log(Math.max(22, 8)); // Math.max function returns greatest value
console.log(Math.min(2, 4) + 100);

//CONTROL FLOW
let theNumber = Number(prompt("Pick a number")); // Number converts the given string into number
console.log("Your number is the square root of " + theNumber * theNumber);

// CONDITIONAL EXECUTION
let theNumber = Number(prompt("Pick a number"));
if (Number.isNaN(theNumber)) {
  console.log("Enter a Number")
}
else{
  console.log("Your number is the square root of " + theNumber * theNumber);
}

// else if
let num = Number(prompt("Pick a number"));
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}
