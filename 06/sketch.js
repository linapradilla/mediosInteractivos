//crear variables
var miSong;
var songTime;
var miAnalizador;
var nivel;
var angle=0;
var angleDir=1;
var tic;
var dis=100;
var caida=0;

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var marco;
var font;

function preload(){
  //traer la canción a una variable
	miSong=loadSound('assets/ed.mp3');
  
  //traer imágenes a sus recpectivas variables
  img1=loadImage('assets/1.png');
  img2=loadImage('assets/2.png');
  img3=loadImage('assets/3.png');
  img4=loadImage('assets/4.png');
  img5=loadImage('assets/5.png');
  img6=loadImage('assets/6.png');
  img7=loadImage('assets/7.png');
  img8=loadImage('assets/8.PNG');
  img9=loadImage('assets/9.PNG');
  img10=loadImage('assets/10.PNG');
  img11=loadImage('assets/11.PNG');
  img12=loadImage('assets/12.PNG');
  img13=loadImage('assets/13.PNG');
  img14=loadImage('assets/14.PNG');
  marco=loadImage('assets/marco.png');
  
  //traer la fuente a su repectiva variable
  font = loadFont('assets/BebasNeue.ttf');
}

function setup() {
  
  //crear canvas
  createCanvas(1000,800);
  
  //en realidad no entiendo lo que pasa acá
  //de alguna manera hago que el computador lea
  //la amplitud del sonido y eso lo guardo en una variable
  //pero no estoy segura 
	miAnalizador=new p5.Amplitude();
  miAnalizador.setInput(miSong);

  //reproducir la canción
  miSong.play();
  
  //cabiar de de álculos a grados
  angleMode(DEGREES);
  
  //definir fuente
  textFont(font);
  
  //creo un background
  background(255);
  
}

function draw() {
  
  //creo un background que no aparesca entre los segundos 176 y 242
  //es que en esos segundos voy a hacer una especie de herramienta de dibujo ;)
  if(songTime>=0&&songTime<=175||songTime>=189&&songTime<=242){
  	background(255);
  }
  
  //definir tamaño del texo
  textSize(200);
  //definir la alineación
  textAlign(LEFT);
  
  //acá guardo el nivel de la amplitud en una variable (creo)
  nivel =miAnalizador.getLevel();
  //guardo el tiempo actual de la canción en una variable
  songTime=miSong.currentTime();
  
  //si estamos entre el segundo 0 y el 16
  if(songTime>=0&&songTime<=16){
    //ponga la primera imágen
  	image(img1,0,35);
    //definir sin línea
    noStroke();
    //si el nivel es mayor a 0.1
  	if(nivel>0.1){
      //cambio de relleno
      fill(0,255,255,100);
      //hace un círculo en la mitad de la pantalla
      //del tamaño del nivel multiplicado por 1000
      ellipse(width/2,height/2, nivel*1000,nivel*1000);
  	}
    
    	//cambio de color a la línea
    	stroke(255,255,0,100);
    	//ca,bio de grosor de la línea
    	strokeWeight(6);
    
    	//crea 4 líneas,reflejos en X y Y, que comienzan en 0,0
    	//y se transladan a la mitad de la pantalla
    	push();
    		translate(width/2,height/2);
      	line(0,0,mouseX,mouseY);
    		line(0,0,-mouseX,mouseY);
    		line(0,0,mouseX,-mouseY);
      	line(0,0,-mouseX,-mouseY);
    	pop();
      noStroke();
  }
  
  
  //si la canción está entre el segundo 16 y 30
  if(songTime>=16&songTime<=30){
    //crea una linea que comienza en 0,0
    //se translada a 500,800 y rota sobre
    //te punto según la variable angle
    push();
    	//cambia el grosor de la línea
    	strokeWeight(20);
    	//cambia el color de la línea
    	stroke(0);
    	translate(500,800);
    	rotate(angle);
    	line(0,0,0,-700);
    pop();   
    
    //se le suma 1.25 a la variable angle y se multiplica por la variable angleDir
  	angle=angle+1.25*angleDir;
    
    //pone los límites para que angle osile entre -35 y 35
    if(angle>35){
  		angleDir=-1;
  	}
  	if(angle<-35){
  		angleDir=1;
  	}
    
    //crea una línea en 0,0 la translada al punto 500,800 
    //y la hace rotar según la variable tic
    push();
    	//define tic como un número dado por la pocisión en x del mouse
      // y lo escala a -35,35
    	tic=map(mouseX,0,1000,-35,35);
    	//cambia el grosor de la línea
    	strokeWeight(20);
    	//cambia el color de la línea
    	stroke(0,0,0,100);
    	translate(500,800);
    	rotate(tic);
    	line(0,0,0,-700);
    pop();
  }
  
  //si la canción está entre 30 y 46
  if(songTime>=30&&songTime<=46){
    //ponga la imágen2
  	image(img2,0,0);
    
    //cambia el color del relleno
    fill(255,0,255,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree L
    if(mouseX>=334&&mouseX<=398&&mouseY>=324&&mouseY<=467){
    	text("L",330,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree I
    if(mouseX>=433&&mouseX<=463&&mouseY>=324&&mouseY<=467){
    	text("I",430,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree F
    if(mouseX>=500&&mouseX<=564&&mouseY>=324&&mouseY<=467){
    	text("F",500,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree E
    if(mouseX>=602&&mouseX<=666&&mouseY>=324&&mouseY<=467){
	    text("E",595,470);
    }
  }
  
  //si la canción se encuentra entre 46 y61
  if(songTime>=46&&songTime<=61){
    //ponga la imagen 3
  	image(img3,0,0);
    
    //cabie de color el relleno
    fill(255,255,0,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree S
    if(mouseX>=203&&mouseX<=277&&mouseY>=324&&mouseY<=467){
    	text("S",203,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree T
    if(mouseX>=277&&mouseX<=351&&mouseY>=324&&mouseY<=467){
    	text("T",277,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree R
    if(mouseX>=351&&mouseX<=425&&mouseY>=324&&mouseY<=467){
    	text("R",353,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree U
    if(mouseX>=425&&mouseX<=506&&mouseY>=324&&mouseY<=467){
	    text("U",430,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree G
    if(mouseX>=506&&mouseX<=586&&mouseY>=324&&mouseY<=467){
	    text("G",508,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree G
    if(mouseX>=586&&mouseX<=663&&mouseY>=324&&mouseY<=467){
	    text("G",583,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree L
    if(mouseX>=663&&mouseX<=737&&mouseY>=324&&mouseY<=467){
	    text("L",663,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree E
    if(mouseX>=737&&mouseX<=811&&mouseY>=324&&mouseY<=467){
	    text("E",733,470);
    }
  }
  
  //si songTime se encuentra entre 61 y 78
  if(songTime>=61&&songTime<=78){
    //ponga imagen 4
  	image(img4,0,0);
    
    //cambie de color el relleno
    fill(0,255,255,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree LAY
    if(mouseX>=262&&mouseX<=485&&mouseY>=109&&mouseY<=254){
    	text("LAY",260,250);
    }
    //si el mouse se encuentre entre los pixeles dichos cree IT
    if(mouseX>=584&&mouseX<=707&&mouseY>=109&&mouseY<=254){
    	text("IT",590,250);
    }
    //si el mouse se encuentre entre los pixeles dichos cree ALL
    if(mouseX>=266&&mouseX<=379&&mouseY>=321&&mouseY<=397){
    	text("ALL",279,465);
    } 
    //si el mouse se encuentre entre los pixeles dichos cree ON
    if(mouseX>=544&&mouseX<=708&&mouseY>=321&&mouseY<=397){
	    text("ON",545,465);
    }
    //si el mouse se encuentre entre los pixeles dichos cree ME
    if(mouseX>=402&&mouseX<=578&&mouseY>=526&&mouseY<=671){
	    text("ME",400,670);
    }
  }
  
  //si songTime se encuentra entre 78 y 82
  if(songTime>=78&&songTime<=82){
    //ponga la imagen 5
  	image(img5,0,0);
    
    //cambio de color el relleno
    fill(255,255,0,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree E
    if(mouseX>=250&&mouseX<=325&&mouseY>=312&&mouseY<=388){
    	text("E",250,450);
    }
    //si el mouse se encuentre entre los pixeles dichos cree A
    if(mouseX>=352&&mouseX<=437&&mouseY>=312&&mouseY<=388){
    	text("A",350,450);
    }
    //si el mouse se encuentre entre los pixeles dichos cree R
    if(mouseX>=465&&mouseX<=550&&mouseY>=312&&mouseY<=388){
    	text("R",464,450);
    } 
    //si el mouse se encuentre entre los pixeles dichos cree T
    if(mouseX>=563&&mouseX<=648&&mouseY>=312&&mouseY<=388){
	    text("T",570,450);
    }
    //si el mouse se encuentre entre los pixeles dichos cree H
    if(mouseX>=664&&mouseX<=749&&mouseY>=312&&mouseY<=388){
	    text("H",665,450);
    }
  }
  
  //si songTime se encuentra entre 82 y 92
  if(songTime>=82&&songTime<=92){
    //ponga imagen 6
  	image(img6,0,0);
    
    //cambie de color el relleno
    fill(255,0,255,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree REMEMBER
    if(mouseX>=164&&mouseX<=847&&mouseY>=232&&mouseY<=376){
    	text("REMEMBER",165,365);
    }
    //si el mouse se encuentre entre los pixeles dichos cree ME
    if(mouseX>=412&&mouseX<=592&mouseY>=440&&mouseY<=584){
    	text("ME",415,583);
    }
  }
  
  //si songTime se encuentra entre 92 y 100
  if(songTime>=92&&songTime<=100){
    //ponga imagen 7
  	image(img7,0,0);
    
    //cambie el color de relleno
    fill(0,255,255,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree I WILL
    if(mouseX>=162&&mouseX<=385&&mouseY>=109&&mouseY<=254){
    	text("I WILL",160,250);
    }
    //si el mouse se encuentre entre los pixeles dichos cree NEVER
    if(mouseX>=484&&mouseX<=607&&mouseY>=109&&mouseY<=254){
    	text("NEVER",490,250);
    }
    //si el mouse se encuentre entre los pixeles dichos cree LET
    if(mouseX>=166&&mouseX<=279&&mouseY>=321&&mouseY<=397){
    	text("LET",179,465);
    } 
    //si el mouse se encuentre entre los pixeles dichos cree YOU
    if(mouseX>=444&&mouseX<=608&&mouseY>=321&&mouseY<=397){
	    text("YOU",445,465);
    }
    //si el mouse se encuentre entre los pixeles dichos cree DOWN
    if(mouseX>=302&&mouseX<=478&&mouseY>=526&&mouseY<=671){
	    text("DOWN",300,670);
    }
  }
  
  //si sonTime se encuentra entre 100 y 105
  if(songTime>=100&&songTime<=105){
    //ponga imagen 8
  	image(img8,50,50);
    
    //cambie el color de relleno
    fill(255,255,0,100);
    
    //si el mouse se encuentre entre los pixeles dichos cree F
    if(mouseX>=203&&mouseX<=277&&mouseY>=324&&mouseY<=467){
    	text("F",203,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree R
    if(mouseX>=277&&mouseX<=351&&mouseY>=324&&mouseY<=467){
    	text("R",277,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree E
    if(mouseX>=351&&mouseX<=425&&mouseY>=324&&mouseY<=467){
    	text("E",353,470);
    } 
    //si el mouse se encuentre entre los pixeles dichos cree E
    if(mouseX>=425&&mouseX<=506&&mouseY>=324&&mouseY<=467){
	    text("E",430,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree D
    if(mouseX>=506&&mouseX<=586&&mouseY>=324&&mouseY<=467){
	    text("D",508,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree O
    if(mouseX>=586&&mouseX<=663&&mouseY>=324&&mouseY<=467){
	    text("O",583,470);
    }
    //si el mouse se encuentre entre los pixeles dichos cree M
    if(mouseX>=663&&mouseX<=737&&mouseY>=324&&mouseY<=467){
	    text("M",663,470);
    }
  }
  
  if(songTime>=105&&songTime<=110){
  	image(img9,50,50);
    
    fill(255,0,255,100);
    
    if(mouseX>=250&&mouseX<=325&&mouseY>=312&&mouseY<=388){
    	text("P",250,450);
    }
    if(mouseX>=352&&mouseX<=437&&mouseY>=312&&mouseY<=388){
    	text("E",350,450);
    }
    if(mouseX>=465&&mouseX<=550&&mouseY>=312&&mouseY<=388){
    	text("A",464,450);
    } 
    if(mouseX>=563&&mouseX<=648&&mouseY>=312&&mouseY<=388){
	    text("C",570,450);
    }
    if(mouseX>=664&&mouseX<=749&&mouseY>=312&&mouseY<=388){
	    text("E",665,450);
    }
  }
  
   if(songTime>=110&&songTime<=124){
    
  	for(var i=0;i<50;i=i+1){
    	var posX=mouseX+random(-100,100);
      var posY=mouseY+random(-100,100);
      
      fill(random,255,random,50);
      ellipse(posX,posY,20,20); 
    }
    for(i=0;i<100;i=i+1){
    	var pezX=random(0,width);
      var pezY=random(-100,height);
      
      fill(random,255,random,5);
      ellipse(pezX,pezY,30,30);
    }
  }
  
  if(songTime>=124&&songTime<=140){
  	image(img10,50,50);
    
    fill(0,255,255,100);
    
    if(mouseX>=93&&mouseX<=165&&mouseY>=324&&mouseY<=467){
    	text("F",94,470);
    }
    if(mouseX>=165&&mouseX<=240&&mouseY>=324&&mouseY<=467){
    	text("R",168,470);
    }
    if(mouseX>=240&&mouseX<=320&&mouseY>=324&&mouseY<=467){
    	text("U",248,470);
    } 
    if(mouseX>=320&&mouseX<=396&mouseY>=324&&mouseY<=467){
	    text("S",326,470);
    }
    if(mouseX>=396&&mouseX<=469&&mouseY>=324&&mouseY<=467){
	    text("T",397,470);
    }
    if(mouseX>=473&&mouseX<=545&&mouseY>=324&&mouseY<=467){
	    text("R",474,470);
    }
    if(mouseX>=554&&mouseX<=626&&mouseY>=324&&mouseY<=467){
	    text("A",555,470);
    }
    if(mouseX>=622&&mouseX<=694&&mouseY>=324&&mouseY<=467){
	    text("T",623,470);
    }
    if(mouseX>=677&&mouseX<=749&&mouseY>=324&&mouseY<=467){
	    text("I",678,470);
    }
    if(mouseX>=735&&mouseX<=807&&mouseY>=324&&mouseY<=467){
	    text("O",736,470);
    }
    if(mouseX>=806&&mouseX<=878&&mouseY>=324&&mouseY<=467){
	    text("N",818,470);
    }
  }
  
  if(songTime>=140&&songTime<=156){
    
  	fill(0);
    beginShape();
    	vertex(500,400-dis);
    	vertex(515,360);
    	vertex(500+dis,400-dis);
    	vertex(540,385);
    	vertex(500+dis,400);
    	vertex(540,415);
    	vertex(500+dis,400+dis);
    	vertex(515,440);
    	vertex(500,400+dis);
    	vertex(485,440);
    	vertex(500-dis,400+dis);
    	vertex(460,415);
    	vertex(500-dis,400);
    	vertex(460,385);
    	vertex(500-dis,400-dis);
    	vertex(485,360);
    endShape();
    
    if(mouseIsPressed==true){
    	dis=dis+1;
    }else{
      dis=dis-1;
      if(dis<100){
      	dis=100;
      }
    }
  }
  
  if(songTime>=156&&songTime<=175){
  	image(img11,50,50);
    
    fill(255,255,0,100);
    
    if(mouseX>=93&&mouseX<=165&&mouseY>=324&&mouseY<=467){
    	text("B",94,470);
    }
    if(mouseX>=165&&mouseX<=240&&mouseY>=324&&mouseY<=467){
    	text("R",168,470);
    }
    if(mouseX>=240&&mouseX<=320&&mouseY>=324&&mouseY<=467){
    	text("O",248,470);
    } 
    if(mouseX>=320&&mouseX<=396&mouseY>=324&&mouseY<=467){
	    text("T",326,470);
    }
    if(mouseX>=396&&mouseX<=469&&mouseY>=324&&mouseY<=467){
	    text("H",397,470);
    }
    if(mouseX>=473&&mouseX<=545&&mouseY>=324&&mouseY<=467){
	    text("E",474,470);
    }
    if(mouseX>=554&&mouseX<=626&&mouseY>=324&&mouseY<=467){
	    text("R",555,470);
    }
    if(mouseX>=622&&mouseX<=694&&mouseY>=324&&mouseY<=467){
	    text("H",623,470);
    }
    if(mouseX>=677&&mouseX<=749&&mouseY>=324&&mouseY<=467){
	    text("O",678,470);
    }
    if(mouseX>=735&&mouseX<=807&&mouseY>=324&&mouseY<=467){
	    text("O",736,470);
    }
    if(mouseX>=806&&mouseX<=878&&mouseY>=324&&mouseY<=467){
	    text("D",818,470);
    }
  }
  
  if(songTime>=175&&songTime<=189){
    
    var mice= map(mouseX,0,width,0,255);
    
    fill(mice,255-mice,255,100);
    
    posX=mouseX+40;
    posY=mouseY+40;
      
    ellipse(posX,posY,80,80);
  }
  
  if(songTime>=189&&songTime<=199){
  	image(img12,50,50);
    
    fill(255,0,255,100);
    
    if(mouseX>=93&&mouseX<=165&&mouseY>=324&&mouseY<=467){
    	text("E",94,470);
    }
    if(mouseX>=165&&mouseX<=240&&mouseY>=324&&mouseY<=467){
    	text("X",168,470);
    }
    if(mouseX>=240&&mouseX<=320&&mouseY>=324&&mouseY<=467){
    	text("P",248,470);
    } 
    if(mouseX>=320&&mouseX<=396&mouseY>=324&&mouseY<=467){
	    text("R",326,470);
    }
    if(mouseX>=396&&mouseX<=469&&mouseY>=324&&mouseY<=467){
	    text("E",397,470);
    }
    if(mouseX>=473&&mouseX<=545&&mouseY>=324&&mouseY<=467){
	    text("S",474,470);
    }
    if(mouseX>=554&&mouseX<=626&&mouseY>=324&&mouseY<=467){
	    text("S",555,470);
    }
    if(mouseX>=622&&mouseX<=694&&mouseY>=324&&mouseY<=467){
	    text("I",623,470);
    }
    if(mouseX>=677&&mouseX<=749&&mouseY>=324&&mouseY<=467){
	    text("O",678,470);
    }
    if(mouseX>=735&&mouseX<=807&&mouseY>=324&&mouseY<=467){
	    text("N",736,470);
    }
  }
  
  if(songTime>=199&&songTime<=209){
  	image(img13,50,50);
    
    fill(0,255,255,100);
    
    if(mouseX>=334&&mouseX<=398&&mouseY>=324&&mouseY<=467){
    	text("L",330,470);
    }
    if(mouseX>=433&&mouseX<=463&&mouseY>=324&&mouseY<=467){
    	text("O",430,470);
    }
    if(mouseX>=500&&mouseX<=564&&mouseY>=324&&mouseY<=467){
    	text("V",500,470);
    } 
    if(mouseX>=602&&mouseX<=666&&mouseY>=324&&mouseY<=467){
	    text("E",595,470);
    }
  }
  
  if(songTime>=209&&songTime<=223){
  	image(img14,50,50);
    
    fill(255,255,0,100);
 
    if(mouseX>=277&&mouseX<=351&&mouseY>=324&&mouseY<=467){
    	text("F",277,470);
    }
    if(mouseX>=351&&mouseX<=425&&mouseY>=324&&mouseY<=467){
    	text("A",353,470);
    } 
    if(mouseX>=425&&mouseX<=506&&mouseY>=324&&mouseY<=467){
	    text("M",430,470);
    }
    if(mouseX>=506&&mouseX<=586&&mouseY>=324&&mouseY<=467){
	    text("I",508,470);
    }
    if(mouseX>=586&&mouseX<=663&&mouseY>=324&&mouseY<=467){
	    text("L",583,470);
    }
    if(mouseX>=663&&mouseX<=737&&mouseY>=324&&mouseY<=467){
	    text("Y",663,470);
    }
  }
  
  if(songTime>=223&&songTime<=242){
    
    for(i=0;i<20;i=i+1){
    	var olaX=random(0,width);
      var olaY=random(-100,height);
      
      fill(100);
      rect(olaX,olaY+caida,30,30);
    }
    
    caida=caida+1;
  }
  
  
  image(marco,0,0);
  
  push();
  	textSize(65);
  	textAlign(CENTER);
  	fill(255);
 
  
  	if(songTime>=0&&songTime<140||songTime>156&&songTime<=224){
  		text("move the mouse",500,790);
    	if(songTime>=31&&songTime<110||songTime>124&&songTime<=176||songTime>189&&songTime<=224){
    	text("find the hidden message",500,55);
    	}
  	}
  
 	 if(songTime>=140&&songTime<=156){
  	  text("press and release the mouse",500,790);
  	}
  
  pop();
}