var barco1
var barco2


function preload(){
barco1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  barco2=createSprite();
  barco2.addAnimation("bolt",barco1);
  barco2.scale=0.5
}

function draw() {
  background("blue");
    drawSprites();

 
}
