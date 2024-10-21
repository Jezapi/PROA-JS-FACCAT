// As maçãs custam R$ 1.30 cada se forem compradas menos de uma dúzia,
// e R$ 1.00 se forem compradas pelo menos 12.
function exercicio24() {
    const quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));
    let custoPorMaca = quantidade < 12 ? 1.30 : 1.00;
    let custoTotal = custoPorMaca * quantidade;
    console.log("Custo total da compra: R$", custoTotal.toFixed(2));
}


