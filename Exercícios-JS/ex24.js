//Ler dois valores (considere que não serão lidos valores iguais)
// e escrevê-los em ordem crescente.
function exercicio28() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    if (valor1 < valor2) {
        console.log("Ordem crescente:", valor1, valor2);
    } else {
        console.log("Ordem crescente:", valor2, valor1);
    }
}

