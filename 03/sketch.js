var fugX=800;
var fugY=0;
var ola=590;
var ola1=160;
var olaDir=1;
var mov=1;
var mov1=1;
var dirm=1;
var img;
var holi=-400;

function preload() {
	img=loadImage('planeta.png');
}

function setup() {
  createCanvas(1280, 800);
  angleMode(DEGREES);
}

function draw() {
  background(23,22,66);
  
  noStroke();
  fill(234,288,157,53);
  
  ellipse(450,40,10,10);
  ellipse(900,560,15,15);
  ellipse(300,385,15,15);
  ellipse(1100,567,15,15);
  ellipse(400,200,15,15);
  ellipse(200,700+42,15,15);
  ellipse(900,110,15,15);
  ellipse(800,300,15,15);
  ellipse(1140,200+42,15,15);
  ellipse(500,500+42,15,15);
  ellipse(100,200+42,15,15);
  ellipse(200,300+42,15,15);
  ellipse(250,90+42,15,15);
  
  beginShape();
  	vertex(fugX,fugY);
  	vertex(fugX-42,fugY+27);
			bezierVertex(fugX-65,fugY+48,fugX-34,fugY+66,fugX-24,fugY+44);
 		vertex(fugX-24,fugY+44);
 	endShape();
  
	fill(234,288,157);
  
 	ellipse(fugX-37,fugY+42,15,15);   
  
  fugX=fugX-10;
  fugY=fugY+7;
  
  if(fugY>height){
  	fugX=800;
	  fugY=0;
  }
  
  fill(235,288,88,66);
  
  push();
  rotate(mov1);
  beginShape();
  	vertex(1176.5,47.5);
  		bezierVertex(858.5,37.5,-127.5,650.5,85.5,753.5);
  	vertex(85.5,753.5);
  	vertex(92.5,731.5);
			bezierVertex(-17.5,644.5,795.5,101.5,1169.654 ,69.379);
 		vertex(1169.654 ,69.379);
 	endShape();
  pop();
  
  fill(38,161,241);
  
  beginShape();
  	vertex(340.5,413.5);
  		bezierVertex(542.5,ola1,691.5,ola,962.5,413.5);
  	vertex(962.5,413.5);
			bezierVertex(929.5,818.5,373.5,830.5,340.5,413.5);
 	endShape();
  
  fill(51,234,240);
  
  beginShape();
  	vertex(340.5,413.5);
  		bezierVertex(542.5,ola,691.5,ola1,962.5,413.5);
  	vertex(962.5,413.5);
			bezierVertex(929.5,818.5,373.5,830.5,340.5,413.5);
 	endShape();
  
  ola=ola-3*olaDir;
  ola1=ola1+3*olaDir;
  
  if(ola<160){
  	olaDir=olaDir*-1;
  }
  
  if(ola>590){
  	olaDir=olaDir*-1;
  }
  
  fill(255,31,129,74);
  ellipse(651.5,410.5,706,706);
  
  noFill();
  stroke(255,31,129,25);
  strokeWeight(15);
  ellipse(651.5,410.5,684,684);
  
  noStroke();
  fill(253,164,134,64);
  
  beginShape();
  	vertex(926.5,190.5);
  		bezierVertex(1116.5,372.5,955.5,865.5,537.5,744.5);
  	vertex(537.5,744.5);
			bezierVertex(780.5,630.5,933.5,459.5,926.5,190.5);
 	endShape();
  
  stroke(214);
  strokeWeight(18);
  
  beginShape();
  	vertex(452.237,204.562);
  		bezierVertex(489.5,167.5,532.5,142.5,581.852,131.538);  
  	vertex(581.852,131.538);
  endShape();
  
  line(420,240,431.5,225.5);
   
  fill(235,288,88,127);
	noStroke();
  
  push();
  rotate(mov1);
  beginShape();
  	vertex(1176.5,47.5);
  		bezierVertex(1389.5,150.5,405.5,763.5,85.654,753.379);
  	vertex(85.654,753.379);
  	vertex(93.654,732.379);
  		bezierVertex(466.5,699.5,1279.5,154.5,1169.654,69.379);
 	endShape();
  pop();
  
	mov1=mov1+0.1*dirm
  
  if(mov1>8){
    dirm=-1;
  }
  
  if(mov1<=0){
  	dirm=1;
  }
  
  fill(255);
	
  push();
	translate(651.5,410.5);  
  rotate(mov);
  ellipse(0,400,24,24);
  pop();
  
  push();
  translate(651.5,410.5); 
  rotate(-mov*0.5);
  ellipse(0,400,24,24);
  pop();
  
  mov=mov+2;
  
  image(img,holi+285,holi);
  
  if(holi<46){
  	holi=holi+1;
  }
  
  
}