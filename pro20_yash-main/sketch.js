var car,wall,speed,weight;
var deformation;

function setup() {
 createCanvas(1600,400);
 car = createSprite(50, 200, 25, 10);
 wall = createSprite(1500,200,60,height/2);
 speed = random(55,90);
 weight = random(400,1500);
 car.velocityX = speed;
}

function draw() {
  background(0);  
 // car.collide(wall);
  if (wall.x-car.x < (car.width/2+wall.width/2)){
    car.velocityX=0;
    deformation = (0.5*weight*speed*speed)/22500;
  }
    if (deformation < 100){
      car.shapeColor = "green";
    }
    if (180>deformation>100){
      car.shapeColor = "yellow";
    }
    if (deformation > 180){
      car.shapeColor = "red";
    }
  
  
  drawSprites();
}

function isTouching(object1,object2){
  object1.x - object2.y < object2.width/2 + object1.width/2
  && object2.y - object1 < object2.width/2 + object1.width/2
  &&  object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2
}