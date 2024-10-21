// Leitura da idade em anos, meses e dias e cálculo em dias
const anos = parseInt(prompt("Digite a idade em anos: "));
const meses = parseInt(prompt("Digite a idade em meses: "));
const dias = parseInt(prompt("Digite a idade em dias: "));
const totalDias = (anos * 365) + (meses * 30) + dias;
console.log("A idade em dias é", totalDias);
