// Template for JavaScript solutions
function solution(...args) {
  // Your code here
}

// Read input from input.json and execute solution
const fs = require('fs');
const input = JSON.parse(fs.readFileSync('input.json')).input;
const result = solution(...input);
console.log(JSON.stringify(result));