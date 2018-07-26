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
