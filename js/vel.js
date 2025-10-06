function calcularVelocidade() {
    velPermitida = parseFloat(document.getElementById('IdNum').value);
    velMarcada = parseFloat(document.getElementById('IdNum2').value);

    let excesso = velMarcada - velPermitida;
    let multa = 0;
    let mensagem = ""

    if (excesso <= 0) {
        mensagem ('Você está dentro do limite da velocidade. Nenhuma multa aplicada.');
    } else if (excesso <= 10){
        multa = 50;
        mensagem = "Você ultrapassou o limite em até 10 km/h.";
    } else if (excesso <= 30) {
        multa = 100;
        mensagem = "Você ultrapassou o limite entre 11" 
    }

}