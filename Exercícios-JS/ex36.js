// Ler o nome de dois times e o número de gols marcados na partida. Escrever o nome do vencedor.
function exercicio40() {
    const time1 = prompt("Digite o nome do primeiro time:");
    const time2 = prompt("Digite o nome do segundo time:");
    const golsTime1 = parseInt(prompt(`Digite o número de gols do ${time1}:`));
    const golsTime2 = parseInt(prompt(`Digite o número de gols do ${time2}:`));

    if (golsTime1 > golsTime2) {
        console.log(`Vencedor: ${time1}`);
    } else if (golsTime2 > golsTime1) {
        console.log(`Vencedor: ${time2}`);
    } else {
        console.log("EMPATE");
    }
}

