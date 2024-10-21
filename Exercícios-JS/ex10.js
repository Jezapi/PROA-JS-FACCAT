// Cálculo do salário final de um vendedor
const carrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "));
const valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "));
const salarioFixo = parseFloat(prompt("Digite o salário fixo: "));
const comissaoPorCarro = parseFloat(prompt("Digite o valor recebido por carro vendido: "));

const comissaoTotal = carrosVendidos * comissaoPorCarro;
const percentualVendas = 0.05 * valorTotalVendas;
const salarioFinal = salarioFixo + comissaoTotal + percentualVendas;
console.log("O salário final do vendedor é", salarioFinal);
