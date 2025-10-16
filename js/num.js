function calcularNumero() {
    let A = parseInt(document.getElementById('IdNum').value);
    let B = parseInt(document.getElementById('IdNum2').value);
    let X = parseInt(document.getElementById('IdNum3').value);
    let C;

    if(X >= 10) {
        C = A + B;
    } else {
        C = A - B;
    }

    alert("O resultado é " + C);

}
