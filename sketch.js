var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle;
var gameState = 'play';
var count = 0;

function preload(){
  bkIMG = loadImage('b5.jpg');
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  grounda = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
   function mousePressed(){
    if(gameState != "end" && count != 5){
     particle = new Particle(mouseX,10,10);
     count++;
  }
}
function draw() {
 // background("black");
  image(bkIMG,0,0,width,height);
  textSize(29);
  textFont("Arial Bold");
  fill("indigo");
  text("Score : "+score,20,30);
  Engine.update(engine);
   
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(particle != null){
     particle.display();
     if(particle.body.position.y >760){
       if(particle.body.position.x < 80 && particle.body.position.y < 800 && particle.body.position.x > 0){
         score = score + 100;
         particle = null
       }
      else if(particle.body.position.x < 160 && particle.body.position.y < 800 && particle.body.position.x > 80){
            score = score + 500;
            particle = null;
          }
          else if(particle.body.position.x < 240 && particle.body.position.y < 800 && particle.body.position.x > 160){
            score = score + 400;
            particle = null;
          }
          else if(particle.body.position.x < 320 && particle.body.position.y < 800 && particle.body.position.x > 240){
            score = score + 300;
            console.log(particle);
            particle = null;
          } 
          else if(particle.body.position.x < 400 && particle.body.position.y < 800 && particle.body.position.x > 320){
            score = score + 400;
            particle = null;
     }
          else  if(particle.body.position.x < 480 && particle.body.position.y < 800 && particle.body.position.x > 400){
            score = score + 100;
            particle = null;
    }
          else  if(particle.body.position.x < 560 && particle.body.position.y < 800 && particle.body.position.x > 480){
            score = score + 200;
            particle = null;
    }
          else  if(particle.body.position.x < 640 && particle.body.position.y < 800 && particle.body.position.x > 560){
            score = score + 300;
            particle = null;
    }
          else  if(particle.body.position.x < 720 && particle.body.position.y < 800 && particle.body.position.x > 640){
            score = score + 500;
            particle = null;
    }
          else  if(particle.body.position.x < 800 && particle.body.position.y < 800 && particle.body.position.x > 720){
            score = score + 200;
            particle = null;
    }
  }
}
if(count == 5){
  textSize(60);
  fill("red");
  textFont("Stencil");
  text("    ! ! GAME OVER ! ! ", 130,230);
  textSize(30);
  fill("yellow");
  text("Reload the tab to replay ",230,330);
}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(score >= 1000 && count == 5){
     fill("navy");
     text("           WELL DONE :D",230,410);
   }
   if(score < 1000 && count == 5){
    fill("navy");
    text("PLAY AGAIN TO SCORE BETTER :)",205,410);
   }
   textSize(25);
  fill("white");
   textFont("Stencil");
   text("100",25,520);
   text("500",105,520);
   text("400",185,520);
   text("300",265,520);
   text("400",340,520);
   text("100",425,520);
   text("200",505,520);
   text("300",585,520);
   text("500",665,520);
   text("200",745,520);
}
