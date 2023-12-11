let numerosSorteados = [];

function sortearNumero() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let ordenacao = document.getElementById('ordenacao').value;
    let permitirRepetidos = document.getElementById('permitirRepetidos').checked;


    if (isNaN(numero1) || isNaN(numero2) || isNaN(quantidade) || numero2 <= numero1) {
        alert('Por favor, insira números válidos e certifique-se de que o segundo número é maior que o primeiro.');
        return;
    }
    if (quantidade <= 0 || quantidade > 100) {
        alert('A quantidade de números a serem sorteados deve estar entre 1 e 100.');
        return;
    }

    let resultados = [];
    for (let i = 0; i < quantidade; i++) {
        let resultado;
        do {
            resultado = Math.floor(Math.random() * (numero2 - numero1 + 1)) + numero1;
        } while (!permitirRepetidos && resultados.includes(resultado));

        resultados.push(resultado);
    }

    resultados.sort((a, b) => (ordenacao === 'crescente') ? a - b : b - a);

    let resultDiv = document.getElementById('result');
    resultDiv.classList.remove('fade-in');
    resultDiv.innerText = 'Número(s) sorteado(s): ' + resultados.join(', ');
    resultDiv.classList.add('fade-in');
    atualizarHistorico(resultados);
}

function limparResultado() {
    document.getElementById('result').innerText = '';
}

function atualizarHistorico(resultado) {
    let historico = document.getElementById('historico');

    let historicoCard = document.createElement('div');
    historicoCard.classList.add('historico-card');

    let icon = document.createElement('span');
    icon.classList.add('icon');
    icon.innerHTML = '<i class="bi bi-check-circle-fill"></i>';

    let historicoText = document.createElement('p');
    historicoText.innerHTML = `${icon.outerHTML} Sorteio anterior: ${resultado.join(', ')}`;

    historicoCard.appendChild(historicoText);
    historico.insertBefore(historicoCard, historico.firstChild);

    numerosSorteados = numerosSorteados.concat(resultado);

}


function reiniciar() {
    document.getElementById('numero1').value = 1;
    document.getElementById('numero2').value = 10;
    document.getElementById('quantidade').value = '';

    document.getElementById('permitirRepetidos').checked = false;

    document.getElementById('result').innerText = '';

    document.getElementById('historico').innerHTML = '';
}

function mudarIdioma(idioma) {
    traduzir(idioma);
}

function exportarHistorico() {
    const historico = document.getElementById('historico');
    const historicoText = historico.innerText;

    if (!historicoText.trim()) {
        alert('O histórico está vazio. Não há nada para exportar.');
        return;
    }

    const blob = new Blob([historicoText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'historico.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}
