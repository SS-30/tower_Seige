const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	block1=new Block(600,400,30,30)
	block2=new Block(650,400,30,30)
	block3=new Block(700,400,30,30)
	block4=new Block(630,350,30,30)
	block5=new Block(670,350,30,30)
	block6=new Block(650,300,30,30)
	block7=new Block(900,400,30,30)
	block8=new Block(950,400,30,30)
	block9=new Block(1000,400,30,30)
	block10=new Block(930,350,30,30)
	block11=new Block(970,350,30,30)
	block12=new Block(950,300,30,30)
	ball=new Polygon(50,150,70,50)
	slingshot = new Rope(ball.body,{x:200, y:50});


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  ball.display()
  slingshot.display()
  drawSprites();
 
}

function mouseDragged(){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32 && bird.body.speed<1){
        slingshot.attach(bird.body)
        bird.trejectory=[]
        Matter.Body.setPosition(bird.body, {x: 200,y: 50})
    }
}
