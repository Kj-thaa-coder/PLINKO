class Wall
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.width = width;
this.height = height;
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);



}
display()
{


    
    var wallpos=this.body.position;

    push()
    translate(wallpos.x, wallpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    strokeWeight(3);
    fill("black")
    rect(0,0,this.width, this.height);
    pop()
    
    }


}