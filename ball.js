class Ball{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        //ellipseMode(RADIUS);
        fill("pink");
       // circle(0,0,this.radius);
        imageMode(CENTER);
        image(this.image,0,0,this.radius+50,this.radius+50);
        pop();
    }
}