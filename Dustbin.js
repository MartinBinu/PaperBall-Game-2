class Dustbin{

    constructor(x,y,width,height){
         var option ={
             'isStatic': true
         }
 
         this.body = Bodies.rectangle(x,y,width,height,option);
         this.width = width;
         this.height = height;
         this.image = loadImage("dustbingreen.png")
         World.add(world,this.body);
    }
 
    display(){
       push();
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y,this.width,this.height);
       image(this.image,870,145,240,200);
       fill(255);
       pop();
     }
 
 };