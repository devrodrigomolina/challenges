var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [funcionarioNome, salarioFixo, totalVendas] = lines.map(parseFloat);

const salarioFinal =  (totalVendas * 0.15) + salarioFixo;

console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);