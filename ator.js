let xAtor = 97;
let yAtor = 366;

let colisao = false;

let meusPontos = 0;


function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
}

function podeSeMover(){
  return yAtor < 366;
}
function verificarColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 25)
      if(colisao){
        atorVoltaParaInicio();
        somColidiu.play();
          if (pontosMaiorQueZero()){
           meusPontos -= 1;
          }
      }
  }
}

function atorVoltaParaInicio(){
  yAtor = 366;
}

function incluirPlacar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,0,255));
  text(meusPontos, width / 5, 27);
}

function marcaPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    atorVoltaParaInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}