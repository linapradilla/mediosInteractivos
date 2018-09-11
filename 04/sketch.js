var img;
var herSelect=1;
var R=255;
var G=229;
var B=87;
var a=255;

function preload(){
	img=loadImage('menu.png');
}

function setup() {
  createCanvas(1300,1000);
  background(255);
}

function draw() {
  
  noStroke();
  fill(R,G,B,a);

  image(img,1000,0);

  
  if(mouseIsPressed){
  
    if(herSelect==0&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-37.5);
      	vertex(mouseX+25,mouseY+6.5);
      	vertex(mouseX+12.5,mouseY+30);
      	vertex(mouseX+22,mouseY+36.5);
      	vertex(mouseX-22,mouseY+36.5);
      	vertex(mouseX-12.5,mouseY+30);
      	vertex(mouseX-25,mouseY+6.5);
      endShape();
    }
    
    if(herSelect==1&&mouseX<1000){
    	quad(mouseX+7.5,mouseY-35.5,mouseX+35,mouseY-35.5,mouseX-9.5,
           mouseY+36.5,mouseX-34.5,mouseY+36.5);
    }
    
    if(herSelect==2&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-17);
      	vertex(mouseX+19,mouseY-34.5);
      	vertex(mouseX+36,mouseY-15.5);
      	vertex(mouseX+36,mouseY+10.5);
      	vertex(mouseX,mouseY+34.5);
      	vertex(mouseX-36,mouseY+10.5);
      	vertex(mouseX-36,mouseY-15.5);
      	vertex(mouseX-19,mouseY-34.5);
      endShape();
    }
    
    if(herSelect==3&&mouseX<1000){
    	quad(mouseX,mouseY-34,mouseX+23,mouseY,mouseX,
           mouseY+34,mouseX-23,mouseY);
    }
    
    if(herSelect==4&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-40);
      	vertex(mouseX+20,mouseY-20);
      	vertex(mouseX+7,mouseY-10);
      	vertex(mouseX+7,mouseY+8);
      	vertex(mouseX+20,mouseY);
      	vertex(mouseX+25,mouseY-17);
      	vertex(mouseX+40,mouseY-15);
      	vertex(mouseX+40,mouseY+5);
      	vertex(mouseX+20,mouseY+7);
      	vertex(mouseX+7,mouseY+20);
      	vertex(mouseX+7,mouseY+30);
      	vertex(mouseX+20,mouseY+40);
				vertex(mouseX-20,mouseY+40);
				vertex(mouseX-7,mouseY+30);
      	vertex(mouseX-7,mouseY+20);
      	vertex(mouseX-20,mouseY+7);
      	vertex(mouseX-40,mouseY+5);
      	vertex(mouseX-40,mouseY-15);
      	vertex(mouseX-25,mouseY-17);
      	vertex(mouseX-20,mouseY);
      	vertex(mouseX-7,mouseY+8);
      	vertex(mouseX-7,mouseY-10);
      	vertex(mouseX-20,mouseY-20);
      	vertex(mouseX,mouseY-40);
      endShape();
    }
    
    if(herSelect==5&&mouseX<1000){
    	quad(mouseX-10,mouseY,mouseX+20,mouseY-50,mouseX+10,
           mouseY,mouseX+20,mouseY+50);
    }
    
    if(herSelect==6&&mouseX<1000){
    	quad(mouseX-30,mouseY-10,mouseX,mouseY-10,mouseX,
           mouseY-40,mouseX+50,mouseY+50);
    }
    
    if(herSelect==7&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-20);
      	vertex(mouseX+40,mouseY-40);
      	vertex(mouseX+20,mouseY);
      	vertex(mouseX+40,mouseY+40);
      	vertex(mouseX,mouseY+20);
      	vertex(mouseX-40,mouseY+40);
      	vertex(mouseX-20,mouseY);
      	vertex(mouseX-40,mouseY-40);
      endShape();
    }
    
     if(herSelect==8&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-60);
      	vertex(mouseX+20,mouseY-20);
      	vertex(mouseX+60,mouseY);
      	vertex(mouseX+20,mouseY+20);
      	vertex(mouseX,mouseY+60);
      	vertex(mouseX-20,mouseY+20);
      	vertex(mouseX-60,mouseY);
      	vertex(mouseX-20,mouseY-20);
      endShape();
    }
    
     if(herSelect==9&&mouseX<1000){
    	beginShape();
      	vertex(mouseX,mouseY-10);
      	vertex(mouseX+40,mouseY+40);
      	vertex(mouseX,mouseY+10);
      	vertex(mouseX-40,mouseY+40);
      endShape();
    }
    
    if(mouseX>=1054&&mouseX<=1122&&mouseY>=103&&mouseY<=171){
    	herSelect=0;
    }
    
    if(mouseX>=1175&&mouseX<=1243&&mouseY>=103&&mouseY<=171){
    	herSelect=1;
    }
    
    if(mouseX>=1054&&mouseX<=1122&&mouseY>=180&&mouseY<=243){
    	herSelect=2;
    }
    
    if(mouseX>=1175&&mouseX<=1243&&mouseY>=180&&mouseY<=243){
    	herSelect=3;
    }
    
    if(mouseX>=1054&&mouseX<=1122&&mouseY>=259&&mouseY<=322){
    	herSelect=4;
    }
    
    if(mouseX>=1175&&mouseX<=1243&&mouseY>=259&&mouseY<=322){
    	herSelect=5;
    }
    
    if(mouseX>=1054&&mouseX<=1122&&mouseY>=339&&mouseY<=402){
    	herSelect=6;
    }
    
    if(mouseX>=1175&&mouseX<=1243&&mouseY>=339&&mouseY<=402){
    	herSelect=7;
    }
    
    if(mouseX>=1054&&mouseX<=1122&&mouseY>=421&&mouseY<=489){
    	herSelect=8;
    }
    
    if(mouseX>=1175&&mouseX<=1243&&mouseY>=421&&mouseY<=489){
    	herSelect=9;
    }
    
    if(mouseX>=1044&&mouseX<=1083&&mouseY>=740&&mouseY<=779){
    	R=R+1;
      
      print(R,G,B,a);
      
      if(R>255){
      	R=255;
      }
    }
    
    if(mouseX>=1044&&mouseX<=1083&&mouseY>=787&&mouseY<=826){
    	R=R-1;
      
      print(R,G,B,a);
      
      if(R<0){
      	R=0;
      }
    }
    
    if(mouseX>=1101&&mouseX<=1140&&mouseY>=740&&mouseY<=779){
    	G=G+1;
      
      print(R,G,B,a);
      
      if(G>255){
      	G=255;
      }
    }
    
    if(mouseX>=1101&&mouseX<=1140&&mouseY>=787&&mouseY<=826){
    	G=G-1;
      
      print(R,G,B,a);
      
      if(G<0){
      	G=0;
      }
    }
    
    if(mouseX>=1159&&mouseX<=1198&&mouseY>=740&&mouseY<=779){
    	B=B+1;
      
      print(R,G,B,a);
      
      if(B>255){
      	B=255;
      }
    }
    
    if(mouseX>=1159&&mouseX<=1198&&mouseY>=787&&mouseY<=826){
    	B=B-1;
      
      print(R,G,B,a);
      
      if(B<0){
      	B=0;
      }
    }
    
    if(mouseX>=1217&&mouseX<=1256&&mouseY>=740&&mouseY<=779){
    	a=a+1;
      
      print(R,G,B,a);
      
      if(a>255){
      	a=255;
      }
    }
    
    if(mouseX>=1217&&mouseX<=1256&&mouseY>=787&&mouseY<=826){
    	a=a-1;
      
      print(R,G,B,a);
      
      if(a<0){
      	a=0;
      }
    }
    
    if(mouseX>=1044&&mouseY<=1256&&mouseY>=868&&mouseY<=911){
    	background(255);
    }
    
    if(mouseX>=1044&&mouseY<=1256&&mouseY>=927&&mouseY<=970){
      if(frameCount%10==0){
	    	saveCanvas("miObra",'jpg');
      }
    }
    
  }
  
	rect(1092,575,116,88);
  


}