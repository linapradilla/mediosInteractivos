//¡Hola! bienvenid@ a mi persepción de algo tan relativo como el tiempo, elegí la metáfora de la bicicleta
//porque es mi medio de transporte predilecto; me da libertad y empoderamiento. Las ruedas de la bicicleta
//representan mi nivel de actividad o productividad en el día (entre más rápido giren más productiva estoy
//siendo), y las líneas naranjas representan la velocidad o dinamismo con el cual siento que está 
//transcurriendo el tiempo. Ya con eso dicho disfruta.

var miMinuto;
var miHora;

var lineaX=-300;
var lineaY=50;
var velLinea=0;
var angulo=0;

function preload(){
  //cargar la fuente
	font = loadFont('ARBERKLEY.ttf');
}

function setup() {
  //crear canvas
  createCanvas(1000, 800);
  //poner los ángulos en grados
  angleMode(DEGREES);
  
  // asignar la fuente, el tamaño y la alineación
  textFont(font);
  textSize(50);
  textAlign(CENTER, CENTER);
}

function draw() {
  //asignar color de fondo
  background(238,186,137);
  
  //traer los minutos y las horas a las variables
  miMinuto=minute();
  miHora=hour();
  
  //devuelve las líneas de fondo para crear un loop
  if(velLinea>1800){
    velLinea=0;
  }
  
  //asigna color y grososr de la línea, sin relleno
  stroke(234,121,25);
  strokeWeight(5);
  noFill();
  
 //primer ciclo: hace 21 repeticiones de una línea verticalmente cada 100px
  //crea una variable que empieza en cero
  //llega hasta 20
  //aumenta de uno en uno
  for(var j=0;j<=20;j=j+1){
  	//segundo ciclo: hace 21 repeticiones de una línea horizontalmente cada 300px
  	//crea una variable que empieza en cero
  	//llega hasta 20
    //aumenta de uno en uno
    for(var i=1;i<=20;i=i+1){
      //Primera línea:crea línea horizontal de 200px de longitud
      //que se mueve a la derecha según la variable velLinea
      line(lineaX-1500+velLinea,lineaY,lineaX-1300+velLinea,lineaY); 
      //cada vez que hace el segundo ciclo mueve la línea 300px a la derecha
      lineaX=lineaX+300;
    }
   //devuelve a la posición original X de la línea
   lineaX=-300;
   //cada vez que hace el primer ciclo mueve la línea 100px hacia abajo
   lineaY=lineaY+100;
  }
  //devuelve a la posición original Y de la línea
  lineaY=50;
  
  //tercer ciclo: hace 21 repeticiones de una línea verticalmente cada 100px
  //crea una variable que empieza en cero
  //llega hasta 20
  //aumenta de uno en uno
  for(j=0;j<=20;j=j+1){
    //segundo ciclo: hace 21 repeticiones de una línea horizontalmente cada 300px
  	//crea una variable que empieza en cero
  	//llega hasta 20
    //aumente de uno en uno
    for(i=1;i<=20;i=i+1){
      //Segunda línea://crea línea horizontal de 200px de longitud 
      //150px más a la izquierda y 50px más abajo  que la primera línea
      //que se mueve a la derecha según la variable velLinea
      line(lineaX-1650+velLinea,lineaY+50,lineaX-1450+velLinea,lineaY+50);  
      //cada vez que hace el cuarto ciclo mueve la segunda línea 300px a la derecha
      lineaX=lineaX+300;
    }
    //devuelve a la posición original X de la línea
   lineaX=-300;
    //cada vez que hace el tercer ciclo mueve la segunda línea 100px hacia abajo
   lineaY=lineaY+100;
  }
  //devuelve a la posición original Y de la línea
  lineaY=50;
  
  
  //cambia el color y grosor de la línea de contorno
	stroke(94,32,45);
  strokeWeight(8);
  
  //pinta la parte del manubrio de la bici
  beginShape();
  	vertex(378,200);
  	vertex(345,215);
  	vertex(369,224);
  	vertex(290,455);
  endShape();
  
  //pinta la parte del soporte a la rueda de atrás de la bici
  beginShape();
  	vertex(351,277);
  	vertex(515,445);
  	vertex(675,455);
  	vertex(565,315);
  	vertex(360,248);
  endShape();
  
  //pinta la barra del asiento de la bici
  line(515,445,590,253);
  //pinta la coraza de la rueda de adelante
  ellipse(290,455,170,170);
  //pinta la coraza de la rueda de atrás
  ellipse(675,455,170,170);
  
  
  //Asigna color de relleno y quita linea de contorno
  noStroke();
  fill(94,32,45);
  
  
  //pinta el asiento de la bici
  quad(562,243,623,243,623,268);
    
  //Asinga color y grosor a la línea de contorno y quita el relleno
  noFill();
  stroke(94,32,45);
  strokeWeight(2);
  
  //pinta los ejes(lineas) de la rueda delantera con su centro en la posición (0,0)
  //translada el centro a la pocisión (290,455) y los hace rotar sobre este punto según
  //el negativo de la variable angulo
  push();
  	translate(290,455);
  	rotate(-angulo);
  	line(0,0,85,0);
  	line(0,0,60,60);
  	line(0,0,0,85);
  	line(0,0,-60,60);
  	line(0,0,-85,0);
  	line(0,0,-60,-60);
  	line(0,0,0,-85);
  	line(0,0,60,-60);
  pop();
  
  //pinta los ejes(lineas) de la rueda delantera con su centro en la posición (0,0)
  //translada el centro a la pocisión (675,455) y los hace rotar sobre este punto según
  //el negativo de la variable angulo
  push();
  	translate(675,455);
  	rotate(-angulo);
  	line(0,0,85,0);
  	line(0,0,60,60);
  	line(0,0,0,85);
  	line(0,0,-60,60);
  	line(0,0,-85,0);
  	line(0,0,-60,-60);
  	line(0,0,0,-85);
  	line(0,0,60,-60);
  pop();
  
  //asigna un color de relleto y quita la línea de contorno
  noStroke();
  fill(0,51,63);
  //pinta un rectángulo
  rect(0,544,1000,256);
  
  //cambia color de relleno a blanco
  fill(255);
  
  //de 0:00 a 6:00 estoy durmiendo, así que el tiempo pasa a una velocidad 
  //relativamente normal, y aunque está quieta mi producción de sueños es impresionante
  if(miHora>=0&&miHora<6){
  	velLinea=velLinea+8;
  	angulo=angulo+1;
    text('Sili está durmiendo', 790, 680);
  }
  
  //de 6:00 a 6:15 ya estoy despierta, pero no me he levantado
  //siento que ese tiempo pasa cruelmente rápido y yo no hago nada más que respirar y mirar instagram
  if(miHora==6&&miMinuto>=0&&miMinuto<=15){
  	velLinea=velLinea+50;
  	angulo=angulo+0.1;
  	text('Sili está haciendo roña', 750, 680);
  }
  
  //de 6:15 a 7:00 al fin me levanto y alisto todo para salir, también desayuno
  //en estós momentos sigo siendo un zombi así que no me rinde mucho
  if(miHora==6&&miMinuto>=16&&miMinuto<=59){
  	velLinea=velLinea+20;
  	angulo=angulo+1;
    text('Sili se está alistando', 750, 680);
  }
  
  //de 7:00 a 7:40 agarro mi bici y me voy para la u
  //el camino de mi casa la u es en subida, así que aunque me esfuerze mucho siento que no me rinde nada
  //siento que el tiempo pasa rápido pues tengo la presión de llegar a clase
  if(miHora==7&&miMinuto>=0&&miMinuto<=40){
  	velLinea=velLinea+10;
  	angulo=angulo+3;
  	text('Sili está llendo a la U en bici', 670, 680);
  }
  
  //de 7:40 a 8:00 llego a la u y aprovecho los 20 minutos para
  //poner mi sudado ser presentable para ir a clase
  if(miHora==7&&miMinuto>=41&&miMinuto<=59){
  	velLinea=velLinea+10;
  	angulo=angulo+6;
    text('Sili se está arreglando', 750, 680);
  }
  
  //de 8:00 a 13:00 estoy en las clases de la mañana, estas clases son tan aburridas
  //que el tiempo pasa muuy lento y al mismo tiempo yo no hago nada en esos momentos
  //es una tortura
  if(miHora>=8&&miHora<13){
  	velLinea=velLinea+1;
  	angulo=angulo+0.8;
    text('Sili está en sus clases de la mañana :/', 600, 680);
  }
  
  //de 13:00 a 14:00 tengo mi muy presiado huequito para almorzar
  // intento aprovecharlo lo que más pueda, aunque igual siempre se me pasa muy rápido
  if(miHora>=13&&miHora<14){
  	velLinea=velLinea+25;
  	angulo=angulo+2;
    text('Sili está almorzando :)', 750, 680);
  }
  
  //de 14:00 a 18:00 estoy en mis clases de la tarde
  //estás clases son más dinámicas, así que el tiempo se pasa un poquito más rápido
  //a esta hora soy un poco más productiva, como que hasta ahora estoy despertando XD
  if(miHora>=14&&miHora<18){
  	velLinea=velLinea+2;
  	angulo=angulo+4;
    text('Sili está en sus clases de la tarde', 600, 680);
  }
  
  //de 18:00 a 18:30 me voy a mi casita en bici, en este caso es bajada no tengo que ni pedalear XD
  //siento que el tiempo va más despacio y me rinde más aunque me gasto casi el mismo tiempo que el camino a la  U
  if(miHora==18&&miMinuto>=0&&miMinuto<=30){
  	velLinea=velLinea+4;
  	angulo=angulo+10;
    text('Sili está llendo a la casa en bici', 650, 680);
  }
  
  //de 18:30 a 19:00 llego a mi casita y como algo, soy una persona feliz y sin precupaciones por 
  //30 efímeros minutos *inserte carita llorando acá*
  if(miHora==18&&miMinuto>=31&&miMinuto<=59){
  	velLinea=velLinea+7;
  	angulo=angulo+1;
    text('Sili está comiendo', 790, 680);
   }
  //de 19:00 a 0:00 me pongo a ser bien productiva y hago todas las cosas que una carrera como diseño
  //requiere que haga, el tiempo es cruel conmigo porque pasa rápido 
  //pero es la hora del día en la que soy más productiva
  if(miHora>=19&&miHora<=23){
  	velLinea=velLinea+50;
  	angulo=angulo+10;
    text('Sili está siendo productiva', 700, 680);
  }
  
}