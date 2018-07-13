// METHODS
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive.");

//this
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};
whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

// If you want to pass this explicitly, you can use a function’s call method, which takes the this value as its first argument and treats further arguments as normal parameters
speak.call(hungryRabbit, "Burp!")
speak.call(whiteRabbit, "Destroy them")

//PROTOTYPES
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

// Object.getPrototypeOf returns the prototype of an object
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// Functions derive from Function.prototype, and arrays derive from Array.prototype
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf([]) == Array.prototype);

// You can use Object.create to create an object with a specific prototype
let protoRabbit = {
  speak(line) {   // A property like speak(line) in an object expression is a shorthand way of defining a method. It creates a property called speak and gives it a function as its value
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
