var imagemDaTorre, torre;
var imagemDaPorta, porta, grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var grupoDeBlocoInvisivel, blocoInvisivel;
var estadoJogo = "JOGAR"

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,600);
  
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
}


function draw(){
  background(200);
  
  //ESTADO JOGAR: 
  if (estadoJogo === "JOGAR") {
      if(torre.y > 400){
          torre.y = 300
      }
  
  }
  
  
  
   //ESTADO ENCERRAR:
  if (estadoJogo === "ENCERRAR"){
    
    textSize(30);
    text("Game Over", 230,250)
  }
  
}



 //FUNÇÃO GERAR PORTAS: 
function gerarPortas() {
  if (frameCount % 240 === 0) {
  
  
  
  
  }
  
}











