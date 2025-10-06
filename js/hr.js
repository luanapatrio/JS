function calcularSalario() {
    horasTrabalhadas = parseFloat(document.getElementById("IdNum").value);
    valorHora = parseFloat(document.getElementById("IdNum2").value);

    let salarioBruto = horasTrabalhadas * valorHora;

    let descontoInss;
    if (salarioBruto <= 1000) {
        descontoInss = salarioBruto * 0.08;
    }else{
        descontoInss = salarioBruto * 0.09;
    }

    let descontoIr;
    if (salarioBruto <= 500) {
        descontoIr = 0;
    } else if (salarioBruto <= 1000) {
        descontoIr = salarioBruto * 0.06;
    } else {
        descontoIr = salarioBruto * 0.07;
    }

    let salarioLiquido = salarioBruto - descontoInss - descontoIr;

alert(
  "Salário Bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
  "Desconto INSS: R$ " + descontoInss.toFixed(2) + "\n" +
  "Desconto IR: R$ " + descontoIr.toFixed(2) + "\n" +
  "Salário Líquido: R$ " + salarioLiquido.toFixed(2)
);
}