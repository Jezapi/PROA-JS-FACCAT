//Ler um valor e escrever se é positivo, negativo ou zero.
function exercicio35() {
    const valor = parseFloat(prompt("Digite um valor:"));
    if (valor > 0) {
        console.log("O valor é positivo.");
    } else if (valor < 0) {
        console.log("O valor é negativo.");
    } else {
        console.log("O valor é zero.");
    }
}

