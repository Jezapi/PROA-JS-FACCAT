//Ler o ano atual e o ano de nascimento de uma pessoa.
// Escrever uma mensagem que diga se ela poderá ou não votar este ano.
function exercicio26() {
    const anoAtual = parseInt(prompt("Digite o ano atual:"));
    const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
    const idade = anoAtual - anoNascimento;
    if (idade >= 16) {
        console.log("Você pode votar este ano.");
    } else {
        console.log("Você não pode votar este ano.");
    }
}

