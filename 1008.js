var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const [funcionarioId, horasTrabalhadas, salario] = lines;

const salarioFinal = Number((horasTrabalhadas * salario)
                    .toLocaleString('en-US', { useGrouping: false  }))
                    .toFixed(2);

console.log(`NUMBER = ${funcionarioId}\nSALARY = U$ ${salarioFinal}`);