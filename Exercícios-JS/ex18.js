// //Ler um valor e escrever a mensagem "É MAIOR QUE 10!" se o valor
//  lido for maior que 10, caso contrário, escrever "NÃO É MAIOR QUE 10!"
function exercicio22() {
    const valor = parseFloat(prompt("Digite um valor:"));
    if (valor > 10) {
        console.log("É MAIOR QUE 10!");
    } else {
        console.log("NÃO É MAIOR QUE 10!");
    }
}
