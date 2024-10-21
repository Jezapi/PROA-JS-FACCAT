// Ler um valor e escrever se é positivo ou negativo (considerando zero como positivo)
function exercicio23() {
    const valor = parseFloat(prompt("Digite um valor:"));
    if (valor >= 0) {
        console.log("O valor é positivo.");
    } else {
        console.log("O valor é negativo.");
    }
}
