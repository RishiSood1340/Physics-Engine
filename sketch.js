const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }
  var ball_option={
    restitution:1.0
  }

  ground = Bodies.rectangle(200,380,200,20,option);
  World.add(world, ground);
  console.log(ground);
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world, ball);

}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 200,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 20,20)
  drawSprites();
}