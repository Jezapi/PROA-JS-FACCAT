// Ler três valores e escrever o maior deles.
function exercicio36() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"));
    
    const maior = Math.max(valor1, valor2, valor3);
    console.log("O maior valor é:", maior);
}

