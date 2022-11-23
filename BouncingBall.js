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

    // Define summary of storyboard only selcted frames
    storyboard(77, 108, 145, 99,179,125, 205,246);
    storyboard(214, 276, 256, 110, 318, 115, 346,105);
           
    switch(cases){
      case 1:
         if (bezi == false){
           let x = 0;
          }
        break
    } 
  }

  function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
    fill(255);
    steps = 10;
    for (i = 0; i <= steps; i++) {
      t = i / float(steps);
      x = bezierPoint(x1, x2, x3, x4, t);
      y = bezierPoint(y1, y2, y3, y4, t);
     ellipse(x, y, 10, 10);
    }
  }

  function mouseClicked(){
    if(mouseButton === RIGHT){
      
    }
    
  }
  