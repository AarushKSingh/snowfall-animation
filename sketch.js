const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var snow = []


function preload(){
  Bsg=loadImage("snow1.jpg")
  kid1 = loadImage("kidd.png")
  snowman = loadImage("snowmann.png")
}



function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  for(var i = 0;i<100;i++){
    snow[i] = new Snow(random(0,800),random(0,100))
  }
  kid = createSprite(400, 200, 50, 50);
  kid.addImage(kid1)
  snowmann = createSprite(600,300,50,50)
  snowmann.addImage(snowman)
}

function draw() {
  background(Bsg);  
  Engine.update(engine)
  for(var i = 0;i<100;i++){
    snow[i].display()
  }
  drawSprites();
}