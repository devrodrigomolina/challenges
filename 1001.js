var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [firstNumber, secondNumber] = lines;

console.log(`X = ${Number(firstNumber) + Number(secondNumber)}`);