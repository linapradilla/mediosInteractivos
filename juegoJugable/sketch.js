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
//2=jugando
//3=ganaste
//4=perdiste
var estado = 0;
var panes = 0;

var misC = [];
var misCX = 320;
var misCY = -416;
var movUpC = true;
var movDownC = true;
var movDerC = true;
var movCpC = true;
var llegoC = false;

var misP = [];
var misPX = 320;
var misPY = 96;
var movUpP = true;
var movDownP = true;
var movDerP = true;
var movCpP = true;
var llegoP = false;

var casa= false;
var tiempo;

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
  textAlign(CENTER);
  
  for (var i7 = 0; i7 < 20; i7 = i7 + 1) {
  	for (var i6 = 0; i6 < 50; i6 = i6 + 1) {
    	misC[misC.length] = new cCocina(misCX, misCY);
			misCX = misCX + 64;
    }	
    misCX = 320;
    misCY = misCY + 64;
  }
 	misPY = 96;

	for (var i5 = 0; i5 < 20; i5 = i5 + 1) {
    for (var i4 = 0; i4 < 50; i4 = i4 + 1) {
      misP[misP.length] = new cParque(misPX, misPY);
			misPX = misPX + 64;
    }
		misPX = 320;
    misPY = misPY + 64;
  }
  misCY = -416;
  
  tiempo=millis();
}  

function draw() {

  if (estado == 0) {
    background(255);
    image(inicio, 0, 0);
  } else if (estado == 1) {
    background(255);
    image(instrucciones, 0, 0);
  } else if (estado == 2) {
    background(113,190,210);
    
  	noStroke();
    fill(98,107,34);
    rect(0,512,768,512);

    if(casa==false){
      
      for (var i9 = 0; i9 < 1000; i9 = i9 + 1) {
      	misC[i9].volver();
        misP[i9].volver();
      }
      
    	for (var i3 = 0; i3 < 100; i3 = i3 + 1) {
      	var co = floor(random(0, 999));
      	misC[co].obstaculo1();
    	}

    	for (var i4 = 0; i4 < 100; i4 = i4 + 1) {
      	var co1 = floor(random(0, 999));
      	misC[co1].obstaculo2();
    	}

    	for (var i5 = 0; i5 < 100; i5 = i5 + 1) {
      	var co2 = floor(random(0, 999));
      	misC[co2].obstaculo3();
    	}

    	for (var i2 = 0; i2 < 1; i2 = i2 + 1) {
      	var co3 = floor(random(0, 999));
      	misC[co3].llegada();
    	}
      for (var i = 0; i < 100; i = i + 1) {
      	var co4 = floor(random(0, 999));
      	misP[co4].obstaculo1();
    	}

    	for (var i1 = 0; i1 < 100; i1 = i1 + 1) {
      	var co5 = floor(random(0, 999));
      	misP[co5].obstaculo2();
    	}

    	for (var i0 = 0; i0 < 100; i0 = i0 + 1) {
      	var co6 = floor(random(0, 999));
      	misP[co6].obstaculo3();
    	}

    	for (var i6 = 0; i6 < 1; i6 = i6 + 1) {
      	var co7 = floor(random(0, 999));
      	misP[co7].llegada();
    	} 
    	casa=true;
    }
    
    for (var i7 = 0; i7 < misC.length; i7 = i7 + 1) {
      if(misC[i7].y < 512){
      		misC[i7].dibujarse();
      }
      
      misC[i7].moverse();
      
      if(misC[i7].x>384-32&&misC[i7].x<384+32&&misC[i7].y>224-32&&misC[i7].y<224+32){
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
        	movUpC = false;
        }else{
          movUpC = true;
        }
      }
      
      if(misC[i7].x>384-32&&misC[i7].x<384+32&&misC[i7].y>288-32&&misC[i7].y<288+32){
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
        	movDownC = false;
        }else{
          movDownC = true;
        }
      }
      
      if(misC[i7].x>352-32&&misC[i7].x<352+32&&misC[i7].y>256-32&&misC[i7].y<256+32){
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
        	movIzqC = false;
        }else{
          movIzqC = true;
        }
      }
      
      if(misC[i7].x>416-32&&misC[i7].x<416+32&&misC[i7].y>256-32&&misC[i7].y<256+32){
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
        	movDerC = false;
        }else{
          movDerC = true;
        }
      }
      
      if(rotationY>15&&(misC[999].x+32)>=384&&movDerC == true){
    		misC[i7].derecha();
  		}else if(rotationY<-15&&(misC[0].x-32)<=384&&movIzqC == true){
      	misC[i7].izquierda();
      }else if(rotationX<-15&&(misC[0].y-32)<=256&&movUpC == true){
      	misC[i7].arriba();
    	}else if(rotationX>=15&&(misC[999].y+32)>=256&&movDownC == true){
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
      
      if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>734-32&&misP[i8].y<734+32){
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
        	movUpP = false;
        }else{
          movUpP = true;
        }
      }
      
      if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>800-32&&misP[i8].y<800+32){
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
        	movDownP = false;
        }else{
          movDownP = true;
        }
      }
      
      if(misP[i8].x>352-32&&misP[i8].x<352+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
        	movIzqP = false;
        }else{
          movIzqP = true;
        }
      }
      
      if(misP[i8].x>416-32&&misP[i8].x<416+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
        	movDerP = false;
        }else{
          movDerP = true;
        }
      }
      
      if(rotationY>15&&(misP[999].x+32)>=384&&movDerP == true){
    		misP[i8].derecha();
    	}else if(rotationY<-15&&(misP[0].x-32)<=384&&movIzqP == true){
        misP[i8].izquierda();
      }else if(rotationX<-15&&(misP[0].y-32)<=768&&movUpP == true){
        misP[i8].arriba();
      }else if(rotationX>=15&&(misP[999].y+32)>=768&&movDownP == true){
        misP[i8].abajo();
      }else{
      	misP[i8].stop();
      }
      
      for (var i10=0;i10<misC.length;i10=i10+1){
      	if(misC[i10].x>384-32&&misC[i10].x<384+32&&misC[i10].y>256-32&&misC[i10].y<256+32){
      		if(misC[i10].tipo==4){
            llegoC=true;
        	}else{
          	llegoC=false;
          }
      	}
        
       if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
      		if(misP[i8].tipo==4){
            llegoP=true;
        	}else{
          	llegoP=false;
          }
			 } 
       
        
      }
    }
    
    image(chock, 384 - 32, 256 - 32);
    image(chock, 384 - 32, 768 - 32);
  
    fill(0);
    rect(0,0,768,64);
    rect(0,64,64,896);
    rect(0,960,768,64);
    rect(704,64,64,896);
    rect(64,448,640,128);
    
    fill(255);
    text(floor((120000-floor(millis() - tiempo))/1000), width / 2, height / 2);
    
    if (millis() - tiempo > 120000){
			estado = 4;
		}
    
    if(llegoC==true&&llegoP==true){
      estado = 3;
    	panes=panes+1;
    }
  
  } else if (estado == 3) {
    background(255);
    image(ganaste, 0, 0);
    text('HAS COMIDO ' + panes + ' PANES!', 384, 186);
  } else if (estado == 4) {
    background(255);
    image(perdiste, 0, 0);
    fill(255);
    text('COMISTE ' + panes + ' PANES!', 384, 331);
  }
}

function mouseReleased(){
  if (estado == 0) {
    if (mouseX >= 253 && mouseX <= 514 && mouseY >= 280 && mouseY <= 344) {
      estado = 2;
      tiempo=millis();
      casa = false;
      
      for (var i = 0; i < 1000; i = i + 1) {
      	misC[i].limpiar();
        misP[i].limpiar();
      }
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
      tiempo=millis();
      casa = false;
      
      for (var i0 = 0; i0 < 1000; i0 = i0 + 1) {
      	misC[i0].limpiar();
        misP[i0].limpiar();
      }
    }
  } else if (estado == 4) {
    if (mouseX >= 263.5 && mouseX <= 526.5 && mouseY >= 372.5 && mouseY <= 438.5) {
      estado = 0;
      panes = 0;
    }
  } else if (estado == 3) {
    if (mouseX >= 275.5 && mouseX <= 538.5 && mouseY >= 226.5 && mouseY <= 292.5) {
      estado = 2;
      tiempo=millis();
      casa = false;
      
      for (var i1 = 0; i1 < 1000; i1 = i1 + 1) {
      	misC[i1].limpiar();
        misP[i1].limpiar();
      }
    llegoC=false;
    llegoP=false;
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
  
  this.volver = function(){
  	this.x = xC;
  	this.y = yC;
  }
  
  this.limpiar = function(){
  	this.tipo= 0;
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
  	this.movY=3;
  }
  
  this.abajo =function(){
  	this.movX=0;
  	this.movY=-3;
  }
  
  this.izquierda =function(){
  	this.movX=3;
  	this.movY=0;
  }
  
  this.derecha =function(){
  	this.movX=-3;
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
  
  this.volver = function(){
  	this.x = xP;
  	this.y = yP;
  }
  
  this.limpiar = function(){
  	this.tipo= 0;
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
  	this.movY=3;
  }
  
  this.abajo =function(){
  	this.movX=0;
  	this.movY=-3;
  }
  
  this.izquierda =function(){
  	this.movX=3;
  	this.movY=0;
  }
  
  this.derecha =function(){
  	this.movX=-3;
  	this.movY=0;
  }
  
  this.stop= function(){
  	this.movX=0;
  	this.movY=0;
  }
}