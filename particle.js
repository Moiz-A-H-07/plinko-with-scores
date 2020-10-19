class Particle { 
    constructor(x,y,raduis) {
      var options = { 
        
        restitution:0.4, 
        } 
         this.x= x;
          this.y= y; 
          this.raduis=raduis; 
         
          this.body = Bodies.circle(x,y,this.raduis,options);
          this.color=color(random(0,255),random(0,255),random(0,255))
       World.add(world,this.body); 
          } 
      display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle) 
      fill(this.color);
      ellipseMode(RADUIS);
      ellipse(0,0, this.raduis, this.raduis); 
      
      pop() 
       }
                 };