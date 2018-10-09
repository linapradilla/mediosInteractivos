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
var numGarnet=5

var misRubi=[];
var numRubi=5;

var misSaphire=[];
var numSaphire=5;

var misStevonny=[];
var numStevonny=5

var misSteven=[];
var numSteven=5;

var misConnie=[];
var numConnie=5;

var misMariposas=[];
var numMariposas=20;

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
  
}

function draw() {
  //crea el background
  background(255);
  
  //pone una imagen en la pocisión 0 0
  image(f,0,0);
    
  //crea una variable que empieza en uno
  //llega hasta la variable numRubi 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //se dibuja y se mueve Rubi
  for (var i = 0; i < numRubi; i = i + 1) {
		misRubi[i].dibujarse();
		misRubi[i].moverse();
    
    //crea una variable que empieza en uno
	 	//llega hasta la variable numGarnet 
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //recorren las pocisiones de misGarnet[]
  	for (var i8 =0; i8 < numGarnet; i8=i8+1){
      //si misGarnet esta vivo, misRubi se muere
      //si misGarnet esta muerto, misRubi viva
    	if(misGarnet[i8].estaVivo==true){
      	misRubi[i].morirse();
      }else{
        misRubi[i].vivir();
      }
    } 
    
    //crea una variable que empieza en uno
	 	//llega hasta la variable numSaphire
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //se compara la distancia los rubi con los saphire
    for (var i3 = 0; i3 < numSaphire; i3 = i3 + 1) {
      //si la distancia entre un rubi y un saphire es menor a 60
			if (dist(misSaphire[i3].x, misSaphire[i3].y, misRubi[i].x, misRubi[i].y) < 60){
        //si rubi y Saphire están vivos
				if(misRubi[i].estaVivo==true&&misSaphire[i3].estaVivo==true){
          //rubi y saphire mueren muajajaja
        	misRubi[i].morirse();
        	misSaphire[i3].morirse();
      	}
			}
  	}
	}

  //crea una variable que empieza en uno
	//llega hasta la variable numSaphire 
	//y aumenta de uno en uno
  //cada vez que se completa este ciclo
	//saphiro se dibuja y se mueve
	for (var i2 = 0; i2 < numSaphire; i2 = i2 + 1) {
		misSaphire[i2].dibujarse();
		misSaphire[i2].moverse();
    
    //crea una variable que empieza en uno
	 	//llega hasta la variable numGarnet 
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //recorren las pocisiones de misGarnet[]
    for (var i9 =0; i9 < numGarnet; i9=i9+1){
      //si misGarnet esta vivo, misSaphire se muere
      //si misGarnet esta muerto, misSaphire viva
    	if(misGarnet[i9].estaVivo==true){
      	misSaphire[i2].morirse();
      }else{
      misSaphire[i2].vivir();
      }
    }
	}
  
  //crea una variable que empieza en uno
	//llega hasta la variable numGarnet 
	//y aumenta de uno en uno
  for (var i4 = 0; i4 < numGarnet; i4 = i4 + 1) {
    //crea una variable que empieza en uno
		//llega hasta la variable numRubi 
		//y aumenta de uno en uno
  	//cada vez que se completa este ciclo se 
		//recorren las pocisiones rubi
    //y se se dibuja y se mueve garnet
    for(var i7 =0; i7 < numRubi; i7=i7+1){
      misGarnet[i7].dibujarse();
   		misGarnet[i7].moverse();
      
      //si rubi esta muerto, garnet vive
      //si rubi vive garnet muere
	  	if(misRubi[i7].estaVivo==false){
        misGarnet[i7].vivir();
	    }else{
        misGarnet[i7].morirse();
      }
      
  //crea una variable que empieza en uno
	//llega hasta la variable numMariposa 
	//y aumenta de uno en uno
  //cada vez que se completa este ciclo se 
	//recorren las pocisiones mariposa y se compara la distencia entre mariposa y garnet
      for(var i6=0;i6< numMariposas; i6=i6+1){
        //si la distancia es menor a 60
    		if(dist(misGarnet[i7].x,misGarnet[i7].y,misMariposas[i6].x,misMariposas[i6])<60){
          //si garnet esta vivo, garnet se muere y rubí y saphire viven
  				if(misGarnet[i7].estaVivo==true){
       			misGarnet[i7].morirse();
        		misRubi[i7].vivir();
       			misSaphire[i7].vivir();
        	}
     		}
    	}
    }
	}
  
  //crea una variable que empieza en uno
  //llega hasta la variable numSteven 
  //y aumenta de uno en uno
  //cada vez que se completa este ciclo se agrega
  //se dibuja y se mueve steven
  for (var i10 = 0; i10 < numSteven; i10 = i10 + 1) {
		misSteven[i10].dibujarse();
		misSteven[i10].moverse();
    
    //crea una variable que empieza en uno
	 	//llega hasta la variable numStevonny 
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //recorren las pocisiones de misStevonny[]
  	for (var i11 =0; i11 < numStevonny; i11=i11+1){
      //si misStevonny esta vivo, misSteven se muere
      //si misStevonny esta muerto, misSteven viva
    	if(misStevonny[i11].estaVivo==true){
      	misSteven[i10].morirse();
      }else{
        misSteven[i10].vivir();
      }
    } 
    
     //crea una variable que empieza en uno
	 	//llega hasta la variable numConnie
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //se compara la distancia los rubi con los connie
    for (var i12 = 0; i12 < numConnie; i12 = i12 + 1) {
      //si la distancia entre un steven y un connie es menor a 60
			if (dist(misConnie[i12].x, misConnie[i12].y, misSteven[i10].x, misSteven[i10].y) < 60){
        //si steven y connie están vivos
				if(misSteven[i10].estaVivo==true&&misConnie[i12].estaVivo==true){
          //steven y connie mueren muajajaja
        	misSteven[i10].morirse();
        	misConnie[i12].morirse();
      	}
			}
  	}
	}
	
  //crea una variable que empieza en uno
	//llega hasta la variable numConnie 
	//y aumenta de uno en uno
  //cada vez que se completa este ciclo
	//connie se dibuja y se mueve
	for (var i13 = 0; i13 < numConnie; i13 = i13 + 1) {
		misConnie[i13].dibujarse();
		misConnie[i13].moverse();
    
    //crea una variable que empieza en uno
	 	//llega hasta la variable numStevonny 
	  //y aumenta de uno en uno
	  //cada vez que se completa este ciclo se 
	  //recorren las pocisiones de misStevonny[]
    for (var i14 =0; i14 < numStevonny; i14=i14+1){
      //si misStevonny esta vivo, misConnie se muere
      //si misStevonny esta muerto, misConnie viva
    	if(misStevonny[i14].estaVivo==true){
      	misConnie[i13].morirse();
      }else{
      	misConnie[i13].vivir();
      }
    }
	}
  
  //crea una variable que empieza en uno
	//llega hasta la variable numStevonny 
	//y aumenta de uno en uno
  for (var i15 = 0; i15 < numStevonny; i15 = i15 + 1) {
    //crea una variable que empieza en uno
		//llega hasta la variable numSteven 
		//y aumenta de uno en uno
  	//cada vez que se completa este ciclo se 
		//recorren las pocisiones steven
    //y se se dibuja y se mueve Stevonny
    for(var i16 =0; i16 < numSteven; i16=i16+1){
      misStevonny[i16].dibujarse();
   		misStevonny[i16].moverse();
      
      //si steven esta muerto, stevonny vive
      //si steven vive stevonny muere
	  	if(misSteven[i16].estaVivo==false){
        misStevonny[i16].vivir();
	    }else{
        misStevonny[i16].morirse();
      }
      
      //crea una variable que empieza en uno
			//llega hasta la variable numMariposa 
			//y aumenta de uno en uno
  		//cada vez que se completa este ciclo se 
			//recorren las pocisiones mariposa y se compara la distencia entre mariposa y stevonny
      for(var i17=0;i17< numMariposas; i17=i17+1){
        //si la distancia es menor a 60
    		if(dist(misStevonny[i16].x,misStevonny[i16].y,misMariposas[i17].x,misMariposas[i17])<60){
          //si stevonny esta vivo, stevonny se muere y steven y connie viven
  				if(misStevonny[i16].estaVivo==true){
       			misStevonny[i16].morirse();
        		misSteven[i16].vivir();
       			misConnie[i16].vivir();
        	}
     		}
    	}
    }
	}
  
  //crea una variable que empieza en uno
	//llega hasta la variable numMariposas 
	//y aumenta de uno en uno
  //cada vez que se completa este ciclo
	//se dibuja y se mueve
  for (var i5 =0; i5 < numMariposas; i5=i5+1){
  	misMariposas[i5].dibujarse();
    misMariposas[i5].moverse();
  }
  
}


function garnet(xG,yG){
	// caraceristicas
	this.x = xG;
	this.y = yG;
	this.estaVivo = false;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(G,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.vivir = function() {
    this.estaVivo=true;
  }
}

function rubi(xR,yR){
	// caraceristicas
	this.x = xR;
	this.y = yR;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(R,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.vivir = function() {
    this.estaVivo=true;
  }
}

function saphire(xS,yS){
	// caraceristicas
	this.x = xS;
	this.y = yS;
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(S,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}

	this.morirse = function() {
		this.estaVivo = false;
	}
  
  this.vivir = function() {
    this.estaVivo=true;
  }
}

function stevonny(xSvonny,ySvonny){
	// caraceristicas
	this.x = xSvonny;
	this.y = ySvonny;
	this.estaVivo = false;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(Svonny,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
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
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(Ste,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
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
	this.estaVivo = true;

	// habilidades
	this.dibujarse = function() {
		if (this.estaVivo == true) {
			image(C,this.x-60,this.y-60);
		}
	}

	this.moverse = function() {
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
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