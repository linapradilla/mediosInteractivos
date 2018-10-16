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
var numGarnet=1;

var misRubi=[];
var numRubi=1;

var misSaphire=[];
var numSaphire=1;

var misStevonny=[];
var numStevonny=1;

var misSteven=[];
var numSteven=1;

var misConnie=[];
var numConnie=1;

var misMariposas=[];
var numMariposas=0;

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
  //llega hasta la variable numRubi 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función rubi
	for (var i = 0; i < numRubi; i = i + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY = random(0, height);
    
		//asigna al arreglo un nuevo dato que referencia a la funcion rubi
		misRubi[i] = new rubi(tempX, tempY);
    
    //crea una variable que empieza en uno
  	//llega hasta la variable numGarnet 
 		//y aumenta de uno en uno
  	//cada vez que se completa este ciclo se agrega
  	//una pocición random x y y al arreglo 
  	// y referencia la función Garnet
    for (var i5= 0; i5< numGarnet+1;i5=i5+ 1) { 
      
      //asigna al arreglo un nuevo dato que referencia a la función garnet
    	misGarnet[i]= new garnet(tempX,tempY);
  	}
	} 
  
  //crea una variable que empieza en uno
  //llega hasta la variable numSaphire 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función saphire
  for (var i1 = 0; i1 < numSaphire; i1 = i1 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX1 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY1 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion saphire
		misSaphire[i1] = new saphire(tempX1, tempY1);
	}
  
  //crea una variable que empieza en uno
  //llega hasta la variable numSteven 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función steven
  for (var i2 = 0; i2 < numSteven; i2 = i2 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX2 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY2 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion steven
		misSteven[i2] = new steven(tempX2, tempY2);
    
    //crea una variable que empieza en uno
  	//llega hasta la variable numStevonny 
  	//y aumenta de uno en uno
  	//cada vez que se completa este ciclo se agrega
  	//una pocición random x y y al arreglo 
  	// y referencia la función stevonny
    for (var i6= 0; i6< numStevonny+1;i6=i6+ 1) {
      //asigna al arreglo un nuevo dato que referencia a la funcion stevonny
    	misStevonny[i6]= new stevonny(tempX2,tempY2);
  	}
	}
  
  //crea una variable que empieza en uno
  //llega hasta la variable numConnie 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función connie
  for (var i3 = 0; i3 < numConnie; i3 = i3 + 1) {
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
  
  //pone una imagen en la pocisión 0 0
  image(f,0,0);
  
  //crea una variable que empieza en uno
  //llega hasta la variable numMariposas 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //una pocición random x y y al arreglo 
  // y referencia la función mariposa
	for (var i4 = 0; i4 < numMariposas; i4 = i4 + 1) {
    //variable que crea un número aleatorio entre 0 y el ancho
		var tempX4 = random(0, width);
    //variable que crea un número random entre 0 y el alto
		var tempY4 = random(0, height);

    //asigna al arreglo un nuevo dato que referencia a la funcion mariposa
		misMariposas[i4] = new mariposa(tempX4, tempY4);
	}
    
  //crea una variable que empieza en uno
  //llega hasta la variable numRubi 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //se mueve Rubi, Saphire, Garnet, Steven, Connie y Stevonny. 
  for (var i = 0; i < numRubi; i = i + 1) {
		misRubi[i].moverse();
    misSaphire[i].moverse();
    misGarnet[i].moverse();
    misSteven[i].moverse();
    misConnie[i].moverse();
    misStevonny[i].moverse();
    
    //si garnet está muerto, dibuje a rubi y Saphire
    if(misGarnet[i].estaVivo==false){
      misRubi[i].dibujarse();
    	misSaphire[i].dibujarse();
    }
    
    //crea una variable que empieza en uno
  	//llega hasta la variable numSaphire 
  	//y aumenta de uno en uno 
    for(var i1=0;i1<numSaphire;i1=i1+1){
      
      //si la distancia ente Rubi y Saphire es menor a 60
    	if(dist(misSaphire[i1].x, misSaphire[i1].y, misRubi[i].x, misRubi[i].y) < 60){
        // si Rubi y Saphire están vivos matelos y que Garnet viva
      	if(misSaphire[i1].estaVivo==true&&misRubi[i].estaVivo==true){
        	misSaphire[i1].morirse();
          misRubi[i].morirse();
          misGarnet[i].vivir();
        }
      }
      
      //si rubi y Saphire están muertos dibuje a garnet
      if(misSaphire[i1].estaVivo==false&&misRubi[i].estaVivo==false){
    		misGarnet[i].dibujarse();
    	}
    }
  
  //si stevonny está muerto dibuje Steven y Connie
  if(misStevonny[i].estaVivo==false){
      misSteven[i].dibujarse();
    	misConnie[i].dibujarse();
    }
    
    //crea una variable que empieza en uno
  	//llega hasta la variable numSaphire 
  	//y aumenta de uno en uno
    for(var i2=0;i2<numConnie;i2=i2+1){
      
      //si la distancia entre Steven y connie es menor a 60
    	if(dist(misConnie[i2].x, misConnie[i2].y, misSteven[i].x, misSteven[i].y) < 60){
        //si steven y Connie están vivos, mátelos y haga vivir a stevonny
      	if(misConnie[i2].estaVivo==true&&misSteven[i].estaVivo==true){
        	misConnie[i2].morirse();
          misSteven[i].morirse();
          misStevonny[i].vivir();
        }
      }
      
      //si connie y steven están muertos dibuje a stevonny
      if(misConnie[i2].estaVivo==false&&misSteven[i].estaVivo==false){
    		misStevonny[i].dibujarse();
    	}
    }
  }
  
  //crea una variable que empieza en uno
  //llega hasta la variable numMariposas 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo 
  //dibuje y mueva las mariposas
  for(var i3=0;i3<numMariposas;i3=i3+1){
  	misMariposas[i3].dibujarse();
    misMariposas[i3].moverse();
    
    //crea una variable que empieza en uno
 		//llega hasta la variable numGarnet 
  	//y aumenta de uno en uno 
    for(var i4=0;i4<numGarnet;i4=i4+1){
      //si la distancia entre Garnet y las mariposas es menor que 60
    	if(dist(misGarnet[i4].x, misGarnet[i4].y, misMariposas[i3].x, misMariposas[i3].y) < 60){
        //si garnet está vivo, mate a Garnet y haga vivir a rubí y Saphire
      	if(misGarnet[i4].estaVivo==true){
        	misSaphire[i4].vivir();
          misRubi[i4].vivir();
          misGarnet[i4].morirse();
        }
    	}
  	}
    
    //crea una variable que empieza en uno
  	//llega hasta la variable numStevonny 
  	//y aumenta de uno en uno 
    for(var i5=0;i5<numStevonny;i5=i5+1){
      //si la istancia entre stevonny y mariposas es menor a 60
    	if(dist(misStevonny[i5].x, misStevonny[i5].y, misMariposas[i3].x, misMariposas[i3].y) < 60){
        //si stevonny está vivo, mátelo y haga vivir a Connie y Steven
      	if(misStevonny[i5].estaVivo==true){
        	misConnie[i5].vivir();
          misSteven[i5].vivir();
          misStevonny[i5].morirse();
        }
    	}
  	}
   }
  
  //la velocidad de las mariposas se obtiene de la division de 44 segundos entre el intervalo de dos clics
  //tiempo[1] = tiempo en el que se hizo el primer clic
  //tiempo[0] = tiempo en el que se hizo el segundo clic
  var vel = 44000 / (tiempo[1] - tiempo[0]);

  //si han pasado mas de 200 millisegundos entre un clic y otro se asigna un valor de 0 a la velocidad
  if (millis() - tiempo[1] > 200) {
    vel = 0;
  }

  
  //revisa que la velocidad no sea infinita (es decir que no exista) y que sea mayor a 200 clics por segundo
  if (vel != Infinity && floor(vel) > 200){

    //aumenta la variabe numMariposas dependiendo de los clics por minuto
    numMariposas=numMariposas+1;
	}else {

    //establece 0 como el valor predeterminado para la variable
    numMariposas = 0;

  }
  
}


function garnet(xG,yG){
	// caraceristicas
	this.x = xG;
	this.y = yG;
  this.velx = 1;
  this.vely = 1;
	this.estaVivo = false;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(G,this.x-60,this.y-60);
		}
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.vivir = function() {
    this.estaVivo=true;
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
  this.velx = 1;
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
  
  this.vivir = function() {
    this.estaVivo=true;
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
  
  this.vivir = function() {
    this.estaVivo=true;
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
	this.estaVivo = false;

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
  
  this.vivir = function() {
    this.estaVivo=true;
  }
}

function steven(xSte,ySte){
	// caraceristicas
	this.x = xSte;
	this.y = ySte;
  this.velx = 1;
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
  
  this.vivir = function() {
    this.estaVivo=true;
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
  
  this.vivir = function() {
    this.estaVivo=true;
  }
}

function mariposa(xB,yB){
	// caraceristicas
	this.x = xB;
	this.y = yB;

	// habilidades
	this.dibujarse = function() {
			image(B,this.x-60,this.y-60);
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
}

//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  //recorre la lista de Rubi
  for (var i = 0; i < numRubi; i=i+1) {

    //revisa si el mouse esta encima de misRubi
    if (dist(mouseX, mouseY, misRubi[i].x, misRubi[i].y) <60) {

      //llama a la funcion arrastrar
      misRubi[i].arrastrar();
      misGarnet[i].arrastrar();
    }
  }
  
  //recorre la lista de saphire
  for (var i1 = 0; i1 < numSaphire; i1=i1+1) {

    //revisa si el mouse esta encima de misSaphire
    if (dist(mouseX, mouseY, misSaphire[i1].x, misSaphire[i1].y) <60) {

      //llama a la funcion arrastrar
      misSaphire[i1].arrastrar();
    }
  }
  
  //recorre la lista de Garnet
  for (var i2 = 0; i2 < misGarnet; i2=i2+1) {

    //revisa si el mouse esta encima de misGarnet
    if (dist(mouseX, mouseY, misGarnet[i2].x, misGarnet[i2].y) <60) {

      //llama a la funcion arrastrar
      misRubi[i].arrastrar();
      misGarnet[i].arrastrar();
    }
  }
  
  //recorre la lista de steven
  for (var i3 = 0; i3 < numSteven; i3=i3+1) {

    //revisa si el mouse esta encima de misSteven
    if (dist(mouseX, mouseY, misSteven[i3].x, misSteven[i3].y) <60) {

      //llama a la funcion arrastrar
      misSteven[i3].arrastrar();
      misStevonny[i3].arrastrar();
    }
  }
  
  //recorre la lista de connie
  for (var i4 = 0; i4 < numConnie; i4=i4+1) {

    //revisa si el mouse esta encima de misConnie
    if (dist(mouseX, mouseY, misConnie[i4].x, misConnie[i4].y) <60) {

      //llama a la funcion arrastrar
      misConnie[i4].arrastrar();
    }
  }
  
  //recorre la lista de stevonny
  for (var i5 = 0; i5 < numStevonny; i5=i5+1) {

    //revisa si el mouse esta encima de misStevonny
    if (dist(mouseX, mouseY, misStevonny[i5].x, misStevonny[i5].y) <60) {

      //llama a la funcion arrastrar
      misSteven[i5].arrastrar();
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