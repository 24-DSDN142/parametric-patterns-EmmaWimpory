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

fill(1)
  circle(55,70,5)


  //Flower Stem MAIN
noFill();
strokeWeight(1)
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
strokeWeight(1);
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
strokeWeight(1);
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

//Left Flower Petal One
line(45,80,55,70)

noFill();
strokeWeight(1)
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
line(53,56,55,70)

noFill();
strokeWeight(1)
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
line(70,65,55,70)

noFill();
strokeWeight(1)
//Start
beginShape();
//Control Point
curveVertex(55,70);
curveVertex(55,70);
//Anchor Points
curveVertex(75,70);
curveVertex(70,65)
curveVertex(65,60);
curveVertex(55,70);
//Control
curveVertex(70,60);
//End
endShape();

//Left Flower Petal Four
line(36,64,55,70)

noFill();
strokeWeight(1)
//Start
beginShape();
//Control Point
curveVertex(55,70);
curveVertex(55,70);
//Anchor Points
curveVertex(40,60)
curveVertex(35,70)
curveVertex(55,70)
//Control point
curveVertex(55,70)
endShape();

//Left Flower Petal Five
line(62,84,55,70)

noFill();
strokeWeight(1)
//Start
beginShape();
//Control Point
curveVertex(55,70);
curveVertex(55,70);
//Anchor Points
curveVertex(54,80);
curveVertex(56,84);
curveVertex(66,82);
curveVertex(57,69);
//Control Point
curveVertex(55,70)
//End
endShape();

//TOP Flower Petal One
fill(1)
circle(100,50,8)

line(71,45,100,50)

noFill();
strokeWeight(1)
//Start
beginShape();
//Control Point
curveVertex(100,50);
curveVertex(100,50);
//Anchor Point
curveVertex(78,35)
curveVertex(70,40)
curveVertex(75,55)
curveVertex(100,50)
//Control Point
curveVertex(100,50)
//End
endShape();


//Top Flower Petal Two
line(92,20,100,50)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(100,50);
curveVertex(100,50);
//Anchor Points
curveVertex(80,25)
curveVertex(95,20)
curveVertex(100,27)
curveVertex(104,25)
curveVertex(108,30)
curveVertex(100,50)
//Control
curveVertex(100,50)
//End
endShape();

//Top Flower Petal Three
line(100,50,128,35)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(100,50);
curveVertex(100,50);
//Anchor Points
curveVertex(115,25)
curveVertex(125,30)
curveVertex(130,45)
curveVertex(100,50)
//Control
curveVertex(115,25)
//End
endShape();

//Top Flower Petal Four
line(100,50,110,70)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(100,50);
curveVertex(100,50);
//Anchor Point
curveVertex(100,75)
curveVertex(110,70)
curveVertex(120,70)
curveVertex(120,60)
curveVertex(100,50)
//Control Point
curveVertex(100,50)
//End
endShape();

//Top Flower Petal Five
line(80,66,100,50)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(100,50);
curveVertex(100,50);
//Anchor Point
curveVertex(91,75)
curveVertex(85,70)
curveVertex(75,60)
curveVertex(100,50)
//Control
curveVertex(100,50)
//End
endShape();

//Bottom FLower Petal One
line(110,140,115,126)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(110, 140);
curveVertex(110,140);
//Anchor
curveVertex(120,146);
curveVertex(125,140);
curveVertex(110,140)
//Control
curveVertex(110,140);
//End
endShape();

//Bottom Flower Petal Two
line(110,140,103,129)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(110, 140);
curveVertex(110,140);
//Anchor Point
curveVertex(100, 130);
curveVertex(108,130);
curveVertex(110,140);
//Control Point
curveVertex(110,140)
//End
endShape();

//Bottom FLower Petal Three
line(110,140,126,133)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(110,140);
curveVertex(110,140);
//Anchor Point
curveVertex(123,130)
curveVertex(126,137)
curveVertex(111,140)
//Control Point
curveVertex(110,140);
curveVertex(110,140);
//End
endShape();

//Bottom Flower Petal Four
line(110,140,123,144)

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(110,140);
curveVertex(110,140);
//Anchor Point
curveVertex(110,125);
curveVertex(119,130);
curveVertex(110,140);
//Control Point
curveVertex(110,140)
//End
endShape();

//Leaf One Top Left
noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(90,90)
//Anchor Point
curveVertex(90,90)
curveVertex(85,86)
curveVertex(80,84)
//Control Point
curveVertex(90,90)
//End
endShape();

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(73,82)
//Anchor
curveVertex(73,82)
curveVertex(82,93)
curveVertex(87,87)
curveVertex(82,77)
curveVertex(73,82)
//Control Point
curveVertex(73,82)
//End
endShape();

//Leaf Two Top Right
noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(86,110)
//Anchor Point
curveVertex(85.5,113)
curveVertex(92,108);
curveVertex(96,107)
//Control Point
curveVertex(86,110)
//End
endShape();

noFill();
strokeWeight(1);
//Start
beginShape();
//Control Point
curveVertex(104,103);
//Anchor
curveVertex(104,103);
curveVertex(93,102);
curveVertex(90,111);
curveVertex(97,115);
curveVertex(104,103);
//Control Point
curveVertex(104,103)
//End
endShape();
}


