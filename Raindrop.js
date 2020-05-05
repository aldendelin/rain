class Raindrop {
    constructor(x, y,radius) {
        var options = {
            'restitution':1,
            'friction':1,
            'density':1.0,
            'isStatic': false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("blue");
        fill("blue");
        ellipse(0,0 , this.radius,this.radius);
        pop();
      }
};