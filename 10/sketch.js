// Estado 0 = Introducción
// Estado 1 = Jugar
// Estado 2 = Ganó
// Estado 3 = Perdió
var estado = 0;

var fase=1;

var xC;
var yC;
var velxC=0;
var velyC=0;

var xM;
var yM;
var velM=1;
var dirM=1;

var x;
var y;

function setup() {
	createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  rectMode(CENTER);
	x = random(10, width-10);
	y = random(10, height-10);
  
  xM = random(10, width-10);
	yM = random(10, height-10);
  
  yC= height/2;
  xC= width/2;
}

function draw() {
	if (estado == 0) {
		background(0);
    noStroke();
    fill(255);
		text("Intro", width / 2, height / 2);

	} else if (estado == 1) {
		background(0);
    
    fill(0, 255, 255);
		rect(x, y, 20, 20);
    
    fill(255, 255, 0);
		rect(xM, yM, 20, 20);
    yM=yM+velM*dirM;
    
    if(yM<10){
    	dirM=1;
    }else if(yM>height-10){
      dirM=-1;
    }
    
    velx = map(rotationY, -90, 90, -4, 4);
  	vely = map(rotationX, -90, 90, -4, 4);
    
    fill(255, 0, 255);
  	ellipse(xC, yC, 20, 20);
    
    xC = xC + velx;
  	yC = yC + vely;
    
    xC = constrain(xC, 10, width - 10);
  	yC = constrain(yC, 10, height - 10);

		if (dist(xC, yC, x, y) < 10) {
			estado = 2;
      fase = fase+1;
      velM=velM+0.02
		}
		
		if (dist(xC, yC, xM, yM) < 10){
			estado = 3;
		}

	} else if (estado == 3) {
		background(0);
    noStroke();
    fill(255);
		text("Perdió", width / 2, height / 2);

	}else if (estado == 2) {
		background(0);
    noStroke();
    fill(255);
		text("pasaste a la fase " + fase, width / 2, height / 2);
  }
}

function mouseReleased() {
	if (estado == 0) {
		estado = 1;
		tiempoAnterior = millis();
		
	} else if (estado == 2) {
		estado = 1;
		x = random(10, width-10);
		y = random(10, height-10);
    
    xM = random(10, width-10);
		yM = random(10, height-10);
    
    yC= height/2;
  	xC= width/2;
    
	}else if (estado == 3) {
		estado = 0;
		x = random(10, width-10);
		y = random(10, height-10);
    
    xM = random(10, width-10);
		yM = random(10, height-10);
    
    yC= height/2;
  	xC= width/2;
	}

}