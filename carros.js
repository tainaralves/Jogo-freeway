let xCarros = [600,600,600,600,600,600]
let yCarros = [45,96,150,210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3]

let comprimentoCarro = 45;
let alturaCarro = 35;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i],comprimentoCarro,alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(carroPassouTela(xCarros[i])){
                xCarros[i] = 600;
        }
  }
}

function carroPassouTela(xCarro){
 return xCarro < - 50;
}