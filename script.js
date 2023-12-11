function sortearNumero() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let ordenacao = document.getElementById('ordenacao').value;

    if (isNaN(numero1) || isNaN(numero2) || isNaN(quantidade)) {
        alert('Por favor, insira números válidos.');
        return;
    }

    let resultados = [];
    for (let i = 0; i < quantidade; i++) {
        let resultado = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
        resultados.push(resultado);
    }

    if (ordenacao === 'crescente') {
        resultados.sort(function(a, b) {
            return a - b;
        });
    } else if (ordenacao === 'decrescente') {
        resultados.sort(function(a, b) {
            return b - a;
        });
    }

    document.getElementById('result').innerText = 'Número(s) sorteado(s): ' + resultados.join(', ');
}
