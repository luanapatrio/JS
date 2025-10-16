function calcularMedia() {
    let med1 = parseFloat(document.getElementById('IdNum').value);
    let med2 = parseFloat(document.getElementById('IdNum2').value);

    let media = (med1 + med2) / 2;

    if (media >= 6.0) {
        alert('Aluno aprovado!! Média' + media );
    } else {
        alert('Aluno reprovado!!' + media )
    }
}