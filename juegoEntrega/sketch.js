//variables para subir los archivos
var chock;
var inicio;
var instrucciones;
var instruccionesM;
var gananste;
var perdiste;
var ladrido;
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
//5=instrucciones del multijugador
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
var multijugador=false;

function preload() {

  	//se suben las imágenes y sonidos
  chock = loadImage('assets/chock.png');
  inicio = loadImage('assets/inicio.png');
  instrucciones = loadImage('assets/instrucciones.png');
  instruccionesM = loadImage('assets/instruccionesM.png');
  ganaste = loadImage('assets/ganaste.png');
  perdiste = loadImage('assets/perdiste.png');
  ladrido = loadSound('assets/ladrido.mp3');
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
  //crear el canvas
  createCanvas(768, 1024);

  textFont('Indie Flower'); //ajusta tipografìa
  textSize(30); // cambia el tamaño
  textAlign(CENTER); // alinea la tipografía en el centro
  
  // ciclo que crea var en 0 va hasta 20 y aumenta de 1 en 1
  for (var i7 = 0; i7 < 20; i7 = i7 + 1) {
    // ciclo que crea var en 0 va hasta 50 y aumenta de 1 en 1
  	for (var i6 = 0; i6 < 50; i6 = i6 + 1) {
      //agrega un pocisión en el arreglo a la función cCocina 
      //en la pocisión misCX misCY
    	misC[misC.length] = new cCocina(misCX, misCY);
      //suma 64 a misCX
			misCX = misCX + 64;
    }
    //devuelve misCX
    misCX = 320;
    //suma 64 a misCY
    misCY = misCY + 64;
  }
  //devuelve misCY
 	misCY = 96;

	// ciclo que crea var en 0 va hasta 20 y aumenta de 1 en 1
  for (var i5 = 0; i5 < 20; i5 = i5 + 1) {
    // ciclo que crea var en 0 va hasta 50 y aumenta de 1 en 1
    for (var i4 = 0; i4 < 50; i4 = i4 + 1) {
      //agrega un pocisión en el arreglo a la función cParque 
      //en la pocisión misPX misPY
      misP[misP.length] = new cParque(misPX, misPY);
      //suma 64 a misPX
			misPX = misPX + 64;
    }
    //devuelve misPX
		misPX = 320;
    //suma 64 a misPY
    misPY = misPY + 64;
  }
  //devuelve misCY
  misPY = -416;
  
  //hace la variable tiempo igual a milisegundos
  tiempo=millis();
}  

function draw() {
	
  //si la variable estado es igual a 0
  //poga la imagen inicio en la posición 0,0
  if (estado == 0) {
    background(255);
    image(inicio, 0, 0);
    //si la variable estado es igual a 1
	  //poga la imagen instrucciones en la posición 0,0
  } else if (estado == 1) {
    background(255);
    image(instrucciones, 0, 0);
    //si la variable estado es igual a 5
	  //poga la imagen instruccionesM en la posición 0,0
  } else if (estado == 5) {
    background(255);
    image(instruccionesM, 0, 0);
    //si la variable estado es igual a 2
  } else if (estado == 2) {
    background(113,190,210);
    
    //si la variable multijugador es verdadera
    if(multijugador==true){
      // si ladrido no se está reproduciendo
      if(ladrido.isPlaying()==false){
        //ponga ladrido en loop
    		ladrido.loop();
    	}
    }
    
    //quita el stroke
  	noStroke();
    //cambia el color de relleno
    fill(98,107,34);
    //hace una recta
    rect(0,512,768,512);

		//si la variable casa es falsa
    if(casa==false){
      
      //ciclo de 1000 repeticiones con la variable incremento i9
      //cada repetición llama a las funciones volver de misC y misP en i9
      for (var i9 = 0; i9 < 1000; i9 = i9 + 1) {
      	misC[i9].volver();
        misP[i9].volver();
      }
      
      //ciclo de 100 repeticiones con la variable incremento i3
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co
      // llama la función obstaculo1 en misC en co
    	for (var i3 = 0; i3 < 100; i3 = i3 + 1) {
      	var co = floor(random(0, 999));
      	misC[co].obstaculo1();
    	}

    	//ciclo de 100 repeticiones con la variable incremento i4
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co1
      // llama la función obstaculo2 en misC en co1
      for (var i4 = 0; i4 < 100; i4 = i4 + 1) {
      	var co1 = floor(random(0, 999));
      	misC[co1].obstaculo2();
    	}

    	//ciclo de 100 repeticiones con la variable incremento i5
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co2
      // llama la función obstaculo3 en misC en co2
      for (var i5 = 0; i5 < 100; i5 = i5 + 1) {
      	var co2 = floor(random(0, 999));
      	misC[co2].obstaculo3();
    	}
			
      //ciclo de 1 repetición con la variable incremento i2
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co3
      // llama la función llegada en misC en co3
    	for (var i2 = 0; i2 < 1; i2 = i2 + 1) {
      	var co3 = floor(random(0, 999));
      	misC[co3].llegada();
    	}
      
      //ciclo de 100 repeticiones con la variable incremento i
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co4
      // llama la función obstaculo1 en misP en co4
      for (var i = 0; i < 100; i = i + 1) {
      	var co4 = floor(random(0, 999));
      	misP[co4].obstaculo1();
    	}
      
			//ciclo de 100 repeticiones con la variable incremento i1
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co5
      // llama la función obstaculo2 en misP en co5
    	for (var i1 = 0; i1 < 100; i1 = i1 + 1) {
      	var co5 = floor(random(0, 999));
      	misP[co5].obstaculo2();
    	}
      
			//ciclo de 100 repeticiones con la variable incremento i0
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co6
      // llama la función obstaculo3 en misP en co6
      for (var i0 = 0; i0 < 100; i0 = i0 + 1) {
      	var co6 = floor(random(0, 999));
      	misP[co6].obstaculo3();
    	}

    	//ciclo de 100 repeticiones con la variable incremento i6
      //cada repetición crea un número random entre 0 y 999 y la guarda en la variable co7
      // llama la función llegada en misP en co7
      for (var i6 = 0; i6 < 1; i6 = i6 + 1) {
      	var co7 = floor(random(0, 999));
      	misP[co7].llegada();
    	}
      
      
    	//haga variable casa verdadera
      casa=true;
    }
    
    //ciclo de repeticiones que va hasta misC.length y aumenta de 1 en 1
    for (var i7 = 0; i7 < misC.length; i7 = i7 + 1) {
      	//si misC en i7.y es menor a 512 
      	if(misC[i7].y < 512){
          	//llama a la función dibujarse
      			misC[i7].dibujarse();
      	}
      
      	//llama a la función moverse
      	misC[i7].moverse();
      
      	//si la posición de misC se encuentra en los pixeles indicados (arriba de chock)
      if(misC[i7].x>384-32&&misC[i7].x<384+32&&misC[i7].y>224-32&&misC[i7].y<224+32){
        //si mis c es tipo 1, 2 o 3
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
          //haga la variable movUpC falso
        	movUpC = false;
        }else{
          //si no pues es verdad
          movUpC = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (abajo de chock)
      if(misC[i7].x>384-32&&misC[i7].x<384+32&&misC[i7].y>288-32&&misC[i7].y<288+32){
        //si mis c es tipo 1, 2 o 3
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
          //haga la variable movDownC falso
        	movDownC = false;
        }else{
          //si no pues es verdad
          movDownC = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (a la izquierda de chock)
      if(misC[i7].x>352-32&&misC[i7].x<352+32&&misC[i7].y>256-32&&misC[i7].y<256+32){
        //si mis c es tipo 1, 2 o 3
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
          //haga la variable movIzqC falso
        	movIzqC = false;
        }else{
          //si no pues es verdad
          movIzqC = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (a la derecha de chock)
      if(misC[i7].x>416-32&&misC[i7].x<416+32&&misC[i7].y>256-32&&misC[i7].y<256+32){
        //si mis c es tipo 1, 2 o 3
        if(misC[i7].tipo==1||misC[i7].tipo==2||misC[i7].tipo==3){
          //haga la variable movDerC falso
        	movDerC = false;
        }else{
          //si no pues es verdad
          movDerC = true;
        }
      }
      
      //si rotación en y es mayor a 15
      //misC 999 + 32 es mayor a 384
      //y a variable movDerC es verdadera
      //llama a la función derecha
      if(rotationY>15&&(misC[999].x+32)>=384&&movDerC == true){
    		misC[i7].derecha();
        //si rotación en y es menor a -15
      	//misC 0 - 32 es menor a 384
      	//y a variable movIzqC es verdadera
      	//llama a la función izquierda
  		}else if(rotationY<-15&&(misC[0].x-32)<=384&&movIzqC == true){
    		misC[i7].izquierda();
        //si rotación en x es menor a -15
      	//misC 0 - 32 es menor a 256
      	//y a variable movUpC es verdadera
      	//llama a la función arriba
    	}else if(rotationX<-15&&(misC[0].y-32)<=256&&movUpC == true){
    		misC[i7].arriba();
        //si rotación en x es mayor a 15
      	//misC 999 + 32 es mayor a 256
      	//y a variable movDownC es verdadera
      	//llama a la función abajo
    	}else if(rotationX>=15&&(misC[999].y+32)>=256&&movDownC == true){
    		misC[i7].abajo();
        //si no llama a la función stop
    	}else{
    		misC[i7].stop();
    	}
    }
    
    //ciclo de repeticiones que va hasta misP.length y aumenta de 1 en 1
    for (var i8 =0; i8 < misP.length; i8 =i8+1){
      // si mis p en i8 y es mayor a 512
    	if(misP[i8].y > 512){
        //llama la función dibujarse
      		misP[i8].dibujarse();
        	
    	}
      //llama la funcion moverse
      misP[i8].moverse();
      
      //si la posición de misC se encuentra en los pixeles indicados (a la arriba de chock)
      if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>734-32&&misP[i8].y<734+32){
        //si mis c es tipo 1, 2 o 3
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
          //haga la variable movUpC falso
        	movUpP = false;
        }else{
          //si no pues es verdad
          movUpP = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (a la abajo de chock)
      if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>800-32&&misP[i8].y<800+32){
        //si mis c es tipo 1, 2 o 3
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
          //haga la variable movDownC falso
        	movDownP = false;
        }else{
          //si no pues es verdad
          movDownP = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (a la izquierda de chock)
      if(misP[i8].x>352-32&&misP[i8].x<352+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
        //si mis c es tipo 1, 2 o 3
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
          //haga la variable movIzqC falso
        	movIzqP = false;
        }else{
          //si no pues es verdad
          movIzqP = true;
        }
      }
      
      //si la posición de misC se encuentra en los pixeles indicados (a la derecha de chock)
      if(misP[i8].x>416-32&&misP[i8].x<416+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
        //si mis c es tipo 1, 2 o 3
        if(misP[i8].tipo==1||misP[i8].tipo==2||misP[i8].tipo==3){
          //haga la variable movDerC falso
        	movDerP = false;
        }else{
          //si no pues es verdad
          movDerP = true;
        }
      }
      
      //si rotación en y es mayor a 15
      //misC 999 + 32 es mayor a 384
      //y a variable movDerC es verdadera
      //llama a la función derecha
      if(rotationY>15&&(misP[999].x+32)>=384&&movDerP == true){
    		misP[i8].derecha();
        //si rotación en y es menor a -15
      	//misC 0 - 32 es menor a 384
      	//y a variable movIzqC es verdadera
      	//llama a la función izquierda
    	}else if(rotationY<-15&&(misP[0].x-32)<=384&&movIzqP == true){
        misP[i8].izquierda();
        //si rotación en x es menor a -15
      	//misC 0 - 32 es menor a 768
      	//y a variable movUpC es verdadera
      	//llama a la función arriba
      }else if(rotationX<-15&&(misP[0].y-32)<=768&&movUpP == true){
        misP[i8].arriba();
        //si rotación en x es mayor a 15
      	//misC 999 + 32 es mayor a 768
      	//y a variable movDownC es verdadera
      	//llama a la función abajo
      }else if(rotationX>=15&&(misP[999].y+32)>=768&&movDownP == true){
        misP[i8].abajo();
      }else{
        //si no llama a la función stop
      	misP[i8].stop();
      }
      
      //ciclo de repeticiones que va hasta misC.length y aumenta de 1 en 1
      for (var i10=0;i10<misC.length;i10=i10+1){
        //si misC se encuentra en los pixeles indicados (en Chock)
      	if(misC[i10].x>384-32&&misC[i10].x<384+32&&misC[i10].y>256-32&&misC[i10].y<256+32){
          //y el tipo el igual a 4
      		if(misC[i10].tipo==4){
            //haga la variable llegoC verdadera
            llegoC=true;
        	}else{
            //si no hagala falsa
          	llegoC=false;
          }
      	}
      
       //si misP se encuentra en los pixeles indicados (en Chock) 
       if(misP[i8].x>384-32&&misP[i8].x<384+32&&misP[i8].y>768-32&&misP[i8].y<768+32){
         	//y el tipo el igual a 4
      		if(misP[i8].tipo==4){
            //haga la variable llegoP verdadera
            llegoP=true;
        	}else{
            //si no hagala falsa
          	llegoP=false;
          }
			 } 
       
        
      }
    }
    
    //ponga la imagen chock en posición 384 - 32, 256 - 32
    image(chock, 384 - 32, 256 - 32);
    //ponga la imagen chock en posición 384 - 32, 768 - 32
    image(chock, 384 - 32, 768 - 32);
  
    //cambia el color de relleno y pinta muchos rectangulos
    fill(0);
    rect(0,0,768,64);
    rect(0,64,64,896);
    rect(0,960,768,64);
    rect(704,64,64,896);
    rect(64,448,640,128);
    
    //cambia el color de relleno
    fill(255);
    //escribe el tiempo restante
    text(floor((120000-floor(millis() - tiempo))/1000), width / 2, height / 2);
    
    //si pasan 2 minutos
    if (millis() - tiempo > 120000){
      //cambia a estado 4
			estado = 4;
      //para ladrido
    	ladrido.stop();
      //hace la variable multjugador falsa
      multijugador=false;
		}
    
    //si llegoC y llegoP son verdaderas
    if(llegoC==true&&llegoP==true){
  		//haga la variable estado = 3     	
      estado = 3;
      //súmele a la variable panes 1
    	panes=panes+1;
      //para ladrido
  		ladrido.stop();  
  	}
  
    //si la variable estado es igual a 3
	  //poga la imagen ganaste en la posición 0,0
    //escriba has comido tantos panes
  } else if (estado == 3) {
    background(255);
    image(ganaste, 0, 0);
    text('HAS COMIDO ' + panes + ' PANES!', 384, 186);
    //si la variable estado es igual a 4
	  //poga la imagen perdiste en la posición 0,0
    //escriba comiste tantos panes
  } else if (estado == 4) {
    background(255);
    image(perdiste, 0, 0);
    fill(255);
    text('COMISTE ' + panes + ' PANES!', 384, 331);
  }
}

//cuando se suelta el mouse (que en realidad no es el mouse pero bueno)
function mouseReleased(){
  //si la variable estado el igual a 0
  if (estado == 0) {
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 253 && mouseX <= 514 && mouseY >= 280 && mouseY <= 344) {
      //cambie la variable estado a 2
      estado = 2;
      // haga tiempo igual a milisegundos
      tiempo=millis();
      //haga la variable casa falsa
      casa = false;
      
      //ciclo de 1000 repeticiones con variable i
      for (var i = 0; i < 1000; i = i + 1) {
        //llama las funciones limpiar para misC y misP en i
      	misC[i].limpiar();
        misP[i].limpiar();
      }
	  }
    
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 253 && mouseX <= 514 && mouseY >= 383 && mouseY <= 447) {
      //haga la variable estado igual a 1
      estado = 1;
    }
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 170 && mouseX <= 604 && mouseY >= 956 && mouseY <= 1002) {
      //haga la variable estado igual a 1
      estado = 5;
    }
    // si variable estado es igual a 1
  } else if (estado == 1) {
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 51 && mouseX <= 107 && mouseY >= 74 && mouseY <= 130) {
      //haga la variable estado igual a 0
      estado = 0;
    }
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 507 && mouseX <= 724 && mouseY >= 904 && mouseY <= 957) {
      //haga la variable estado igual a 1
      estado = 2;
      // haga tiempo igual a milisegundos
      tiempo=millis();
      //haga la variable casa falsa
      casa = false;
      
      //ciclo de 1000 repeticiones con variable i0
      for (var i0 = 0; i0 < 1000; i0 = i0 + 1) {
        //llama las funciones limpiar para misC y misP en i0
      	misC[i0].limpiar();
        misP[i0].limpiar();
      }
    }
    // si variable estado es igual a 4
  } else if (estado == 4) {
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 263.5 && mouseX <= 526.5 && mouseY >= 372.5 && mouseY <= 438.5) {
      //haga la variable estado igual a 1
      estado = 0;
      //haga la variable panes igual a 0
      panes = 0;
    }
    // si variable estado es igual a 3
  } else if (estado == 3) {
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 275.5 && mouseX <= 538.5 && mouseY >= 226.5 && mouseY <= 292.5) {
      //haga la variable estado igual a 2
      estado = 2;
      //haga la variable tiempo igual a milisegundos
      tiempo=millis();
      //haga la variable casa falsa
      casa = false;
      
      //ciclo de 1000 repeticiones con variable i1
      for (var i1 = 0; i1 < 1000; i1 = i1 + 1) {
        //llama las funciones limpiar para misC y misP en i1
      	misC[i1].limpiar();
        misP[i1].limpiar();
      }
      //haga las variables llegoC y llegoP falsas
    llegoC=false;
    llegoP=false;
    }
    // si variable estado es igual a 5
  }  else if (estado == 5) {
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 51 && mouseX <= 107 && mouseY >= 74 && mouseY <= 130) {
      //haga la variable estado igual a 0
      estado = 0;
    }
    //si el mouse está entre los pixeles indicados
    if (mouseX >= 507 && mouseX <= 724 && mouseY >= 904 && mouseY <= 957) {
      //haga la variable estado igual a 2
      estado = 2;
      //haga la variable tiempo igual a milisegundos
      tiempo=millis();
      //haga la variable casa falsa
      casa = false;
      //haga la variable multijugador verdadera
      multijugador =true;
      
      //ciclo de 1000 repeticiones con variable i2
      for (var i2 = 0; i2 < 1000; i2 = i2 + 1) {
        //llama las funciones limpiar para misC y misP en i2
      	misC[i2].limpiar();
        misP[i2].limpiar();
      }
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