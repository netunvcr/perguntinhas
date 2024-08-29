const perguntas = [
    {
        enunciado: "Você está com vontade de comer algo, você tem a opção de ir comer em um restaurante e interagir com as pessoas, ou pedir comida em casa e desfrutar de um jantar em sua própria companhia, o que você faria?",
        alternativas: [
            { texto: "Pediria comida em casa", pontuacao: 1 },
            { texto: "Sairia jantar em um restaurante", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você tem a opção de viajar por um final de semana inteiro, ou ficar na casa de seus pais, o que você faria?",
        alternativas: [
            { texto: "Vou viajar", pontuacao: 2 },
            { texto: "Fico na casa de meus pais!", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Quando alguém conversa com você, você tende a ser uma pessoa espontânea ou tímida?",
        alternativas: [
            { texto: "Pessoa espontânea", pontuacao: 2 },
            { texto: "Pessoa tímida", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Se alguém te pede para fazer algo e vocẽ não gostaria de fazer, você tem facilidade em negar ou você aceita para não magoar quem pediu?",
        alternativas: [
            { texto: "Nego educadamente", pontuacao: 1 },
            { texto: "Nunca nego", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você é alguém independente que consegue fazer qualquer coisa sem timidez, ou é dependende da presença de alguém para executar alggumas tarefas?",
        alternativas: [
            { texto: "Sou uma pessoa Independente", pontuacao: 1 },
            { texto: "Dependente da presença de alguém", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta

}
    });
