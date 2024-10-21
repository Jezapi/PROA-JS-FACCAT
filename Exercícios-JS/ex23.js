// Ler dois valores (considere que não serão lidos valores iguais)
// e escrever o maior deles.
function exercicio27() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const maior = valor1 > valor2 ? valor1 : valor2;
    console.log("O maior valor é:", maior);
}

