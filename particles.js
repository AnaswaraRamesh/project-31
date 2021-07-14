class Particle{
    constructor(x,y,r){
        this.x = x;
        this.y = y;
       this.r = r;
        this.color = color(random(0,255), random(0,255), random(0,255))
        this.body = Bodies.circle(x,y,10);
        World.add(world, this.body);
    }
    display(){
        fill(this.color)
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y,this.r)
}
}