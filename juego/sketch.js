//variables para subir los archivos
var chock;
var monica;
var lina;
var yolanda;
var inicio;
var instrucciones;
var gananste;
var perdiste;
var c1;
var oc1;
var oc2;
var oc3;
var cp;
var p1;
var op1;
var op2;
var op3;
var pp;

//variables para el desarrollo práctico

//0=inicio
//1=instrucciones
//2=jungando
//3=ganaste
//4=perdiste
var estado = 0;
var panes = 0;

var misC = [];
var misCX = 320;
var misCY = -416;
var movOC = true;
var CX=384;
var CY=256;

var misP = [];
var misPX = 320;
var misPY = 96;

var casa= false;

function preload() {

  chock = loadImage('assets/chock.png');
  monica = loadImage('assets/mónica.png');
  lina = loadImage('assets/lina.png');
  yolanda = loadImage('assets/yolanda.png');
  inicio = loadImage('assets/inicio.png');
  instrucciones = loadImage('assets/instrucciones.png');
  ganaste = loadImage('assets/ganaste.png');
  perdiste = loadImage('assets/perdiste.png');
  c1 = loadImage('assets/cocina1.png');
  oc1 = loadImage('assets/Ococina1.png');
  oc2 = loadImage('assets/Ococina2.png');
  oc3 = loadImage('assets/Ococina3.png');
  cp = loadImage('assets/cocinaP.png');
  p1 = loadImage('assets/parque1.png');
  op1 = loadImage('assets/Oparque1.png');
  op2 = loadImage('assets/Oparque2.png');
  op3 = loadImage('assets/Oparque3.png');
  pp = loadImage('assets/parqueP.png');
}

function setup() {
  createCanvas(768, 1024);

  textFont('Indie Flower');
  textSize(30);
  //textAlign(CENTER);
  
  for (var i = 0; i < 20; i = i + 1) {
    	for (var i1 = 0; i1 < 50; i1 = i1 + 1) {
    	  misC[misC.length] = new cCocina(misCX, misCY);
      	misCX = misCX + 64;
    	}	
    misCX = 320;
    misCY = misCY + 64;
  	}
 		 misPY = 96;

	for (var i2 = 0; i2 < 20; i2 = i2 + 1) {
    for (var i3 = 0; i3 < 50; i3 = i3 + 1) {
      misP[misP.length] = new cParque(misPX, misPY);
      misPX = misPX + 64;
    }
    misPX = 320;
    misPY = misPY + 64;
  }
  misCY = -416;
}  

function draw() {

  if (estado == 0) {
    background(255);
    image(inicio, 0, 0);
  } else if (estado == 1) {
    background(255);
    image(instrucciones, 0, 0);
  } else if (estado == 2) {
    background(0);

    if(casa==false){
    	for (var i3 = 0; i3 < 100; i3 = i3 + 1) {
      	var co = floor(random(1, 1000));
      	misC[co].obstaculo1();
    	}

    	for (var i4 = 0; i4 < 100; i4 = i4 + 1) {
      	var co1 = floor(random(1, 1000));
      	misC[co1].obstaculo2();
    	}

    	for (var i5 = 0; i5 < 100; i5 = i5 + 1) {
      	var co2 = floor(random(1, 1000));
      	misC[co2].obstaculo3();
    	}

    	for (var i2 = 0; i2 < 1; i2 = i2 + 1) {
      	var co3 = floor(random(1, 1000));
      	misC[co3].llegada();
    	}
      for (var i = 0; i < 100; i = i + 1) {
      	var co4 = floor(random(1, 1000));
      	misP[co4].obstaculo1();
    	}

    	for (var i1 = 0; i1 < 100; i1 = i1 + 1) {
      	var co5 = floor(random(1, 1000));
      	misP[co5].obstaculo2();
    	}

    	for (var i0 = 0; i0 < 100; i0 = i0 + 1) {
      	var co6 = floor(random(1, 1000));
      	misP[co6].obstaculo3();
    	}

    	for (var i6 = 0; i6 < 1; i6 = i6 + 1) {
      	var co7 = floor(random(1, 1000));
      	misP[co7].llegada();
    	}
    	casa=true;
    }
    
    for (var i7 = 0; i7 < misC.length; i7 = i7 + 1) {
      if(misC[i7].y < 512){
      		misC[i7].dibujarse();
      }
      
        misC[i7].moverse();
      
      	if(rotationY>15&&(misC[999].x+32)>=384){
    			misC[i7].derecha();
    		}else if(rotationY<-15&&(misC[0].x-32)<=384){
        	misC[i7].izquierda();
      	}else if(rotationX<-15&&(misC[0].y-32)<=256){
        	misC[i7].arriba();
      	}else if(rotationX>=15&&(misC[999].y+32)>=256){
        	misC[i7].abajo();
      	}else{
      		misC[i7].stop();
      	}
      }
    
    for (var i8 =0; i8 < misP.length; i8 =i8+1){
    	if(misP[i8].y > 512){
      		misP[i8].dibujarse();
        	
    	}
      misP[i8].moverse();
      
      if(rotationY>15&&(misP[999].x+32)>=384){
    		misP[i8].derecha();
    	}else if(rotationY<-15&&(misP[0].x-32)<=384){
        misP[i8].izquierda();
      }else if(rotationX<-15&&(misP[0].y-32)<=768){
        misP[i8].arriba();
      }else if(rotationX>=15&&(misP[999].y+32)>=768){
        misP[i8].abajo();
      }else{
      	misP[i8].stop();
      }
    } 
    
    image(chock, 384 - 32, 256 - 32);
    image(chock, 384 - 32, 768 - 32);
    

  } else if (estado == 3) {
    background(255);
    image(ganaste, 0, 0);
    text('has comido ' + panes + ' panes!', 293, 186);
  } else if (estado == 4) {
    background(255);
    image(perdiste, 0, 0);
    fill(255);
    text('comiste ' + panes + ' panes!', 298, 331);
  }
}

function mouseReleased() {
  if (estado == 0) {
    if (mouseX >= 253 && mouseX <= 514 && mouseY >= 280 && mouseY <= 344) {
      estado = 2;
    }
    if (mouseX >= 253 && mouseX <= 514 && mouseY >= 383 && mouseY <= 447) {
      estado = 1;
    }
  } else if (estado == 1) {
    if (mouseX >= 51 && mouseX <= 107 && mouseY >= 74 && mouseY <= 130) {
      estado = 0;
    }
    if (mouseX >= 507 && mouseX <= 724 && mouseY >= 904 && mouseY <= 957) {
      estado = 2;
    }
  } else if (estado == 4) {
    if (mouseX >= 263.5 && mouseX <= 526.5 && mouseY >= 372.5 && mouseY <= 438.5) {
      estado = 0;
    }
  } else if (estado == 3) {
    if (mouseX >= 275.5 && mouseX <= 538.5 && mouseY >= 226.5 && mouseY <= 292.5) {
      estado = 2;
    }
  }
}

function cCocina(xC, yC) {
  // caraceristicas
  this.x = xC;
  this.y = yC;
  this.tipo = 0;
  this.movX=0;
  this.movY=0;

  // habilidades
  this.dibujarse = function() {
    if (this.tipo == 0) {
      image(c1, this.x - 32, this.y - 32);
    }
    if (this.tipo == 1) {
      image(oc1, this.x - 32, this.y - 32);
    }
    if (this.tipo == 2) {
      image(oc2, this.x - 32, this.y - 32);
    }
    if (this.tipo == 3) {
      image(oc3, this.x - 32, this.y - 32);
    }
    if (this.tipo == 4) {
      image(cp, this.x - 32, this.y - 32);
    }
  }
  
  this.moverse = function(){
  	this.x=this.x+this.movX
    this.y=this.y+this.movY
  }
  this.obstaculo1 = function() {
    this.tipo = 1;
  }

  this.obstaculo2 = function() {
    this.tipo = 2;
  }

  this.obstaculo3 = function() {
    this.tipo = 3;
  }

  this.llegada = function() {
    this.tipo = 4;
  }
  
  this.arriba =function(){
  	this.movX=0;
  	this.movY=2;
  }
  
  this.abajo =function(){
  	this.movX=0;
  	this.movY=-2;
  }
  
  this.izquierda =function(){
  	this.movX=2;
  	this.movY=0;
  }
  
  this.derecha =function(){
  	this.movX=-2;
  	this.movY=0;
  }
  
  this.stop= function(){
  	this.movX=0;
  	this.movY=0;
  }
}

function cParque(xP, yP) {
  // caraceristicas
  this.x = xP;
  this.y = yP;
  this.tipo = 0;
  this.movX=0;
  this.movY=0;

  // habilidades
  this.dibujarse = function() {
    if (this.tipo == 0) {
      image(p1, this.x - 32, this.y - 32);
    }
    if (this.tipo == 1) {
      image(op1, this.x - 32, this.y - 32);
    }
    if (this.tipo == 2) {
      image(op2, this.x - 32, this.y - 32);
    }
    if (this.tipo == 3) {
      image(op3, this.x - 32, this.y - 32);
    }
    if (this.tipo == 4) {
      image(pp, this.x - 32, this.y - 32);
    }
  }
  
  this.moverse = function(){
    
    this.x=this.x+this.movX
    this.y=this.y+this.movY
  }

  this.obstaculo1 = function() {
    this.tipo = 1;
  }

  this.obstaculo2 = function() {
    this.tipo = 2;
  }

  this.obstaculo3 = function() {
    this.tipo = 3;
  }

  this.llegada = function() {
    this.tipo = 4;
  }
  
  this.arriba =function(){
  		this.movX=0;
  		this.movY=2;
  }
  
  this.abajo =function(){
  	this.movX=0;
  	this.movY=-2;
  }
  
  this.izquierda =function(){
  	this.movX=2;
  	this.movY=0;
  }
  
  this.derecha =function(){
  	this.movX=-2;
  	this.movY=0;
  }
  
  this.stop= function(){
  	this.movX=0;
  	this.movY=0;
  }
}