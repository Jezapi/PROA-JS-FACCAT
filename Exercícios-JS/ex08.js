// Cálculo do novo salário com base no percentual de reajuste
const salarioAtual = parseFloat(prompt("Digite o salário mensal atual: "));
const percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste: "));
const novoSalario = salarioAtual * (1 + percentualReajuste / 100);
console.log("O novo salário é", novoSalario);
