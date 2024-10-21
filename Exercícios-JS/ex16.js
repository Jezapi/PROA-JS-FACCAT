// Cálculo do rendimento do carro do táxi
const precoCombustivel = 2.90;
const odometroInicio = parseFloat(prompt("Digite a marcação do odômetro no início do dia (em Km): "));
const odometroFim = parseFloat(prompt("Digite a marcação do odômetro no final do dia (em Km): "));
const litrosGastos = parseFloat(prompt("Digite o número de litros de combustível gasto: "));
const valorRecebido = parseFloat(prompt("Digite o valor total (R$) recebido dos passageiros: "));

// Cálculo da média de consumo em Km/L
const distanciaPercorrida = odometroFim - odometroInicio;
const mediaConsumo = distanciaPercorrida / litrosGastos;

// Cálculo do lucro líquido
const custoCombustivel = litrosGastos * precoCombustivel;
const lucroLiquido = valorRecebido - custoCombustivel;

console.log("Média de consumo em Km/L:", mediaConsumo.toFixed(2));
console.log("Lucro líquido do dia (R$):", lucroLiquido.toFixed(2));
