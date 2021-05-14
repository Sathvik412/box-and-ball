class Ball{
    constructor(x,y,radius) {
        var options={
            'restitution':1.0,
            'friction':3.0,
            'density':2.0,
        } 
      
     this.body=Bodies.circle(x,y,radius,options)
    this.radius=radius
    this.x=x
    this.y=y
  World.add(world,this.body)   
    }
  display() {
    var pos= this.body.position
    var angle= this.body.angle
    push ()
    translate (pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER)
    fill ("blue")
    ellipse(0,0,this.radius,this.radius)
    pop ()
}

}