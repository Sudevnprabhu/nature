var sun;
var ground;
var m0,m1,m2,m3;
var cloud1,cloud2,cloud3;

function setup(){
    canvas=createCanvas(500,500);
    angleMode(DEGREES)

   // sun=circle(250,50,25);
   // ground=rectangle(250,480,500,60);
}

function draw(){
  background("lightblue");

  fill("orange");
  ellipseMode(RADIUS);
  sun=ellipse(250,50,25);

  fill("brown");
  // stroke("yellow");
  // strokeWeight(5);
  rectMode(CENTER);
  ground=rect(250,480,500,60);
  
  fill("brown");
  m0=triangle(-100,200,10,100,130,200);
  
  fill("brown");
  m1=triangle(0,200,150,100,300,200);

  fill("brown");
  m2=triangle(180,200,300,100,450,200);

  fill("brown");
  m3=triangle(340,200,450,100,600,200);

  fill("white");
  rectMode(CENTER);
  cloud1=rect(230,50,60,30);

  fill("white");
  rectMode(CENTER);
  cloud2=rect(260,70,60,30);
 
  // fill("blue");
  // rectMode(CENTER);
  // falls=rect(500,300,20,300);

  fill("green");
  rectMode(CENTER);
  lakes=rect(400,450,200,150);

  fill("green");
  triangle(250,500,300,375,300,500)
  triangle(300,375,500,250,500,500);

  fill("green");
  rectMode(CENTER);
  lakes=rect(100,450,200,150);

  fill("green");
  triangle(0,250,200,375,250,500)
  triangle(300,375,500,250,500,500);
}

