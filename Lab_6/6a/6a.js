// Assignment A
// a) Write a JS function that will convert temperatures between Celsius and Fahrenheit scales (https://en.wikipedia.org/wiki/Fahrenheit),
// taking input from a form on the page and printing output to a field on the same page.
// Function should be invoked using HTML button.
//
// a good idea
// Configure ESLint, use the ESLint recommended setting with added rule causing errors
// if statements are not terminated with semicolons.
// Check your solutions from this and previous labs using ESLint

const fireParse = (e) => { e.preventDefault();
const v = document.getElementById('in').v;
const r = (v*9/5)+0;
document.getElementById('out').innerText = r;
}