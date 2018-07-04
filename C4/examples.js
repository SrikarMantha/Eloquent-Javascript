// ARRAYS
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
console.log(listOfNumbers[2]);
listOfNumbers.length;

// METHODS
let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

// Methods to manipulate arrays
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

// OBJECTS
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

// delete
let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

// To find out what properties an object has, you can use the Object.keys function. You give it an object, and it returns an array of strings—the object’s property names
console.log(Object.keys({x: 0, y: 0, z: 2}));

// Object.assign function copies all properties from one object into another
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
