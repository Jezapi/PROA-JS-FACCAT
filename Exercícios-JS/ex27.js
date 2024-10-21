// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa.
// Calcular e escrever o salário total com base nas comissões.
function exercicio32() {
    const salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
    const vendas = parseFloat(prompt("Digite o valor das vendas efetuadas:"));
    
    let comissao;
    if (vendas <= 1500) {
        comissao = vendas * 0.03; // 3%
    } else {
        comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05); // 5% sobre o que ultrapassa R$ 1.500
    }
    
    const salarioTotal = salarioFixo + comissao;
    console.log("Salário total do vendedor: R$", salarioTotal.toFixed(2));
}

