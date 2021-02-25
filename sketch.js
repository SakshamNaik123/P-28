
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(530,230,20);
	mango3=new mango(650,370,20);
	mango4=new mango(600,300,20);
	mango5=new mango(690,280,20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  stone=new stone(150,300,20,20);

	
	slingshot = new SlingShot(stoneObj.body,{x:100,y:600});
	
	
	
	Engine.run(engine);
    
}

function draw() {
  rectMode(CENTER);
  background(230);
  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second Chance to Play!!",100 ,70);
  
 
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
  stoneObj.display();
  groundObject.display();
  slingshot.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
 
 

  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position
 
 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+lstone.r){
	   Matter.Body.setStatic(lmango.body,false);
   }
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		slingshot.attach(stoneObj.body);
	}
}