var fixedRect,movingRect;
function setup() {

  createCanvas(800,400);
  
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect2 = createSprite(600, 200, 50, 80);

}

function draw() {

  background(0); 

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 

if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 && 
  fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2 && 
  movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2)

  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}



else if(movingRect.x-fixedRect2.x<fixedRect2.width/2+movingRect.width/2 && 
  fixedRect2.x - movingRect.x < fixedRect2.width/2+movingRect.width/2 && 
  fixedRect2.y - movingRect.y < fixedRect2.height/2+movingRect.height/2 && 
  movingRect.y - fixedRect2.y < fixedRect2.height/2+movingRect.height/2)

  {movingRect.shapeColor="blue";
  fixedRect2.shapeColor="blue";

}
else {movingRect.shapeColor="green";
fixedRect2.shapeColor="green";
fixedRect.shapeColor = "green";

}
  drawSprites();
}
