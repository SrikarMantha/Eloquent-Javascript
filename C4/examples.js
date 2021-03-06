// ARRAYS
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers);
console.log(listOfNumbers[2]);
console.log(listOfNumbers[2-1]);
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
  "touch tree" : "Touched"
};
console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1["touch tree"]);

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

// MUTABILITY
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
console.log(object1 == object3);
object1.value = 15;
console.log(object2.value);
console.log(object3.value);

//
const score = {visitors: 0, home: 0};
score.visitors = 1; // This is okay
score = {visitors: 1, home: 1}; // This isn't allowed
console.log(score.visitors);

// THE LYCANTHROPE'S LOG
let journal = [];
function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running", "television"], false);
console.log(journal);

// ϕ =	n11n00 − n10n01/sqrt(n1•n0•n•1n•0)
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));

// Array methods
console.log([1, 2, 3, 2, 1].indexOf(2));
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));
