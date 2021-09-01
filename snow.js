class Snow{
    constructor(x,y){
        var options = {
            restituition:0.5,
            friction:0.5
        }
        this.body = Bodies.circle(x,y,5,options)
        this.image = loadImage("snow4.webp")
        this.radius = 5
        World.add(world,this.body)
    }
    display(){
     image(this.image,this.body.position.x,this.body.position.y,25,25)
    }
}