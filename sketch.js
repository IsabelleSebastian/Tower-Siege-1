const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ground,landing,stone,slingshot

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

Ground = new ground(250,493,500,15);
landing = new ground(250,350,220,10);
box1 = new Block(199,319,50,50);
box2 = new Block(250,319,50,50);
box3 = new Block(301,319,50,50);
box4 = new Block(224,268,50,50);
box5 = new Block(275,268,50,50);
box6 = new Block(250,217,50,50);
stone = new polygon(100,125);
slingshot = new slingShot(stone.body,{x: 105,y: 115});

}

function draw(){
    background("darkgrey");
    Engine.update(engine);

Ground.display();
landing.display();
box1.shapeColor = "white"
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
stone.display();
slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingshot.fly();
}




