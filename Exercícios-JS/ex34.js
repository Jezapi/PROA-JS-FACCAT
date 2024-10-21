//Ler três valores e escrevê-los em ordem crescente.
function exercicio38() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"));
    
    const valores = [valor1, valor2, valor3];
    valores.sort((a, b) => a - b);
    
    console.log("Valores em ordem crescente:", valores);
}

