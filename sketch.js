
function setup() {

  createCanvas(450,450);

  angleMode(DEGREES);

}

function draw() {

  background(0);

  fill("Purple");
  textSize(24);
  textStyle("bold");
  text("✨🌟 SHAURYA'S CLOCK 🌟✨", 45,400); 
  

  translate(200,200)
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  strokeWeight(8);
  stroke("Red");

  let ending1 = map(sc,0,60,0,360);
  
  arc(0,0,300,300,0,ending1);
  
  stroke("Orange");
  
  let ending2 = map(mn,0,60,0,360);
  
  arc(0,0,280,280,0,ending2);

  stroke("Yellow");

  let ending3 = map(hr,0,12,0,360);
  
  arc(0,0,260,260,0,ending3);
  
  push();
  
  rotate(ending1);
  stroke("Blue");
  
  line(0,0,100,0);
  
  pop();
  
  
  push();
  
  rotate(ending2);
  stroke("Blue");
  
  line(0,0,75,0);
  
  pop();
  
  push();
  
  rotate(ending3);
  stroke("Indigo");
  
  line(0,0,50,0);
  
  pop();

  }
