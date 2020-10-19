const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles=[]
var plinkos=[]
var divisions=[]
var divisionheight=300,score=0
var count=0,particle;
var gamestate="start";

function setup() {
  createCanvas(800,800);
  
  engine = Engine.create();
  world = engine.world;
  
  ground=new Ground(width/2,height,width,20)

  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionheight/2,10,divisionheight))
  }

  for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  
  for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  
  for(j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for(j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375))
  }

  //Engine.run(engine);
}

function draw() {
  background(0);  
  textSize(35);
  text("score +",20,40)
  fill("white")
  textSize(35);
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("500",320,550)
  text("500",400,550)
  text("500",480,550)
  text("500",560,550)
  text("500",640,550)
  text("500",720,550)

Engine.update(engine)
ground.display();

if(gamestate=="end"){
  textSize(100)
  text("gameOver",150,250)
}

for(var i=0;i<plinkos.length;i++){
  plinkos[i].display()
}
if (particle!==null){
  particle.display()
  if(particle.body.position.y>760){
    if(particle.body.position.x>300){
      score=score+500
      particle=null
      if(count>=5){
        gamestate=end
      }
    } else if(particle.body.position.x>600 && particle.body.position.x>301){
      score=score+100
      particle=null
      if(count>=5){
        gamestate=end
      }
    }
  }  else if(particle.body.position.x>900 && particle.body.position.x>601){
    score=score+200
    particle=null
    if(count>=5){
      gamestate=end
  }
}

for(var k=0;k<divisions.length;k++){
  divisions[k].display()
}
  
  /*(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }*/
}
}
function mousePressed(){
  if(gamestate!=="end"){
    count++
    particle=new particle(mouseX,10,10,10)
  }
}
