var sea,sea_img;
var barco,barco_moving;


function preload(){
  sea_img=loadImage("sea.png");
barco_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);

   //crear el mar
sea=createSprite(200,200,400,400);
sea.addImage("sea",sea_img);
sea.scale=0.3;
sea.velocity.x=8;


  //crear sprite barco
barco=createSprite(50,300,20,50);
barco.addAnimation("moving",barco_moving);


//establecer tamaño y posición del barco
barco.scale=0.1;
barco.x=40;

 

  
}



function draw() {
  background("blue");
  
//codigo para reiniciar el fondo
if (sea.x<0){
sea.x=sea.width/2;
 }

 drawSprites();
}