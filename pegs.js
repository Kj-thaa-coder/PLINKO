class Peg
{
    constructor(x,y,r)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            frictionAir:0.000000000001,
            density:1
    
    }



this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/1.5, options)

World.add(world, this.body);





}
display()
{
    
    var pegpos=this.body.position;

    push()
    translate(pegpos.x, pegpos.y);
    rotate(this.body.angle)
    ellipseMode(RADIUS)
    strokeWeight(2);
    fill("lightgray")
    ellipse(0,0,this.r, this.r);
    pop()
    
    }


}
