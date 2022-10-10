var ship;
var sea;
var seaImg;
var shipImg;


function preload(){

seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

sea = createSprite(00,100,windowWidth,windowHeight);
sea.addImage("seaImg",seaImg);

ship = createSprite(1000,500,30,30);
ship.addAnimation("shipImg",shipImg);



}

function draw() {
  background("blue");
    drawSprites();

 
}
