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
        mostrarResultado(resultados, ordenacao);
    }

    atualizarHistorico(resultados);
}

function mostrarResultado(resultados, ordenacao) {
    resultados.sort((a, b) => (ordenacao === 'crescente') ? a - b : b - a);

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Número(s) sorteado(s): ' + resultados.join(', ');
    resultDiv.classList.remove('fade-in');

    resultDiv.offsetHeight;

    resultDiv.classList.add('fade-in');
}

function limparResultado() {
    document.getElementById('result').innerText = '';
}

function atualizarHistorico(resultado) {
    numerosSorteados = numerosSorteados.concat(resultado);

    let historico = document.getElementById('historico');
    historico.innerHTML = '';

    let startIndex = Math.max(0, numerosSorteados.length - 5);

    for (let i = startIndex; i < numerosSorteados.length; i++) {
        let historicoCard = document.createElement('div');
        historicoCard.classList.add('historico-card');

        let icon = document.createElement('span');
        icon.classList.add('icon');
        icon.innerHTML = '<i class="bi bi-check-circle-fill"></i>';

        let opcoesDataHora = { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' };
        let dataHora = new Date().toLocaleString(undefined, opcoesDataHora);

        let historicoText = document.createElement('p');
        historicoText.innerHTML = `${icon.outerHTML} Sorteio anterior (${dataHora}): ${numerosSorteados[i]}`;

        historicoCard.appendChild(historicoText);
        historico.appendChild(historicoCard);
    }
}

function reiniciar() {
    document.getElementById('numero1').value = 1;
    document.getElementById('numero2').value = 10;
    document.getElementById('quantidade').value = '1';

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
