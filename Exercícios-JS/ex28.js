//Ler: número da conta do cliente, saldo, débito e crédito.
// Calcular e escrever o saldo atual. 
function exercicio33() {
    const numeroConta = prompt("Digite o número da conta do cliente:");
    const saldo = parseFloat(prompt("Digite o saldo:"));
    const debito = parseFloat(prompt("Digite o débito:"));
    const credito = parseFloat(prompt("Digite o crédito:"));
    
    const saldoAtual = saldo - debito + credito;
    console.log("Saldo atual:", saldoAtual.toFixed(2));
    
    if (saldoAtual >= 0) {
        console.log("Saldo Positivo");
    } else {
        console.log("Saldo Negativo");
    }
}

