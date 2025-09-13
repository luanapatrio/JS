
// var pao = parseInt(prompt("Digite a quantidade de pães que deseja: "))
// var broa = parseInt(prompt("Digite a quantidade de broas que deseja: "))

// arrecadacao = pao * 0.12 + broa * 1.50
// percentual = 0.10
// poupanca = arrecadacao.toFixed(2)* percentual

// alert("O dono arrecadou R$" + arrecadacao)
// alert("O dono deve guardar na poupança: " + poupanca)

function calc(){
    var qtdBroa = parseInt(document.getElementById('idBroa').value)
    var qtdPao = parseInt(document.getElementById('idPao').value)
    var totalvenda = (qtdPao * 0.12) + (qtdBroa * 1.50)
    var poupanca = totalvenda * 0.10
    document.getElementById('totvenda').value = totalvenda.toFixed(2)
    document.getElementById('poupdez').value = poupanca.toFixed(2)
}