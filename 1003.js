var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines;

console.log(`SOMA = ${Number(a) + Number(b)}`)