class Plinko { 
    constructor(x,y,) {
      var options = { 
        
        restitution:1,
        friction:0,
        isStatic:true 
        } 
         this.x= x;
          this.y= y; 
          this.raduis=10;
         
          this.body = Bodies.circle(x,y,this.raduis,options);
         
       World.add(world,this.body); 
          } 
      display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle) 
      fill("white");
      ellipseMode(RADUIS);
      ellipse(0,0, this.raduis, this.raduis); 
      
      pop() 
       }
                 };