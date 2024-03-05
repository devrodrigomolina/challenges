var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C, D] = lines;
const result = (A * B - C * D);

console.log(`DIFERENCA = ${result}`);