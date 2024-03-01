var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [firstNumber, secondNumber] = lines.map(Number);;

console.log(`PROD = ${firstNumber * secondNumber}`);