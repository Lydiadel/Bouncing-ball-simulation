// Lydia Delgado Uriarte A01740532
// Bouncing ball Simulation

function setup() {
    createCanvas(400, 400);
  }
  
  value = 2000;
  let cases = 0;
  
  function draw() {
    background(255, 255, 255);
    fill (value);
    // Define ball's trajectory with two bezier curves
    // Trajectory down
    bezier (77, 108,
                   145, 99,
                   179,125,
                   213,276);
    // Trajectory up
    bezier (214, 276,
                   256, 110,
                   318,115,
                   346,105);
           
    switch(cases){
      case 1:
         if (bezi == false){
           let x = 0;
          }
        break
    } 
  }

  function mouseClicked(){
    if(mouseButton === RIGHT){
      
    }
    
  }
  