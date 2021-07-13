var bdgImg;
var sleepIng;
var brushImg;
var drinkAni;
var gymAni1;
var gymAni2;
var bathAni;
var eatAni;
var moveAni;

function preload() {
 bgdImg = loadImage("images/iss.png");
 sleepImg = loadImage("images/sleep.png");
 brushImg = loadImage("images/brush.png");
 drinkAni = loadAnimation("images/drink1.png", "images/drink2.png")
 gymAni1 = loadAnimation("images/gym1.png", "images/gym2.png");
 gymAni2 = loadAnimation("images/gym11.png", "images/gym12.png");
 bathAni = loadAnimation("images/bath1.png", "images/bath2.png");
 eatAni = loadAnimation("images/eat1.png", "images/eat2.png");
 moveAni = loadAnimation("images/move.png", "images/move1.png", "images/move2.png");
}

function setup() {
  createCanvas(966,657);
   
  edges = createEdgeSprites();
  
  
  bdg = createSprite(483, 328.5, 50, 50);
  bdg.addImage(bgdImg);
  bdg.scale = 0.2;
  
  astronaut = createSprite(490, 350, 50, 50);
  
  astronaut.addImage(sleepImg);
  astronaut.scale = 0.12;
  astronaut.bounceOff(edges);
  
}

function draw() {
  background(255,255,255);
  
  if (keyDown("b")){
    astronaut.addImage("brushing", brushImg)
    astronaut.changeImage("brushing");
    astronaut.y = 450;
  }

  if(keyDown("d")){
    astronaut.addAnimation("drinking", drinkAni);
    astronaut.changeAnimation("drinking");
    astronaut.y = 450;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("g")){
    astronaut.addAnimation("gym1", gymAni1);
    astronaut.changeAnimation("gym1");
    astronaut.y = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("y")){
    astronaut.addAnimation("gym2", gymAni2);
    astronaut.changeAnimation("gym2");
    astronaut.y = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("a")){
    astronaut.addAnimation("bathing", bathAni);
    astronaut.changeAnimation("bathing");
    astronaut.y = 450;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("e")){
    astronaut.addAnimation("eating", eatAni);
    astronaut.changeAnimation("eating");
    astronaut.y = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", moveAni);
    astronaut.changeAnimation("moving");
    astronaut.y = 500;
    //astronaut.x = 100;
    astronaut.velocityX = -1;
    astronaut.velocityY = -1;
  }

  if(keyDown("s")){
    astronaut.addAnimation("sleep", sleepImg);
    astronaut.changeAnimation("sleep");
    astronaut.y = 350;
    astronaut.x = 490;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();
  textSize(30);
  fill("black");
  text("Instructions:", 421, 50);
  textSize(22);
  fill("white");
  text("Press any of the following keys on your keyboard to see an Astronaut's Daily Routine one-by-one", 10, 95);
  text("(b, g, e, a, y , m, d, s)", 400, 135);
}