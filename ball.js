class Ball{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:2.3
        }
        this.x=x
        this.y=y
        
        this.body=Bodies.circle(this.x,this.y,5,options)
        World.add(world,this.body)


    }
    display(){
        var paperPosition=this.body.position
        push()
        
        ellipseMode(RADIUS)
        strokeWeight(3)
        fill("blue")
        ellipse(paperPosition.x,paperPosition.y,5,5)
        pop()

    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

}