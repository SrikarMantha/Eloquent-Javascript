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

// forEach
["A", "B"].forEach(l => console.log(l));

const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// forEach
companies.forEach(function(company) {
   console.log(company.name); // Or company instead of company.name to get the array
});
