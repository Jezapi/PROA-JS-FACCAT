//Ler: quantidade atual em estoque, quantidade máxima e mínima de um produto.
// Calcular e escrever a quantidade média.
function exercicio34() {
    const quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque:"));
    const quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"));
    const quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"));
    
    const quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;
    console.log("Quantidade média:", quantidadeMedia);
    
    if (quantidadeAtual >= quantidadeMedia) {
        console.log("Não efetuar compra");
    } else {
        console.log("Efetuar compra");
    }
}

