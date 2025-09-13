var gasolina = parseFloat(prompt("Digite quantos reais você deseja colocar: "))

litro = 6.17
tanque = gasolina / litro

alert("O valor do pagamento da gasolina foi de R$" + gasolina + " com o litro valendo R$" + litro)
alert("O tanque ficou com " + tanque.toFixed(2) + "Litros")