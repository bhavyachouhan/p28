
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 560);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(690,500,15,90);
	ground = new Ground(600,height,1200,20);
    ball = new Ball(100,500,10);

	
	Engine.run(engine);
    console.log(box1);
    rope = new SlingShot(ball.body,{x:200, y:280});
}



function draw() {
  rectMode(CENTER);
  background("blue");
  text(mouseX+"  :  "+mouseY,100,50);  
  strokeWeight(4);
  drawSprites();
  ball.display();
  box1.display();
  ground.display();
  rope.display();
 
}
//function keyPressed() {
	//if (keyCode === UP_ARROW) {
	//Matter.Body.applyForce(ball.body,ball.body.position,{x:850,y:-750});
	// }
   //}

   function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}