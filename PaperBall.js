class PaperBall{

    constructor(x,y){
       var options = {
           'restitution': 0.8,
           'friction': 0.3,
           'density': 1.2
       }
      
       this.body = Bodies.circle(x,y,25,options);
       this.radius = 25;
       this.image = loadImage("paper.png");
       World.add(world,this.body);
    }
 
    display(){
       push(); 
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       imageMode(CENTER);
       image(this.image,0,0,70,70);
       pop();
    }
 
 }