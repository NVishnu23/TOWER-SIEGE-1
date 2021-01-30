const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world

var ground;
var stand1;
var stand2;
var block1, block2, block3, block4, block5, block6, block7;
var block8, block9, block10,block11, block12;
var block13, block14, block15; 
var block16, block17, block18, block19, block20;
var block21, block22, block23; 
var block24;
var holder;
var polygon;
var slingShot;
var polygon_img;

function preload(){
    polygon_img=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    stand1 = new Stand(380,300,270,10); 
    stand2 = new Stand(700,200,200,10);

    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);   
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    
    block8 = new Block(310,235,30,40);
    block9 = new Block(340,235,30,40);
    block10 = new Block(370,235,30,40);
    block11 = new Block(400,235,30,40);
    block12 = new Block(430,235,30,40);

    block13 = new Block(340,195,30,40);
    block14 = new Block(370,195,30,40);
    block15 = new Block(400,195,30,40);

    block16 = new Block(645,125,30,40);
    block17 = new Block(675,125,30,40);
    block18 = new Block(705,125,30,40);
    block19 = new Block(735,125,30,40);
    block20 = new Block(765,125,30,40);

    block21 = new Block(675,95,30,40);
    block22 = new Block(705,95,30,40);
    block23 = new Block(735,95,30,40);

    block24 = new Block(705,45,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

   slingShot = new SlingShot(this.polygon,{x:200,y:200});

}
    function draw(){
    background("brown");
    Engine.update(engine);
    ground.display();
     
    stand1.display();
    stand2.display();

    stroke(15);
    fill("blue");
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    stroke(15);
    fill("orange");
    block8.display();
    block9.display();
    block10.display();
    block11.display(); 
    block12.display();
    stroke(15);
    fill("pink");

    block13.display();
    block14.display();
    block15.display();

    stroke(15);
    fill("orange");
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    stroke(15);
    fill("violet");

    block21.display();
    block22.display();
    block23.display();
     stroke(15);
     fill("yellow");
    block24.display();

    imageMode(CENTER);
    image(polygon_img, polygon.position.x, polygon.position.y,40,40);

    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingShot.fly();
  }








