function calcularValorPago(litros, tipoCombustivel) {
    const precoAlcool = 2.90; // Preço do litro do álcool
    const precoGasolina = 3.30; // Preço do litro da gasolina
    let desconto = 0;

    // Cálculo do desconto de acordo com o tipo de combustível
    if (tipoCombustivel === "A") { // Álcool
        if (litros <= 20) {
            desconto = 0.03 * litros * precoAlcool;
        } else {
            desconto = 0.05 * litros * precoAlcool;
        }
        return (precoAlcool * litros) - desconto;
    } else if (tipoCombustivel === "G") { // Gasolina
        if (litros <= 20) {
            desconto = 0.04 * litros * precoGasolina;
        } else {
            desconto = 0.06 * litros * precoGasolina;
        }
        return (precoGasolina * litros) - desconto;
    } else {
        throw new Error("Tipo de combustível inválido. Use 'A' para álcool ou 'G' para gasolina.");
    }
}

// Exemplo de uso:
const litrosVendidos = 25; // Alterar para testar diferentes quantidades
const tipoCombustivel = "G"; // Alterar para 'A' para álcool e 'G' para gasolina
const valorAPagar = calcularValorPago(litrosVendidos, tipoCombustivel);
console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
