var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30, 52);
  thickness=random(22,83)
  //console.log(speed);

  bullet=createSprite(50,200,40,10);
  bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX=speed;
}

function draw() {
  background(20,255,255);  
//car1.collide(wall);


  if (bullet.collide(wall)){
    bullet.velocityX=0;
    //var damage = 0.5 * weight * speed * speed / thickness*thickness*thickness;
    var damage = (0.5 * weight * speed * speed / thickness*3)/10000;
    console.log (damage);

    if (damage>10) {
      bullet.shapeColor="red";
    }

    if (damage<10){
      bullet.shapeColor="green";
    }
  
  }
  
 


  drawSprites();
}


  