const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,ball1,sky;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box (200,200,10,10)
    ball = new Ball (50,50,25,25)
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    ball.display()
}