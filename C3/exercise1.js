// Write a function min that takes two arguments and returns their minimum

// CODE
let min = function(a , b) {
  if(a < b) {
    return a;
  }
  else if(b < a) {
    return b;
  }
}
console.log(min(0, 10));
console.log(min(0, -10));
