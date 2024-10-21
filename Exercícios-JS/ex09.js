// Cálculo do custo final de um carro
const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "));
const percentualDistribuidor = 0.28;
const percentualImpostos = 0.45;

const custoFinal = custoFabrica + (custoFabrica * percentualDistribuidor) + (custoFabrica * percentualImpostos);
console.log("O custo final ao consumidor é", custoFinal);
