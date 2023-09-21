 // let const var
let xBolinha = 300; // Padrão camelCase
let yBolinha = 200;
let diametro = 25;
let raio = diametro / 2;
let velocidadeXbolinha = 2;
let velocidadeYbolinha = 3;

// Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variáveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

function setup() {
  createCanvas(600, 400);
  console.log("iniciou o setup");
}

function draw() {
  background(0);
  mostraBolinha(); // Chamando a função mostra bolinha
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificaColisaoRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
}

// Cria a função mostraBolinha
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
  if (xBolinha > width || xBolinha < 0) {
    velocidadeXbolinha *= -1;
  }

  if (yBolinha > height || yBolinha < 0) {
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function movimentaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadeXbolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteAltura / 2;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente() {
  colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    raqueteAltura,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadeXbolinha *= -1;
  }
}
