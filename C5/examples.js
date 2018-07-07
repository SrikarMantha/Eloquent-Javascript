// ABSTRACTION

for (let i = 0; i < 10; i++) {
  console.log(i);
}
//-----------------------------------
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeatLog(10);

// We can pass our function as an action
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(6, console.log);

// Create function on spot
let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// HIGHER ORDER FUNCTIONS
//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions
// we can have functions that create new functions
function greaterThan(n) {
  return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
