const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    background("white");
    Engine.update(engine);

    for(var num = 25; num < 380; num=num+5) { 
         rain = new Raindrop(num,num,10);
         rain.velocityY= 5;  
    }
    
    rain.display();
    drawSprites();
};