//Ler dois valores e imprimir uma das três mensagens.
function exercicio41() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));

    if (valor1 === valor2) {
        console.log("Números iguais");
    } else if (valor1 > valor2) {
        console.log("Primeiro é maior");
    } else {
        console.log("Segundo maior");
    }
}

