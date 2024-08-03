//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let CircleOutline = 0
let FlowerGone = 1//(1) 0 to remove
let FlowerStem =1//1
let FlowerPetals = 1.4//1.4
let LeafThick =1 //1

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER
  )
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(255, 254, 250); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // rect(30 ,30, rect_width, rect_height);


  //Background Circles
strokeWeight(CircleOutline);
fill(255, 156, 224,110)
circle(130,50,90)

strokeWeight(CircleOutline)
fill(215, 97, 255,120)
circle(155,93,85)

strokeWeight(CircleOutline);
fill(113, 194, 62,90);
circle(50,130,80,100)


butterfly();
function butterfly() {
stroke(1)
strokeWeight(2)
beginShape();
//Control Point
curveVertex(160,120);
//Anchor Point
curveVertex(154,97);
curveVertex(164,118);
//Control Point
curveVertex(150,97);
//End
endShape();
//Start
strokeWeight(0.5);
fill(1);
beginShape();
//Control Point
curveVertex(163,113);
//Anchor Point
curveVertex(158,102.5);
curveVertex(180,90);
curveVertex(175,107);
curveVertex(170,108);
curveVertex(178,110);
curveVertex(180,120);
curveVertex(163,113);
//Control Point
curveVertex(159,102.5);
//End
endShape();

//Start
stroke(1);
strokeWeight(0.5);
fill(1);
beginShape();

//Control Point
curveVertex(145,78);
//Anchor Point
curveVertex(146.5,67);
curveVertex(145,67);
curveVertex(158,60);
curveVertex(159,70);
curveVertex(152,75);
curveVertex(159,75);
curveVertex(158,84);
curveVertex(145,78);
//Control Point
curveVertex(144,67);
//End
endShape();
strokeWeight(0.5);
fill(1);
beginShape();

//Control Point
curveVertex(145,78);
//Anchor
curveVertex(145,67);
curveVertex(133,60);
curveVertex(132,70);
curveVertex(139,75);
curveVertex(132,75);
curveVertex(133,84);
curveVertex(145,78);
//Control Point
curveVertex(145,67);
//End
endShape();
fill(1);
ellipse(145.5,73,2,20);
}

flowers();
Leaf(1, 0, 0)
Leaf(2, 0, 0)
}

function flowers(){
    //Flower Stem MAIN
  stroke(1)
  noFill();
  strokeWeight(FlowerStem)
  //Start
  beginShape();
      scale(FlowerGone)

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
  strokeWeight(FlowerStem);
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
  noFill(0);
  strokeWeight(FlowerStem);
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
  fill(1)
  circle(55,70,5)

  fill(1)
  line(45,80,55,70)
  
  noFill();
  strokeWeight(FlowerPetals)
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
  strokeWeight(FlowerPetals)
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
  strokeWeight(FlowerPetals)
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
  strokeWeight(FlowerPetals)
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
  strokeWeight(FlowerPetals)
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
  strokeWeight(FlowerPetals)
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
  line(92,21,100,50)
  
  noFill();
  strokeWeight(FlowerPetals);
  //Start
  beginShape();
  //Control Point
  curveVertex(100,50);
  curveVertex(100,50);
  //Anchor Points
  curveVertex(80,25)
  curveVertex(95,20)
  curveVertex(100,19)
  curveVertex(106,20)
  curveVertex(108,28)
  curveVertex(100,50)
  //Control
  curveVertex(100,50)
  curveVertex(80,25)
  
  //End
  endShape();
  
  //Top Flower Petal Three
  
  
  noFill();
  strokeWeight(FlowerPetals);
  line(100,50,128,35)
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
  strokeWeight(FlowerPetals);
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
  strokeWeight(FlowerPetals);
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
  strokeWeight(FlowerPetals);
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
  strokeWeight(FlowerPetals);
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
  strokeWeight(FlowerPetals);
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
  strokeWeight(FlowerPetals);
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
}

function Leaf(Leafside, x, y){
  if (Leafside ==1){
     //Leaf One Top Left
    noFill();
    strokeWeight(LeafThick);
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
strokeWeight(LeafThick);
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

  }
else{
  //Leaf Two Top Right
  noFill();
  strokeWeight(LeafThick);
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
  strokeWeight(LeafThick);
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


}