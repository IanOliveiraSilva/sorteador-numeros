function sortearNumero() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(quantidade)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    let resultados = [];
    for (let i = 0; i < quantidade; i++) {
        let resultado = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
        resultados.push(resultado);
    }

    document.getElementById('result').innerText = 'Número(s) sorteado(s): ' + resultados.join(', ');
}
