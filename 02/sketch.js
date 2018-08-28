function setup() {
  createCanvas(806, 806);
  background(255,251,246);
  
  noStroke();
  
  var X=35;
  var Y=35;
  
  for(var w=0;w<2;w=w+1){
  	for(var h=0;h<2;h=h+1){
  		for (var i=0;i<2;i=i+1){               //patrón1 fila 1 columna 1
   		 for (var j=0;j<2;j=j+1){
         
         if(X>402 && X<588 && Y>402 && Y<588){
        	fill(255,195,44);
      		}else{
        	fill(73,63,42);
      		}
         
    			quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X,Y+23,X+23,Y+23);
      		X=X+23;
      		quad (X,Y,X+23,Y,X+23,Y+23);
  				X=X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
  
					Y=Y+23;
    			X=X-69;
	
    			quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
      		X=X+23;
      		quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
 			 		quad (X,Y,X,Y+23,X+23,Y+23);
  
  				Y=Y+23;
  				X=X-69;
	
    			quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
     			X=X+23;
      		quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
 			 		quad (X,Y,X,Y+23,X+23,Y+23);
  
 		 			Y=Y+23;
    			X=X-69;
	
    			quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X,Y+23,X+23,Y+23);
      		X=X+23;
      		quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
    	
    			Y=Y+23;
    			X=X-69;
    		}
 				Y=Y-184;
  			X=X+92;
  		}
      X=X+184;
    }
    X=X-736;
    Y=Y+368;
    
  }
  
  		X=219;
  		Y=35;
  
  for( w=0;w<2;w=w+1){
  	for(h=0;h<2;h=h+1){
  		for (i=0;i<2;i=i+1){                     //patrón2 fila1 columna 2
    		for (j=0;j<2;j=j+1){
          
          if(X>218 && X<404 && Y>402 && Y<588){
        	fill(255,195,44);
      		}else{
        	fill(73,63,42);
      		}
          
    			quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
      		X=X+23;
      		quad (X,Y,X+23,Y,X,Y+23);
  				X=X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
  
					Y=Y+23;
    			X=X-69;
	
    			quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
      		X=X+23;
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
  
  				Y=Y+23;
  				X=X-69;
      
      		quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
      		X=X+23;
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
  
 		 			Y=Y+23;
 			   	X=X-69;
	
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
      		X=X+23;
      		quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
    	
    			Y=Y+23;
    			X=X-69;
    		}
    		Y=Y-184;
  			X=X+92;
  		}
      X=X+184;
    }
    X=X-736;
    Y=Y+368;
  }
  		X=35;
		  Y=219;
  
  for( w=0;w<2;w=w+1){
  	for(h=0;h<2;h=h+1){
  		for (i=0;i<2;i=i+1){                //patrón3 fila 2 columna3
    		for (j=0;j<2;j=j+1){
          
          if(X>402 && X<588 && Y>218 && Y<404){
        	fill(255,195,44);
      		}else{
        	fill(73,63,42);
      		}
          
					quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
      		X=X+23;
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
  			
  				Y=Y+23;
  				X=X-69;
      
      		quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
    		  X=X+23;
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
  
 		 			Y=Y+23;
    			X=X-69;
	
      
      		quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
      		X=X+23;
     		 quad (X,Y,X+23,Y,X,Y+23);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
    	
    			Y=Y+23;
    			X=X-69;
      
    		  quad (X,Y+23,X+23,Y+23,X+23,Y);
  				X= X+23;
  				quad (X,Y+23,X+23,Y+23,X+23,Y);
      		X=X+23;
      		quad (X,Y,X+23,Y,X,Y+23);
  				X=X+23;
  				quad (X,Y,X+23,Y,X,Y+23);
  
					Y=Y+23;
    			X=X-69;
    		}
 				Y=Y-184;
  			X=X+92;
  		}
      X=X+184;
    }
    X=X-736;
    Y=Y+368;
  }
  
  		X=219;
  		Y=219;
      
  for( w=0;w<2;w=w+1){
  	for(h=0;h<2;h=h+1){
  		for (i=0;i<2;i=i+1){                //patrón4 fila2 columna4
    		for (j=0;j<2;j=j+1){
          
          if(X>218 && X<404 && Y>218 && Y<404){
        	fill(255,195,44);
      		}else{
        	fill(73,63,42);
      		}
          
    			quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
      		X=X+23;
      		quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X,Y+23,X+23,Y+23);
  
  				Y=Y+23;
  				X=X-69;
	
    			quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
    		  X=X+23;
    		  quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
 			 		quad (X,Y,X,Y+23,X+23,Y+23);
  
 		 			Y=Y+23;
    			X=X-69;
	
   			 	quad (X,Y,X+23,Y,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X,Y+23,X+23,Y+23);
      		X=X+23;
					quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
    	
    			Y=Y+23;
    			X=X-69;
      
      		quad (X,Y,X,Y+23,X+23,Y+23);
  				X= X+23;
  				quad (X,Y,X,Y+23,X+23,Y+23);
      		X=X+23;
    		  quad (X,Y,X+23,Y,X+23,Y+23);
  				X=X+23;
  				quad (X,Y,X+23,Y,X+23,Y+23);
  
					Y=Y+23;
    			X=X-69;
    		}
 				Y=Y-184;
  			X=X+92;
  		}
      X=X+184;
    }
    X=X-736;
    Y=Y+368;
  }

  
}