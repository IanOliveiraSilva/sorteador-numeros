const idiomas = {
    'pt': {
        'titulo': 'Sorteador de Números',
        'labelNumero1': 'Número 1:',
        'labelNumero2': 'Número 2:',
        'labelQuantidade': 'Quantidade de Números a Sortear:',
        'placeholderNumero1': 'Digite o primeiro número',
        'placeholderNumero2': 'Digite o segundo número',
        'placeholderQuantidade': 'Digite a quantidade de números a serem sorteados',
        'ordenação': 'Ordenação',
        'Crescente': 'Crescente',
        'Decrescente': 'Decrescente',
        'permitirRepetidos': 'Permitir números repetidos',
        'sortearNumeros': 'Sortear número(s)',
        'limparResultados': 'Limpar resultado',
        'reiniciar': 'Reiniciar',
        'exportarHistoricos': 'Exportar Histórico',
        'english': 'Inglês',
        'portugues': 'Português',
        'frances': 'Francês'
    },
    'en': {
        'titulo': 'Number Sorter',
        'labelNumero1': 'Number 1:',
        'labelNumero2': 'Number 2:',
        'labelQuantidade': 'Quantity of Numbers to Draw:',
        'placeholderNumero1': 'Enter the first number',
        'placeholderNumero2': 'Enter the second number',
        'placeholderQuantidade': 'Enter the number of numbers to be drawn',
        'ordenação': 'Sort',
        'Crescente': 'Ascending',
        'Decrescente': 'Descending',
        'permitirRepetidos': 'Allow repeated numbers',
        'limparResultados': 'Clear result',
        'sortearNumeros': 'Sort number',
        'reiniciar': 'Restart',
        'exportarHistoricos': 'Export History',
        'english': 'English',
        'portugues': 'Portuguese',
        'frances': 'French'
    },
    'fr': {
        'titulo': 'Tireur de Numéros',
        'labelNumero1': 'Numéro 1 :',
        'labelNumero2': 'Numéro 2 :',
        'labelQuantidade': 'Quantité de Numéros à Tirer :',
        'placeholderNumero1': 'Entrez le premier numéro',
        'placeholderNumero2': 'Entrez le deuxième numéro',
        'placeholderQuantidade': 'Entrez le nombre de numéros à tirer',
        'ordenação': 'Tri',
        'Crescente': 'Croissant',
        'Decrescente': 'Décroissant',
        'permitirRepetidos': 'Autoriser les numéros répétés',
        'sortearNumeros': 'Tirer le(s) numéro(s)',
        'limparResultados': 'Effacer le résultat',
        'reiniciar': 'Redémarrer',
        'exportarHistoricos': 'Exporter l\'historique',
        'english': 'Anglais',
        'portugues': 'Portugais',
        'francais': 'Français',
    }
};

const idiomaPadrao = 'en';

function traduzir(idioma) {
    const elementos = document.querySelectorAll('[data-traducao]');
    elementos.forEach(elemento => {
        const chave = elemento.getAttribute('data-traducao');
        elemento.textContent = idiomas[idioma][chave] || idiomas[idiomaPadrao][chave] || chave;
    });
}

traduzir(idiomaPadrao);
