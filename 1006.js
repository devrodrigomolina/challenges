var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [notaA, notaB, notaC] = lines;
const media = ((notaA * 2 + notaB * 3 + notaC * 5) / 10).toFixed(1);

console.log(`MEDIA = ${media}`);