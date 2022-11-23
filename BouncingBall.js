// Lydia Delgado Uriarte A01740532
// Bouncing ball Simulation

function setup() {
  createCanvas(400, 400);
  frameRate(15)
}

value = 2000;
let state = 0;
let firstAnimation = false;
let iter = 0;
let h = 40;
let w = 40;
function draw() {
  background(255, 255, 255);
  fill (value);

  if (state > 0 && state <= 2) {
    // Define ball's trajectory with two bezier curves
    // Trajectory down
    bezier (77, 108, 145, 99, 179,125, 213,276);
    // Trajectory up
    bezier (214, 276, 256, 110, 318,115, 346,105);
  }
  
  if (state == 2 ){
    // Define summary of storyboard only selcted frames
    Arr1 = storyboard(77, 108, 145, 99,179,125, 205,246);
   
    Arr2 = storyboard(214, 276, 256, 110, 318, 115, 346,105);
    Arr = concat(Arr1, Arr2);   
    
  }
    
   if (state > 2 ){
    
    //if Arr.length
      if (iter < Arr.length/2){
        h = h-2 ;
        w = w-3;
      }
      if (iter > Arr.length/2 && iter < Arr.length-1) {
        h = h+3;
        w = w+3;
      }
      translate(Arr[iter][0], Arr[iter][1])
      rotate(frameCount*PI/300)

      ellipse(0,0, h, w);
      if (iter < Arr.length-1){
        iter++;
      }
    }
 
} 

function storyboard(x1, y1, x2, y2, x3, y3, x4, y4) {
  let xyArr = []; 
  fill(255);
  steps = 10;
  for (i = 0; i <= steps; i++) {
    t = i / float(steps);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 10, 10);
    xyArr.push([x,y]);
  }
  return xyArr;
}

function mousePressed(){ 
  state++ 
}
