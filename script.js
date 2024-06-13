const perguntas = [
    {
    enunciado: "Você está com vontade de comer algo, você tem a opção de ir comer em um restaurante e interagir com as pessoas, ou pedir comida em casa e desfrutar de um jantar em sua própria companhia, o que você faria?",
    alternativas: [
    "Pediria comida em casa",
    "Sairia jantar em um restaurante"
    ]
    },
    {
    enunciado: "Você tem a opção de viajar por um final de semana inteiro, ou ficar na casa de seus pais, o que você faria?",
    alternativas: [
    "Vou viajar",
    "Fica na casa de meus pais"
    ]
    },
    {
    enunciado: "Quando alguém conversa com você. você tende a ser uma pessoa espontânea ou tímida?",
    alternativas: [
    "Pessoa espontânea",
    "Pessoa tímida"
    ]
    },
    {
    enunciado: "Se alguém te pede para fazer algo e vocẽ não gostaria de fazer, você tem facilidade em negar ou você aceita para não magoar quem pediu?",
    alternativas: [
    "Nego educadamente",
    "Nunca nego"
    ]
    
    },
    {
    enunciado: "Você é alguém independente que consegue fazer qualquer coisa sem timidez, ou é dependende da presença de alguém para executar alggumas tarefas?",
    alternativas: [
    "Sou uma pessoa Independente",
    "Dependente da presença de alguém"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
