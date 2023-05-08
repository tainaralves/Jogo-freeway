let imagemAtor;
let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somColidiu;
let somPontos;


function preload(){
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3,imagemCarro1, imagemCarro2, imagemCarro3];
  somTrilha= loadSound("sons/trilha.mp3");
  somColidiu = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}
