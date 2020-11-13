const Engine=Matter.Engine;

const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var object;
function setup() {
  createCanvas(400,400);
  
  //createSprite(400, 200, 50, 50);
 var object_options={
   isStatic:true
  
 }
  engine=Engine.create();
  world=engine.world;
  object=Bodies.rectangle(200,100,50,50,object_options);
 
  World.add(world,object);
  console.log(object);
  console.log(object. type);
  console.log(object.position.x);
}

function draw() {
  background("black");  
  Engine.update(engine);  
 rectMode(CENTER);
rect(200,200,50,50);
rect(object.position.x,object.position.y,50,50);


  drawSprites();
}