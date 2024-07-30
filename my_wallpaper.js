//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // rect(30 ,30, rect_width, rect_height);


//Flower Stem MAIN
noFill();
strokeWeight(0.5)
//Start
beginShape();
//Control Point
curveVertex(110, 180);
curveVertex(110, 180);
//Anchor Point
curveVertex(102, 160);
curveVertex(85, 120);
curveVertex(100, 50);
//Control point
curveVertex(100, 10);
endShape();

//Flower stem LEFT
noFill();
strokeWeight(0.5);
//Start
beginShape();
//Control point
curveVertex(85, 120);
curveVertex(85, 120);
//Anchor points
curveVertex(55, 70);
//Control Point
curveVertex(10, 120);
//End
endShape();

//Flower Stem Right Down
noFill();
strokeWeight(0.5);
//Start
beginShape();
//Control
curveVertex(102, 160);
curveVertex(102, 160);
//Anchor
curveVertex(110, 140);
//Control
curveVertex(135, 130);
endShape();

ellipse(80, 120, 10, 5)
line(75, 120, 85, 120)

//Left Flower Petal One
noFill();
strokeWeight(0.5)
//Start
beginShape();
//Control Point
curveVertex(55, 70);
curveVertex(55,70);
//Anchor Points
curveVertex(50, 85)
curveVertex(45, 80)
curveVertex(40,75)
curveVertex(55,70)
//Control
curveVertex(50,85)
//
endShape();

//Left Flower Petal Two
noFill();
strokeWeight(0.5)
//Start
beginShape();
//Control Point
curveVertex(55,70);
curveVertex(55,70);
//Anchor
curveVertex(45,60);
curveVertex(60,55);
curveVertex(55,70);
//Control Point
curveVertex(45,60)
//End
endShape();

//Left Flower Petal Three
noFill();
strokeWeight(0.5)
//Start
beginShape();
//Control Point
curveVertex(55,70);
curveVertex(55,70);
//Anchor Points
curveVertex(60,60);
curveVertex(55,60);
//Control
curveVertex(60,60);
//
endShape();
}


