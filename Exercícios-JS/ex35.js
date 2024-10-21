//Ler três valores representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo.
function exercicio39() {
    const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
    const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
    const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        console.log("Formam um triângulo.");
    } else {
        console.log("Não formam um triângulo.");
    }
}

