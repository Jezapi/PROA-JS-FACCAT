// Cálculo do número de lâmpadas necessárias para iluminar um cômodo
const potenciaLampada = parseFloat(prompt("Digite a potência da lâmpada (em watts): "));
const largura = parseFloat(prompt("Digite a largura do cômodo (em metros): "));
const comprimento = parseFloat(prompt("Digite o comprimento do cômodo (em metros): "));

const area = largura * comprimento;
const potenciaNecessaria = 18;  // watts por metro quadrado
const totalPotencia = area * potenciaNecessaria;
const numLampadas = Math.ceil(totalPotencia / potenciaLampada);
console.log("Número de lâmpadas necessárias:", numLampadas);
