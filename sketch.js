var helicopterIMG, helicopterSprite, packageSprite,packageIMG, wallSprite1, wallSprite2, bottomSprite;
var packageBody,ground, wall1, wall2, bottom;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true, friction:100});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	//create the target area
	bottom = Bodies.rectangle(width/2, 640, 200, 20, {isStatic:true});
	World.add(world, bottom);
	wall1 = Bodies.rectangle(width/2-100,590,100,20,{isStatic:true});
	World.add(world,wall1);
	wall2 = Bodies.rectangle(width/2+100,590,100,20,{isStatic:true});
	World.add(world, wall2);

	bottomSprite=createSprite(bottom.position.x, bottom.position.y+20, 200, 20);
	bottomSprite.shapeColor = rgb(255, 0, 0);
	wallSprite1 = createSprite(wall1.position.x, wall1.position.y+20, 20, 100);
	wallSprite1.shapeColor = rgb(255, 0, 0);
	wallSprite2 = createSprite(wall2.position.x, wall2.position.y+20, 20, 100);
	wallSprite2.shapeColor = rgb(255, 0, 0);

	console.log(bottom);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false)
  }
}



