
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree; 
var rock;
var thrower;
var ground; 
var chain;
var fruit1, fruit2, fruti3, fruit4, fruit5, fruit6, fruit7;



function setup() {
	createCanvas(3000, 700);


	engine = Engine.create();
	world = engine.world;

	rock = new Rock(160,500,20);
	fruit1 = new Fruit(1290,300,30);
	fruit2 = new Fruit(1390,250,30);
	fruit3 = new Fruit(1290,200,30);
	fruit4 = new Fruit(1380,300,30);
	fruit5 = new Fruit(1290,300,30);
	fruit6 = new Fruit(1190,300,30);
  fruit7 = new Fruit(1490,280,30);
  tree = new Tree(1290,680);
  ground = new Ground(0,680,4000,20);
	thrower = new Thrower(250,600);
	chain = new Chain(rock.body,{x:160, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue")

  fill('blue');
  textSize(24);
  text("Press 'Space' for second Rock", 90,130);

  ground.display();
  tree.display();
  thrower.display();
  rock.display();
  fruit1.display();
  fruit2.display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();
  fruit7.display();
  chain.display();

  var collide = {
    fruit1,
    fruit2,
    fruti3,
    fruit4,
    fruit5,
    fruit6,
    fruit7
  }

  detectCollision(rock, collide);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rick.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(rock.body,{x:160, y:500});
    chain.attach(rock.body);
  }
}
function detectCollision(lrock,lfruit){
  rockPosition = lrock.body.position;
  fruitPos = lfruit.body.position;

  var distance = dist(rockPosition.x, rockPosition.y, fruitPos.x, fruitPos.y);
  if(distance <= lfruit.r + lrock.r){
    Matter.Body.setStatic(lfruit.body, false);
  }

}
