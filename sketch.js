
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper (50,600,20);
ground=new Ground(400,height,800,20);
dustbin1=createSprite(600,685,150,10);
dustbin1.shapeColor="white"
dustbin2=createSprite(525,630,10,100);
dustbin2.shapeColor="white"
dustbin3=createSprite(675,630,10,100);
dustbin3.shapeColor="white"


	Engine.run(engine);
  
}


function draw() {
    background(0);
	rectMode(CENTER);

paper.display();
ground.display();

  
keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



