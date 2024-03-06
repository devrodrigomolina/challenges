var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [_codigoPeca1, numeroPeca1, valorUnitarioPeca1] = lines[0].split(' ').map(Number);
const [_codigoPeca2, numeroPeca2, valorUnitarioPeca2] = lines[1].split(' ').map(Number);

var total_a_pagar = (numeroPeca1 * valorUnitarioPeca1) + (numeroPeca2 * valorUnitarioPeca2);

console.log(`VALOR A PAGAR: R$ ${total_a_pagar.toFixed(2)}`);