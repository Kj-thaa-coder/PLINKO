const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies
 
var particle
var wall
var wall2
var wall3
var wall4
var wall5
var wall6

var peg
var peg2
var peg3
var peg4
var peg5
var peg6
var peg7
var peg8
var peg9
var peg10
var peg11
var peg12
var peg13
var peg14
var peg15


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;


function setup() {
  createCanvas(700, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  // wall = new Wall(80,600,10,400);
  // wall2 = new Wall(180,600,10,400);
  // wall3 = new Wall(280,600,10,400);
  // wall4 = new Wall(380,600,10,400);
  // wall5 = new Wall(480,600,10,400);
  // wall6 = new Wall(580,600,10,400);
  peg = new Peg(100,120,12)
  peg2 = new Peg(200,120,12)
  peg3 = new Peg(300,120,12)
  peg4 = new Peg(400,120,12)
  peg5 = new Peg(500,120,12)
  peg6 = new Peg(150,200,12)
  peg7 = new Peg(250,200,12)
  peg8 = new Peg(350,200,12)
  peg9 = new Peg(450,200,12)
  peg10 = new Peg(250,200,12)
  peg11 = new Peg(100,280,12)
  peg12 = new Peg(200,280,12)
  peg13 = new Peg(300,280,12)
  peg14 = new Peg(400,280,12)
  peg15 = new Peg(500,280,12)



   for (var k = 0; k <=width; k = k + 100) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


//     for (var j = 75; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,75));
//     }

//     for (var j = 50; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,175));
//     }

//      for (var j = 75; j <=width; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,275));
//     }

//      for (var j = 50; j <=width-10; j=j+50) 
//     {
    
//        plinkos.push(new Plinko(j,375));
//     }

    

    
}
 


function draw() {
  background("white");
  textSize(20)
//  text("Score : "+score,20,30);
//  text("100",20,440)
//  text("200",120,440)
//  text("50",220,440)
//  text("700",320,440)
//  text("200",420,440)
//  text("1",520,440)
//  text("500",620,440)

 
  Engine.update(engine);
 





  // wall.display();
  // wall2.display();
  // wall3.display();
  // wall4.display();
  // wall5.display();
  // wall6.display();

  peg.display();
  peg2.display();
  peg3.display();
  peg4.display();
  peg5.display();
  peg6.display();
  peg7.display();
  peg8.display();
  peg9.display();
  peg10.display();
  peg11.display();
  peg12.display();
  peg13.display();
  peg14.display();
  peg15.display();
  
  //  for (var i = 0; i < plinkos.length; i++) {
     
  //    plinkos[i].display();
     
  //  }


  
   
  if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

