function calcularZResposta(x, y) {
    const z = (x * y) + 5;
    let resposta;

    if (z <= 0) {
        resposta = "A";
    } else if (z <= 100) {
        resposta = "B";
    } else {
        resposta = "C";
    }

    return { z, resposta };
}

// Testes com os valores fornecidos
const casosDeTeste = [
    { x: 3, y: 2 },
    { x: 150, y: 3 },
    { x: 7, y: -1 },
    { x: -2, y: 5 },
    { x: 50, y: 3 },
];

console.log("Tabela de Resultados:");
console.log("|  X  |  Y  |  Z  | Resposta |");
console.log("|-----|-----|-----|----------|");
casosDeTeste.forEach(({ x, y }) => {
    const { z, resposta } = calcularZResposta(x, y);
    console.log(`| ${x}  | ${y}  | ${z}  | ${resposta}    |`);
});
