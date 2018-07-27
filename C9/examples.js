// CREATING A REGULAR EXPRESSION
let re1 = new RegExp("abc");
let re2 = /abc/;

// Some characters, such as question marks and plus signs, have special meanings in regular expressions and must be preceded by a backslash if they are meant to represent the character itself
let eighteenPlus = /eighteen\+/;

// TESTING FOR MATCHES
// Regular expression objects have a number of methods like test
console.log(/abc/.test("abcde"));
console.log(/abc/.test("abxde"));

// SETS OF CHARACTERS
console.log(/[0123456789]/.test("in 1992"));
console.log(/[0-9]/.test("in 1992"));

/*
A number of common character groups have their own built-in shortcuts. Digits are one of them: \d means the same thing as [0-9].
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
*/

// So you could match a date and time format like 01-30-2003 15:20 with the following expression:
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));
console.log(dateTime.test("30-jan-2003 15:20"));

// To invert a set of characters you can write a caret (^) character after the opening bracket
let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
console.log(notBinary.test("1100100010200110"));

// REPEATING PARTS OF A PATTERN
// When you put a plus sign (+) after something in a regular expression, it indicates that the element may be repeated more than once
// The star (*) has a similar meaning but also allows the pattern to match zero times
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

// A question mark makes a part of a pattern optional, meaning it may occur zero times or one time
let neighbor = /neighbou?r/;
console.log(neighbor.test("neighbour"));
console.log(neighbor.test("neighbor"));

// To indicate that a pattern should occur a precise number of times, use braces
let dateTime = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime.test("01-300-2003 8:45"));
// You can also specify open-ended ranges when using braces by omitting the number after the comma. So, {5,} means five or more times

// GROUPING SUB EXPRESSIONS
// To use an operator like * or + on more than one element at a time, you have to use parentheses
let cartoonCrying = /boo+(hoo+)+/i; // i at the end of the expression in the example makes this regular expression case insensitive, allowing it to match the uppercase B
console.log(cartoonCrying.test("Boohoooohoohooo"));

// MATCHES AND GROUPS
// The test method is the absolute simplest way to match a regular expression. It tells you only whether it matched and nothing else
let match = /\d+/.exec("one two 100");
console.log(match);
console.log(match.index);

//String values have a match method that behaves similarly
console.log("one two 100".match(/\d+/));

// JavaScript has a standard class for representing dates
console.log(new Date());

// You can also create an object for a specific time
console.log(new Date(2009, 11, 9)); // Wed Dec 09 2009 00:00:00 GMT+0100 (CET)
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)); // → Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
// *****JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string); // The _ (underscore) binding is ignored and used only to skip the full match element in the array returned by exec
  return new Date(year, month - 1, day);
}
console.log(getDate("1-30-2003"));
