const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var gameState = 0;
var GB_IMG;
var earth;
var driedGroundIMG,oceanIMG,moistG;
var girlCollided,girlRunning,girl;
var BG;
var lifelvl1 = 15;

function preload(){
  polygon_img=loadImage("polygon.png");
  GB_IMG=loadImage("GW_IMG.png");
  driedGroundIMG =loadImage("ground.png");
  oceanIMG =loadImage("ocean.png");
  moistG =loadImage("MoisturizedGround.png")
  girlCollided =loadAnimation("GirlCollided.png")
  girlRunning= loadAnimation("GirlRun1.png","GirlRun2.png","GirlRun3.png")

}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.rectangle(200,200,20,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});
  earth = createSprite(400,200,50,50)
  earth.addImage(driedGroundIMG)
  earth.scale = 1.2
  earth.visible = false
  var ScoreWater = createSprite(50,100,20,100)

}
function draw() {
  drawSprites();
  if(gameState === 0){
  background("black")
  textSize(20)
  fill("red")
  text("Everyday we see trash on the floor.",20,20)
  text("Do we care to pick it up and throw it?",20,40)
  text("No, what's the reason? Obvious answer: ",20,60)
  text("It's not mine! But did you know just because of this small act of laziness we will have huge problems in the future...",20,80)
  text("This is another earth from another universe and this earth is going to go extinct...",20,100)
  text("So, Let's help an Earth hero Captain Carol save her earth!!!",20,120)
  fill("white")
  text("Click Here To Play",400,150)
  if(mousePressedOver(earth)){
    gameState = 3
  }
  }

  if(gameState === 2){
    background(oceanIMG)
    text("Fellow Citizens! We should not leave the importance of conserving water in this game. We should practise this in reality",20,20)
    text("Here are some ways to stop pollution of water:",20,40)
    text("1.Use Biodegradable Bags and find a replacement for plastic",20,60)
    var NextLvlButton = createSprite(450,300,100,20)
    drawSprites();
    if(mousePressedOver(NextLvlButton)){
      gameState = 3
    }

  }

  if(gameState === 3){
    //background(moistG)
   girl = createSprite(50,370,40,80)
   girl.addAnimation("running",girlRunning)
   girl.addAnimation("collided",girlCollided)
   girl.scale =0.1

  }

  if(gameState === 1){
  //background(driedGroundIMG);
earth.visible= true
 if(ground.y === 350){
  lifelvl1 -= 1
 }
 
  //Engine.update(engine);
  fill("blue")
  text("Lives Left:"+lifelvl1,50,20)
  textSize(20);
  fill("blue");
  text("Drag and Release Captain Carol to Restore the water in the Earth",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!! But remember there are only 15 chances in total so use it wisely...",360 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
  
}


function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon,{x:180,y:80}) 
    slingShot.attach(polygon);
}
}