// A jornada de trabalho semanal de um funcionário é de 40 horas.
// O funcionário que trabalhar mais de 40 horas receberá hora extra.
function exercicio30() {
    const horasTrabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
    const salarioPorHora = parseFloat(prompt("Digite o salário por hora:"));
    let salarioTotal;
    if (horasTrabalhadas > 160) { // 40 horas x 4 semanas
        const horasExtras = horasTrabalhadas - 160;
        const salarioHoraExtra = salarioPorHora * 1.5;
        salarioTotal = (160 * salarioPorHora) + (horasExtras * salarioHoraExtra);
    } else {
        salarioTotal = horasTrabalhadas * salarioPorHora;
    }
    console.log("Salário total do funcionário: R$", salarioTotal.toFixed(2));
}

