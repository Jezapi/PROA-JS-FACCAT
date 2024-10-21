// Cálculo do salário mensal com base no salário por hora e horas trabalhadas
const salarioPorHora = parseFloat(prompt("Digite quanto você ganha por hora: "));
const horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês: "));
const salarioTotal = salarioPorHora * horasTrabalhadas;
console.log("Seu salário total no mês é", salarioTotal);
