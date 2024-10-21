// Cálculo do número mínimo de litros necessários para o reabastecimento
const comprimentoPista = parseFloat(prompt("Digite o comprimento da pista (em metros): "));
const voltas = parseInt(prompt("Digite o número total de voltas a serem percorridas: "));
const reabastecimentos = parseInt(prompt("Digite o número de reabastecimentos desejados: "));
const consumoCombustivel = parseFloat(prompt("Digite o consumo de combustível do carro (em Km/L): "));

// Cálculo da distância total a ser percorrida
const distanciaTotal = comprimentoPista * voltas; // em metros
const distanciaTotalKm = distanciaTotal / 1000; // convertendo para Km

// Cálculo da distância entre reabastecimentos
const distanciaEntreReabastecimentos = distanciaTotalKm / (reabastecimentos + 1);

// Cálculo do número mínimo de litros necessários
const litrosNecessarios = distanciaEntreReabastecimentos / consumoCombustivel;

console.log("Número mínimo de litros necessários para percorrer até o primeiro reabastecimento:", Math.ceil(litrosNecessarios));
