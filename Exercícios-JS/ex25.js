// Ler a hora de início e a hora de fim de um jogo de Xadrez
// e calcule a duração do jogo em horas.
function exercicio29() {
    const horaInicio = parseInt(prompt("Digite a hora de início do jogo:"));
    const horaFim = parseInt(prompt("Digite a hora de fim do jogo:"));
    let duracao;
    if (horaFim <= horaInicio) {
        duracao = (24 - horaInicio) + horaFim; // Jogo terminou no dia seguinte
    } else {
        duracao = horaFim - horaInicio; // Jogo terminou no mesmo dia
    }
    console.log("Duração do jogo em horas:", duracao);
}

