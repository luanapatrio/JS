function calcularVelocidade() {
    velPermitida = parseFloat(document.getElementById('IdNum').value);
    velMarcada = parseFloat(document.getElementById('IdNum2').value);

    let excesso = velMarcada - velPermitida;
    let multa = 0;

    if (excesso <= 0) {
        alert ('Multa de R$0,00. Você está dentro do limite da velocidade. Nenhuma multa aplicada.');
    } else if (excesso <= 10){;
        alert ("Multa de R$50,00. Você ultrapassou o limite em até 10 km/h.");
    } else if (excesso <= 30) {
       alert ("Multa de R$100,00. Você ultrapassou o limite entre 11 e 30km/h.");
    } else {
        alert ("Multa de R$200,00. Você ultrapassou mais de 31 km/h o limite.");
}

}