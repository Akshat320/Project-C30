
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var polygon;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground = new Ground(600,695,1200,10);
	platform1 = new Ground(630,460,215,10);
	platform2 = new Ground(940,340,180,10);

	//Bottom
	
	box1 = new Box(540, 430, 30, 50);
	box2 = new Box(570, 430, 30, 50);
	box3 = new Box(600, 430, 30, 50);
	box4 = new Box(630, 430, 30, 50);
	box5 = new Box(660, 430, 30, 50);
	box6 = new Box(690, 430, 30, 50);
	box7 = new Box(720, 430, 30, 50);

	//semi-Bottom

	box8 = new Box(570, 380, 30, 50);
	box9 = new Box(600, 380, 30, 50);
	box10 = new Box(630, 380, 30, 50);
	box11 = new Box(660, 380, 30, 50);
	box12 = new Box(690, 380, 30, 50);

	//Middle
	box13 = new Box(600, 330, 30, 50);
	box14 = new Box(630, 330, 30, 50);
	box15 = new Box(660, 330, 30, 50);

	//Top
    box16 = new Box(630, 280,30,50);

	//Bottom
	box17 = new Box(880, 310, 30,50);
	box18 = new Box(910, 310, 30,50);
	box19 = new Box(940, 310, 30,50);
	box20 = new Box(970, 310, 30,50);
	box21 = new Box(1000, 310, 30,50);

	//Bottom
	box22 = new Box(910, 260, 30,50);
	box23 = new Box(940, 260, 30,50);
	box24 = new Box(970, 260, 30,50);

	//Top
	box25 = new Box(940, 210, 30,50);

  polygon = new Polygon(240, 620, 40);

  slingshot = new SlingShot(polygon.body, {x: 100, y: 400});

 // var render = Render.create({
    //element: document.body,
   // engine: engine,
    //options: {
      //width: 1300,
      //height: 600,
      //wireFrames: false
    //}
  //})


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  Engine.update(engine);

  fill("blue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("red");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box22.display();
  box23.display();
  box24.display();


  fill("yellow")
  box13.display();
  box14.display();
  box15.display();

  fill("pink");
  box16.display();
  box25.display();

  platform1.display();
  platform2.display();
  ground.display();
  polygon.display();
  slingshot.display();
    
  drawSprites();
 
}

function mouseDragged()
{
 Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
}

function mouseReleased()
{

  slingshot.fly();
 // {isStatic: false}
}

function keyPressed()
{
  if (keyCode === 32)
  {
    Matter.Body.setPosition(polygon.body, {x:240, y:420});
    slingshot.attach(polygon.body);
  }
}

