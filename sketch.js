var hours,mins,secs;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  hours=hour();
  mins=minute();
  secs=second();
  translate(200,200);
  rotate(-90);
  scAngle=map(secs,0,60,0,360);
  minAngle=map(mins,0,60,0,360);
  hourAngle=map(hours%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  noFill();
  stroke(255,0,0);
  arc(0,0,300,300,0,scAngle);
  drawSprites();
 
  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,90,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);

  push();
  rotate(hourAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
 
  strokeWeight(10);
  noFill();
  stroke(0,0,255);
  arc(0,0,260,260,0,hourAngle);
  drawSprites();
}