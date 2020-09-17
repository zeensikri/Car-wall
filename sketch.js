var car,wall;
var weight,speed;
var deformation;



function setup() {
  
  createCanvas(1280,700);
 

  weight=random(300,1500);
  speed=random(55,90);
  wall=createSprite(1000,350,20,3500);
  car=createSprite(100,350,180,100);
  car.velocityX = speed;
 
  wall.shapeColor=color("maroon");
} 
function draw()
{
  background("lightgrey");  


  if (wall.x-car.x < car.width/2 + wall.width/2){
    car.velocityX=0;
    var deformation=0.5 *weight * speed * speed/22509;

    if(deformation>160){
      car.shapeColor=shapeColor("red");
    }

    if(deformation>140 &&deformation>110){
      car.shapeColor=color("yellow");
    }

   if(deformation<90){
     car.shapeColor=color("green");
   }


   }



  drawSprites();
}