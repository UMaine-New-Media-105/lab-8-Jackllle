let vacHeight, vacWidth, vacX, vacY;
var x = 1;
var y = 2;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  eggX = random(50, 350);
  eggY = 0;
  eggSpeed = random(2, 8);
  eggIsFalling = false;
  eggCaught = false;
  d = dist;
}

function draw() {
  background("rgb(42,42,67)");
eggScore();
  let score = 0;
  text(score);
  fill("white");
  fill("rgb(32,32,51)");
  rect(50, 50, 300, 270);
  fill("rgb(19,19,30)");
  rect(100, 100, 200, 200);
  fill("rgb(10,10,16)");
  rect(125, 125, 150, 150);
  fill("rgb(0,0,0)");
  rect(150, 150, 100, 100);
  //FUNCTION

  egg(eggX, eggY - 77);
  eggY = eggY + 10;
  drawGround();
  if ("space" == true) {
    eggIsFalling = true;
  }
  if (eggIsFalling == true) {
    eggY = eggY + 5;
    egg(meggX, eggY - 77);
  }
  if (eggY >= height +50 ) {
    eggIsFalling = false;
    eggY = 0;
    eggX = random(50, 350);
  }
  if (mouseIsPressed) d = dist(mouseX +10, 200, eggX, eggY);
  if (d <= 100) {
    eggCaught = true;
    score = score + x;
   translate(eggScore(OVERLAY ,500))
  }
  fill("white")
  strokeWeight(1);
  stroke(100);
  textSize(50);
  text(score, 360, 50);
  if (mouseIsPressed) {
    drawJUMPSPRITE(mouseX - 70, 50, 2);
  } else {
    drawIDLESPRITE(mouseX - 70, 50, 2);
  }
}

function drawIDLESPRITE(x, y, size) {
  noStroke();
  scale(1.5);
  translate(x, y);
  //sword
  fill("rgb(221,221,221)");
  rect(88, 100, 5, 15);
  fill("grey");
  rect(75, 115, 25, 50);
  fill("rgb(66,66,66)");
  rect(80, 120, 12, 40);

  //hair
  fill("black");
  rect(94, 100, 20, 15);
  rect(95, 90, 25, 10);
  rect(93, 110, 10, 7);
  rect(90, 100, 10, 7);
  rect(92, 88, 10, 7);
  rect(115, 87, 7, 7);
  rect(110, 100, 7, 7);
  rect(106, 87, 7, 7);
  //cape
  fill("rgb(76,54,28)");
  rect(89, 120, 28, 45);
  rect(87, 150, 28, 10);
  rect(85, 155, 28, 10);
  rect(82, 160, 22, 10);
  rect(90, 115, 25, 10);

  fill("tan");
  //neck
  rect(100, 100, 10, 20);
  //head
  rect(100, 100, 15, 13);
  rect(96, 107, 5, 5);
  //bangs
  fill("white");
  rect(115, 100, 5, 5);
  rect(118, 102, 5, 5);
  rect(105, 100, 5, 5);
  rect(109, 95, 8, 5);

  fill("tan");
  //armour
  //shoulders

  fill("rgb(60,60,60)");
  rect(91, 120, 28, 10);
  //body
  rect(100, 130, 10, 20);

  //left leg
  fill("rgb(60,60,60)");
  rect(97, 140, 7, 10);
  rect(94, 145, 7, 15);
  rect(97, 155, 7, 15);
  //left foot
  rect(94, 165, 10, 6);
  //right leg
  rect(106, 140, 7, 10);
  rect(109, 145, 7, 15);
  rect(106, 155, 7, 15);
  //right foot
  rect(106, 165, 10, 6);
  //left arm R=>L
  rect(90, 120, 6, 15);
  rect(87, 130, 6, 10);
  fill("grey");
  rect(85, 135, 8, 8);
  //right arm
  fill("rgb(60,60,60)");
  rect(114, 120, 6, 15);
  rect(116, 130, 6, 10);
  fill("tan");
  rect(116, 135, 8, 8);
  //belts
  fill("rgb(99,59,25)");
  rect(100, 130, 8, 5);
  rect(99, 125, 5, 5);
  rect(100, 130, 8, 5);
  rect(105, 135, 8, 5);
  rect(99, 120, 5, 5);
  rect(96, 140, 20, 5);
}
function drawJUMPSPRITE(x, y, size) {
  translate(x, y);
  scale(1.5);
  fill("rgb(221,221,221)");
  rect(88, 100, 5, 15);
  fill("grey");
  rect(75, 115, 25, 50);
  fill("rgb(66,66,66)");
  rect(80, 120, 12, 40);

  noStroke();
  //hair
  fill("black");
  rect(94, 100, 20, 15);
  rect(95, 90, 25, 10);
  rect(93, 110, 10, 7);
  rect(90, 100, 10, 7);
  rect(92, 88, 10, 7);
  rect(115, 87, 7, 7);
  rect(110, 100, 7, 7);
  rect(106, 87, 7, 7);
  //cape
  fill("rgb(76,54,28)");
  rect(89, 120, 28, 45);
  rect(87, 150, 28, 10);
  rect(85, 155, 28, 10);
  rect(82, 160, 22, 10);
  rect(90, 115, 25, 10);

  fill("tan");
  //neck
  rect(100, 100, 10, 20);
  //head
  rect(100, 100, 15, 13);
  rect(96, 107, 5, 5);
  //bangs
  fill("white");
  rect(115, 100, 5, 5);
  rect(118, 102, 5, 5);
  rect(105, 100, 5, 5);
  rect(109, 95, 8, 5);

  fill("tan");
  //armour
  //shoulders

  fill("rgb(60,60,60)");
  rect(91, 120, 28, 10);
  //body
  rect(100, 130, 15, 20);

  //left leg
  fill("rgb(60,60,60)");
  rect(97, 140, 7, 10);
  rect(94, 145, 12, 10);
  rect(94, 155, 8, 16);
  //left foot
  rect(94, 165, 13, 6);
  //right leg
  rect(106, 140, 7, 10);
  rect(106, 145, 15, 9);
  rect(114, 150, 7, 15);
  //right foot
  rect(114, 160, 13, 6);
  //left arm R=>L
  rect(90, 120, 6, 15);
  rect(87, 130, 6, 10);
  fill("grey");
  rect(85, 135, 8, 8);
  //right arm
  fill("rgb(60,60,60)");
  rect(118, 120, 13, 8);
  rect(120, 115, 15, 5);
  fill("tan");
  rect(126, 106, 8, 8);
  //belts
  fill("rgb(99,59,25)");
  rect(100, 130, 8, 5);
  rect(99, 125, 5, 5);
  rect(100, 130, 8, 5);
  rect(105, 135, 8, 5);
  rect(99, 120, 5, 5);
  rect(96, 140, 20, 5);
}
function drawGround(x, y, size) {
  noStroke();
  translate(y);
  fill(" #0B1344");
  rect(0, 330, 1000, 100);
  fill(" #030824");
  rect(50, 380, 1000, 100);
  rect(240, 380, 1000, 100);
  fill("black");
  rect(0, 330, 1000, 1);
  fill("#425C70");
  rect(0, 330, 1000, 40);
  triangle(100, 500, 200, 500, 100, 350);
  rect(0, 350, 13, 40);
  triangle(200, 700, 400, 500, 300, 360);
  rect(0, 350, 13, 40);
  triangle(1, 700, 150, 500, 10, 375);
  rect(0, 350, 13, 40);
  rect(100, 350, 20, 570);
  rect(200, 330, 20, 60);
  rect(220, 330, 20, 50);
  rect(390, 330, 20, 50);
  rect(340, 330, 15, 60);
  rect(300, 330, 15, 60);
  rect(200, 330, 15, 60);
  fill("#425C70");
  rect(0, 0, 60, 60);
  rect(0, 20, 40, 60);
  rect(0, 40, 20, 50);
  rect(20, 0, 60, 50);
  rect(80, 0, 40, 40);
  fill(" #0B1344");
  rect(310, 0, 120, 70);
  rect(330, 20, 120, 70);
  rect(350, 55, 120, 70);
  fill("#425C70");
  rect(310, 0, 10, 70);
  rect(310, 0, 10, 70);
  rect(330, 70, 10, 20);
  rect(350, 90, 10, 36);
  fill(" #030824");
  rect(370, 90, 50, 30);
  rect(350, 58, 50, 29);
  rect(330, 0, 80, 55);
}
function egg(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("maroon");
  rect(70, 95, 20, 25);
  rect(67, 110, 5, 9);
  rect(86, 100, 5, 5);
  fill("white");
  rect(70, 99, 8, 5);
  rect(80, 112, 8, 5);
  fill("black");
  rect(71, 99, 5, 3);
  rect(82, 113, 5, 4);
  fill("rgb(214,204,144)");
  rect(77, 88, 7, 7);
  rect(79, 86, 3, 3);

  pop();
}
function eggScore(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("maroon");
  rect(70, 95, 20, 25);
  rect(67, 110, 5, 9);
  rect(86, 100, 5, 5);
  fill("white");
  rect(70, 99, 8, 5);
  rect(80, 112, 8, 5);
  fill("black");
  rect(71, 99, 5, 3);
  rect(82, 113, 5, 4);
  fill("rgb(214,204,144)");
  rect(77, 88, 7, 7);
  rect(79, 86, 3, 3);
fill("white")
rect(110,90,5,25)
rect(98,93,5,15)
rect(93,99,15,5)
  pop();
}
