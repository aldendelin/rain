const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    for(var i =0;i<500;i++) {
        rain[i] = new Raindrop();
        rainfall(); 
    }
}

function draw(){
    background("white");
    Engine.update(engine);

   rain.display();
    drawSprites();
}

