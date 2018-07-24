// STRICT MODE
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
canYouSpotTheProblem();

// In strict mode this binding holds the value undefined in functions that are not called as methods.
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");
console.log(name);

// use strict
"use strict";
function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand"); // forgot new
