//  Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples
// e escrever uma mensagem que diga se o aluno foi ou não aprovado.
function exercicio25() {
    const nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
    const nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));
    const media = (nota1 + nota2) / 2;
    if (media >= 6.0) {
        console.log("Aprovado! Média:", media.toFixed(2));
    } else {
        console.log("Reprovado! Média:", media.toFixed(2));
    }
}


