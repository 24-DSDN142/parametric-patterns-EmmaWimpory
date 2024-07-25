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


let FlowerPetalOne =(1);
noFill();
stroke(1);
strokeWeight(FlowerPetalOne);
//Flower One Petal
beginShape();
//First Control Point
curveVertex(75, 50);
curveVertex(50, 91);
//Anchor points
curveVertex(10, 60);
curveVertex(21, 17);
curveVertex(68, 19);
curveVertex(75, 50);
//Second Control Point
curveVertex(50,91); //where it finishes
curveVertex(10,60); //make it the same number as the first point for roundness
//Stop drawing shape
endShape();
}