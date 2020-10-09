const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    bird1 = new bird(200, 200);

    box1 = new Box(700,300,50,75);
    box2 = new Box(900,300,50,75);
    box3 = new Box(715, 255,50,75)
    box4 = new Box(885, 255,50,75)

    pig1 = new pig(800, 300);
    pig2 = new pig(800, 255);
    pig3 = new pig(800,210);

    log1 = new log(800, 290, 300, PI/2);
    log2 = new log(800, 245, 300, PI/2);
    log3 = new log(800, 190, 100, PI/7);
    log4 = new log(865, 190, 100, PI/-7 );
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    pig3.display();
    bird1.display();
}