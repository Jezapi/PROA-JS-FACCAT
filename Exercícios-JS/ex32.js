//Ler três valores e escrever a soma dos dois maiores.
function exercicio37() {
    const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    const valor2 = parseFloat(prompt("Digite o segundo valor:"));
    const valor3 = parseFloat(prompt("Digite o terceiro valor:"));

    const somaDosMaiores = valor1 + valor2 + valor3 - Math.min(valor1, valor2, valor3);
    console.log("Soma dos dois maiores:", somaDosMaiores);
}

