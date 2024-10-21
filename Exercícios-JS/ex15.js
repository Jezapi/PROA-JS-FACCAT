// Cálculo da quantidade de caixas de azulejos para a cozinha
const comprimento = parseFloat(prompt("Digite o comprimento da cozinha (em metros): "));
const largura = parseFloat(prompt("Digite a largura da cozinha (em metros): "));
const altura = parseFloat(prompt("Digite a altura da cozinha (em metros): "));

// Calculando a área das paredes
const areaParede1 = comprimento * altura; // duas paredes
const areaParede2 = largura * altura; // duas paredes
const areaTotal = 2 * (areaParede1 + areaParede2);

// Cada caixa de azulejos cobre 1.5 m²
const areaPorCaixa = 1.5;
const caixasNecessarias = Math.ceil(areaTotal / areaPorCaixa);

console.log("Quantidade de caixas de azulejos necessárias:", caixasNecessarias);
