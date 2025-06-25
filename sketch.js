//Feito com IA; Elabore umcódigo em linguagem JavaScript para o p5.js. elabore um quiz com as seguintes perguntas Onde geralmente é atribuida a origem da maça?  Qual o espaçamento do trigo? O feijão é rico em que? O que nós podemos dizer do arroz? Quais são os benefícios das massas?


let estado = "inicio"; // "inicio", "quiz" ou "fim"
let perguntas = [
  {
    pergunta: "Onde geralmente é atribuída a origem da maçã?",
    opcoes: [
      "Ásia central e ao Cáucaso",
      "Austrália",
      "África",
      "América do Norte"
    ],
    respostaCorreta: 0,
    explicacao: "A maçã tem sua origem atribuída à região da Ásia Central e Cáucaso, onde ainda hoje crescem variedades silvestres."
  },
  {
    pergunta: "Uma consequência do processo de modernização da agricultura brasileira é? ",
    opcoes: [
      "diminuição da produtividade das lavouras.",
      "atenuação do êxodo rural do interior local.",
      "redução do desemprego do tipo estrutural.",
      "modificação intensa das paisagens naturais."
    ],
    respostaCorreta: 4,
    explicacao: "A modernização da agricultura brasileira resultou no registro de diferentes impactos ambientais — em meios naturais como ar, água e solo — que são fruto da transformação das paisagens naturais do país."
  },
  {
    pergunta: "O feijão é rico em que?",
    opcoes: [
      "Sódio, agro, potássio, vitaminas",
      "Proteínas, fibras, carboidratos, vitaminas e minerais",
      "Fibras, sódio, potássio, vitaminas",
      "Agro, proteínas, carboidratos, vitaminas e minerais"
    ],
    respostaCorreta: 1,
    explicacao: "O feijão é rico em proteínas vegetais, fibras alimentares, carboidratos complexos, vitaminas do complexo B e minerais como ferro e potássio."
  },
  {
    pergunta: "O que nós podemos dizer do arroz?",
    opcoes: [
      "É ferro para o nosso corpo",
      "É o cereal menos consumido do mundo",
      "É o cereal mais produzido do mundo",
      "Para ajudar na nossa saúde"
    ],
    respostaCorreta: 2,
    explicacao: "O arroz é o cereal mais produzido e consumido no mundo, sendo alimento básico para mais da metade da população mundial."
  },
  {
    pergunta: "Quais são os benefícios das massas?",
    opcoes: [
      "Ganhar massa muscular",
      "Ganhar peso", 
      "Ser saudável",
      "Uma boa fonte de carboidratos, que fornecem energia para o corpo"
    ],
    respostaCorreta: 3,
    explicacao: "As massas são excelente fonte de carboidratos complexos, que fornecem energia de forma gradual e sustentada para o organismo."
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respostaSelecionada = null;
let mostrarExplicacao = false;

function setup() {
  createCanvas(800, 500);
  textAlign(CENTER, CENTER);
  textFont('Arial');
  rectMode(CENTER);
}

function draw() {
  background(240);
  
  // Desenha a tela atual
  if (estado === "inicio") {
    desenharTelaInicial();
  } else if (estado === "quiz") {
    desenharTelaQuiz();
  } else if (estado === "fim") {
    desenharTelaFinal();
  }
  
  // Barra de progresso (em todas as telas exceto a inicial)
  if (estado !== "inicio") {
    desenharBarraProgresso();
  }
}

function desenharTelaInicial() {
  // Título
  fill(50, 100, 50);
  textSize(36);
  text("Quiz Agrícola", width/2, 100);
  
  // Subtítulo
  fill(70);
  textSize(20);
  text("Teste seus conhecimentos sobre agricultura", width/2, 150);
  
  // Ilustração (simples)
  fill(100, 180, 100);
  ellipse(width/2, 230, 120, 120);
  fill(240);
  textSize(60);
  text("?", width/2, 240);
  
  // Botão Iniciar
  fill(80, 160, 80);
  rect(width/2, 350, 200, 60, 15);
  fill(255);
  textSize(24);
  text("Iniciar Quiz", width/2, 350);
  
  // Rodapé
  fill(100);
  textSize(14);
  text("Desenvolvido com p5.js", width/2, 450);
}

function desenharTelaQuiz() {
  if (mostrarExplicacao) {
    // Tela de explicação
    fill(50);
    textSize(22);
    text(perguntas[perguntaAtual-1].explicacao, width/2, 150, 700, 200);
    
    // Botão Continuar
    fill(80, 160, 80);
    rect(width/2, 350, 160, 50, 10);
    fill(255);
    textSize(20);
    text(perguntaAtual < perguntas.length ? "Próxima Pergunta" : "Ver Resultado", width/2, 350);
  } else {
    // Tela da pergunta
    fill(50);
    textSize(24);
    text(perguntas[perguntaAtual].pergunta, width/2, 80);
    
    // Opções de resposta
    for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
      let y = 160 + i * 70;
      
      // Caixa da opção
      if (respostaSelecionada === i) {
        fill(150, 200, 255);
      } else {
        fill(255);
      }
      stroke(50);
      strokeWeight(1);
      rect(width/2, y, 600, 50, 5);
      
      // Texto da opção
      fill(0);
      noStroke();
      textSize(18);
      text(perguntas[perguntaAtual].opcoes[i], width/2, y);
    }
    
    // Botão Confirmar (só aparece quando uma opção é selecionada)
    if (respostaSelecionada !== null) {
      fill(80, 160, 80);
      rect(width/2, 400, 150, 45, 10);
      fill(255);
      textSize(20);
      text("Confirmar", width/2, 400);
    }
  }
}

function desenharTelaFinal() {
  // Título
  fill(50, 100, 50);
  textSize(32);
  text("Quiz Concluído!", width/2, 100);
  
  // Resultado
  fill(70);
  textSize(24);
  text(`Você acertou ${pontuacao} de ${perguntas.length} perguntas`, width/2, 150);
  
  // Mensagem personalizada
  let percentual = (pontuacao / perguntas.length) * 100;
  textSize(20);
  if (percentual >= 80) {
    fill(80, 160, 80);
    text("Excelente! Você é um expert em agricultura!", width/2, 200);
  } else if (percentual >= 50) {
    fill(210, 160, 0);
    text("Bom trabalho! Você sabe bastante sobre o assunto!", width/2, 200);
  } else {
    fill(200, 80, 80);
    text("Você pode melhorar! Continue aprendendo!", width/2, 200);
  }
  
  // Botão Reiniciar
  fill(80, 160, 80);
  rect(width/2, 280, 200, 50, 10);
  fill(255);
  textSize(20);
  text("Jogar Novamente", width/2, 280);
  
  // Ilustração final
  fill(150, 200, 100);
  ellipse(width/2, 380, 100, 100);
  fill(255);
  textSize(40);
  text(`${nf(percentual, 0, 0)}%`, width/2, 380);
}

function desenharBarraProgresso() {
  let progresso = estado === "fim" ? 1 : (perguntaAtual / perguntas.length);
  
  // Barra de fundo
  noStroke();
  fill(220);
  rect(width/2, 30, width * 0.8, 20, 10);
  
  // Barra de progresso
  fill(80, 160, 80);
  rect(width/2 - width * 0.4 + (width * 0.8 * progresso)/2, 30, width * 0.8 * progresso, 20, 10);
  
  // Texto do progresso
  fill(50);
  textSize(14);
  text(`${perguntaAtual}/${perguntas.length}`, width * 0.9, 30);
}

function mousePressed() {
  if (estado === "inicio") {
    // Verifica clique no botão Iniciar
    if (dist(mouseX, mouseY, width/2, 350) < 100 && mouseY > 320 && mouseY < 380) {
      estado = "quiz";
    }
  } 
  else if (estado === "quiz") {
    if (mostrarExplicacao) {
      // Verifica clique no botão Continuar
      if (dist(mouseX, mouseY, width/2, 350) < 80 && mouseY > 325 && mouseY < 375) {
        mostrarExplicacao = false;
        if (perguntaAtual >= perguntas.length) {
          estado = "fim";
        }
      }
    } else {
      // Verifica clique nas opções de resposta
      for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
        let y = 160 + i * 70;
        if (mouseX > width/2 - 300 && mouseX < width/2 + 300 &&
            mouseY > y - 25 && mouseY < y + 25) {
          respostaSelecionada = i;
        }
      }
      
      // Verifica clique no botão Confirmar
      if (respostaSelecionada !== null && 
          dist(mouseX, mouseY, width/2, 400) < 75 && mouseY > 378 && mouseY < 422) {
        // Verifica resposta
        if (respostaSelecionada === perguntas[perguntaAtual].respostaCorreta) {
          pontuacao++;
        }
        mostrarExplicacao = true;
        respostaSelecionada = null;
        perguntaAtual++;
      }
    }
  } 
  else if (estado === "fim") {
    // Verifica clique no botão Reiniciar
    if (dist(mouseX, mouseY, width/2, 280) < 100 && mouseY > 255 && mouseY < 305) {
      // Reinicia o quiz
      perguntaAtual = 0;
      pontuacao = 0;
      respostaSelecionada = null;
      mostrarExplicacao = false;
      estado = "inicio";
    }
  }
}