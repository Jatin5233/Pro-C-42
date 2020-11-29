var hr,mn,sc;
var hrAngle,mnAngle,scAngle;
var wall;
function preload(){
  wall=loadImage("rw.jpg");
}
function setup() {
  createCanvas(400,400);
 angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
   push();
   rotate(scAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,100,0);
   pop(); 

   push();
   rotate(mnAngle);
   stroke("orange");
   strokeWeight(7);
   line(0,0,80,0);
   pop();

   push();
   rotate(hrAngle);
   stroke("red");
   strokeWeight(7);
   line(0,0,40,0);
   pop(); 

   push();
   noFill();
   stroke(0,0,255);
   strokeWeight(10);
   arc(0,0,300,300,0,scAngle);
   pop(); 

   push();
   noFill();
   stroke("orange");
   strokeWeight(10);
   arc(0,0,280,280,0,mnAngle);
   pop();

   push();
   noFill();
   stroke("red");
   strokeWeight(10);
   arc(0,0,260,260,0,hrAngle);
   pop(); 
  drawSprites();
}