//crear variables para subir archivos
var f
var G;
var R;
var S;
var Svonny;
var Ste;
var C;
var B;
var song;

//variables para el desarrollo práctico
var misGarnet=[];
var misRubi=[];
var misSaphire=[];
var misStevonny=[];
var misSteven=[];
var misConnie=[];
var bolitas=[];

var tiempo=[0,0];
var vel=0;

function preload() {
  //sube las imágenes
  f=loadImage('assets/fondo.png');
  G=loadImage('assets/garnet.png');
  R=loadImage('assets/rubi.png');
  S=loadImage('assets/saphire.png');
  Svonny=loadImage('assets/stevonny.png');
  Ste=loadImage('assets/steven.png');
  C=loadImage('assets/connie.png');
  B=loadImage('assets/mariposa.png');
  
  //sube el sonido de fondo
	song=loadSound('assets/song.mp3');
}

function setup() {
  //crea el canvas
  createCanvas(1000, 800);
  
  //reproduce el sonido en loop
  song.loop();
  
  //crea una variable que empieza en uno
  //llega hasta 3
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función rubi
	for (var i = 0; i < 3; i = i + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY = random(0, height);
    
		//asigna al arreglo un nuevo dato que referencia a la funcion rubi
		misRubi[i] = new rubi(tempX, tempY);
	} 
  
  //crea una variable que empieza en uno
  //llega hasta 3 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función saphire
  for (var i1 = 0; i1 < 3; i1 = i1 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX1 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY1 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion saphire
		misSaphire[i1] = new saphire(tempX1, tempY1);
	}
  
  //crea una variable que empieza en uno
  //llega hasta la variable 3
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función steven
  for (var i2 = 0; i2 < 3; i2 = i2 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX2 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY2 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion steven
		misSteven[i2] = new steven(tempX2, tempY2);
	}
  
  //crea una variable que empieza en uno
  //llega hasta 3
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función connie
  for (var i3 = 0; i3 < 3; i3 = i3 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX3 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY3 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion connie
		misConnie[i3] = new connie(tempX3, tempY3);
	}
}

function draw() {
  
  //crea el background
  background(255);
  
  //pone una imagen en la posición 0 0
  image(f,0,0);
  
  //la velocidad de la bola se obtiene de la division de 60 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  vel = 60000 / (tiempo[1] - tiempo[0]);

  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }
  
  if(vel>200){
  	bolitas[bolitas.length]= new bola(random(0,width),height+60);
  }
 
  //crea una variable que empieza en uno
  //llega hasta la variable misRubi.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve rubi 
  for (var i1 = 0; i1 < misRubi.length; i1 = i1+ 1) {
		misRubi[i1].moverse();
    misRubi[i1].dibujarse();
    
    //crea una variable que empieza en uno
  	//llega hasta misSaphire.length 
  	//y aumenta de uno en uno 
    for(var i2=0;i2<misSaphire.length;i2=i2+1){
      //si la distancia ente Rubi y Saphire es menor a 60
    	if(dist(misSaphire[i2].x, misSaphire[i2].y, misRubi[i1].x, misRubi[i1].y) < 60){
        // si Rubi y Saphire están vivos matelos y agrege una posición a garnet
      	if(misSaphire[i2].estaVivo==true&&misRubi[i1].estaVivo==true){
        	misSaphire[i2].morirse();
          misRubi[i1].morirse();
          misGarnet[misGarnet.length]= new garnet(misRubi[i1].x,misRubi[i1].y);
        }
      }
    }
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable misSaphire.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve saphire 
  for (var i3 = 0; i3 < misSaphire.length; i3 = i3 + 1) {
		misSaphire[i3].moverse();
    misSaphire[i3].dibujarse();
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable misGarnet.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve garnet 
  for (var i4 = 0; i4 < misGarnet.length; i4 = i4 + 1) {
		misGarnet[i4].moverse();
    misGarnet[i4].dibujarse();
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable misSteven.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve rubi 
  for (var i5 = 0; i5 < misSteven.length; i5 = i5+ 1) {
		misSteven[i5].moverse();
    misSteven[i5].dibujarse();
    
    //crea una variable que empieza en uno
  	//llega hasta misConnie.length 
  	//y aumenta de uno en uno 
    for(var i6=0;i6<misConnie.length;i6=i6+1){
      //si la distancia ente steven y connie es menor a 60
    	if(dist(misConnie[i6].x, misConnie[i6].y, misSteven[i5].x, misSteven[i5].y) < 60){
        // si steven y connie están vivos matelos y agrege una posición a stevonny
      	if(misConnie[i6].estaVivo==true&&misSteven[i5].estaVivo==true){
        	misConnie[i6].morirse();
          misSteven[i5].morirse();
          misStevonny[misStevonny.length]= new stevonny(misSteven[i5].x,misSteven[i5].y);
        }
      }
    }
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable misConnie.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve connie 
  for (var i7 = 0; i7 < misConnie.length; i7 = i7 + 1) {
		misConnie[i7].moverse();
    misConnie[i7].dibujarse();
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable misStevonny.length
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se dibuja y mueve stevonny 
  for (var i8 = 0; i8 < misStevonny.length; i8 = i8 + 1) {
		misStevonny[i8].moverse();
    misStevonny[i8].dibujarse();
  }
  
  for (i=0;i<bolitas.length;i=i+1){
  	bolitas[i].dibujarse();
    bolitas[i].moverse();
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable numMariposas 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //dibuje y mueva las mariposas
  for(var i9=0;i9<bolitas.length;i9=i9+1){ 
   
    //crea una variable que empieza en uno
 		//llega hasta misGarnet.length 
  	//y aumenta de uno en uno 
    for(var i10=0;i10<misGarnet.length;i10=i10+1){
      //si la distancia entre Garnet y las mariposas es menor que 60
    	if(dist(misGarnet[i10].x, misGarnet[i10].y, bolitas[i9].x, bolitas[i9].y) < 60){
        //si garnet está vivo, mate a Garnet y haga vivir a rubí y Saphire
      	if(misGarnet[i10].estaVivo==true){
          misSaphire[misSaphire.length]= new saphire(misGarnet[i10].x +60,misGarnet[i10].y);
        	misRubi[misRubi.length]= new rubi(misGarnet[i10].x-60,misGarnet[i10].y);
          misGarnet[i10].morirse();
        }
    	}
  	}
    
    //crea una variable que empieza en uno
  	//llega hasta la variable misStevonny.length 
  	//y aumenta de uno en uno 
    for(var i11=0;i11<misStevonny.length;i11=i11+1){
      //si la distancia entre stevonny y mariposas es menor a 60
    	if(dist(misStevonny[i11].x, misStevonny[i11].y, bolitas[i9].x, bolitas[i9].y) < 60){
        //si stevonny está vivo, mátelo y haga vivir a Connie y Steven
      	if(misStevonny[i11].estaVivo==true){
        	misConnie[misConnie.length]= new connie(misStevonny[i11].x +60,misStevonny[i11].y);
        	misSteven[misSteven.length]= new steven(misStevonny[i11].x-60,misStevonny[i11].y);
          misStevonny[i11].morirse();
        }
    	}
  	}
   }
}


function garnet(xG,yG){
	// caraceristicas
	this.x = xG;
	this.y = yG;
  this.velx = 1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(G,this.x-60,this.y-60);
		}
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.moverse = function() {

    //el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

function rubi(xR,yR){
	// caraceristicas
	this.x = xR;
	this.y = yR;
  this.velx = -1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(R,this.x-60,this.y-60);
		}
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.moverse = function() {
		//el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

function saphire(xS,yS){
	// caraceristicas
	this.x = xS;
	this.y = yS;
  this.velx = 1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(S,this.x-60,this.y-60);
		}
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.moverse = function() {
		//el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

function stevonny(xSvonny,ySvonny){
	// caraceristicas
	this.x = xSvonny;
	this.y = ySvonny;
  this.velx = 1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(Svonny,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		//el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

	this.morirse = function() {
		this.estaVivo = false;
	}
}

function steven(xSte,ySte){
	// caraceristicas
	this.x = xSte;
	this.y = ySte;
  this.velx = -1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(Ste,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		//el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

	this.morirse = function() {
		this.estaVivo = false;
	}
}

function connie(xC,yC){
	// caraceristicas
	this.x = xC;
	this.y = yC;
  this.velx = 1;
  this.vely = 1;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(C,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		//el movimiento se asigna por la posicion + la velocidad
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    //condicionales para el rebote
    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  //cuando se activa esta funcion se cambia la posicion por la del mouse
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

	this.morirse = function() {
		this.estaVivo = false;
	}
}

function bola(xB,yB){
	// caraceristicas
	this.x = xB;
	this.y = yB;

	// habilidades
	this.dibujarse = function() {
		image(B,this.x-60,this.y-60);
	}

	this.moverse = function() {
		this.y = this.y -10;
    this.x = this.x + random(-3,3);
	}
}
//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  //recorre la lista de Rubi
  for (var i = 0; i < misRubi.length; i=i+1) {

    //revisa si el mouse esta encima de misRubi
    if (dist(mouseX, mouseY, misRubi[i].x, misRubi[i].y) <60) {

      //llama a la funcion arrastrar
      misRubi[i].arrastrar();
    }
  }
  
  //recorre la lista de saphire
  for (var i1 = 0; i1 < misSaphire.length; i1=i1+1) {

    //revisa si el mouse esta encima de misSaphire
    if (dist(mouseX, mouseY, misSaphire[i1].x, misSaphire[i1].y) <60) {

      //llama a la funcion arrastrar
      misSaphire[i1].arrastrar();
    }
  }
  
  //recorre la lista de Garnet
  for (var i2 = 0; i2 < misGarnet.length; i2=i2+1) {

    //revisa si el mouse esta encima de misGarnet
    if (dist(mouseX, mouseY, misGarnet[i2].x, misGarnet[i2].y) <60) {

      //llama a la funcion arrastrar
      misGarnet[i2].arrastrar();
    }
  }
  
  //recorre la lista de steven
  for (var i3 = 0; i3 <misSteven.length; i3=i3+1) {

    //revisa si el mouse esta encima de misSteven
    if (dist(mouseX, mouseY, misSteven[i3].x, misSteven[i3].y) <60) {

      //llama a la funcion arrastrar
      misSteven[i3].arrastrar();
    }
  }
  
  //recorre la lista de connie
  for (var i4 = 0; i4 < misConnie.length; i4=i4+1) {

    //revisa si el mouse esta encima de misConnie
    if (dist(mouseX, mouseY, misConnie[i4].x, misConnie[i4].y) <60) {

      //llama a la funcion arrastrar
      misConnie[i4].arrastrar();
    }
  }
  
  //recorre la lista de stevonny
  for (var i5 = 0; i5 < misStevonny.length; i5=i5+1) {

    //revisa si el mouse esta encima de misStevonny
    if (dist(mouseX, mouseY, misStevonny[i5].x, misStevonny[i5].y) <60) {

      //llama a la funcion arrastrar
      misStevonny[i5].arrastrar();
    }
  }
}

//funcion que se llama cuando se hace clic
function mouseClicked() {

  //el tiempo del segundo clic se corre a la segunda posicion
  tiempo[0] = tiempo[1];

  //se guarda el tiempo del primer clic en el arreglo
  tiempo[1] = millis();
}