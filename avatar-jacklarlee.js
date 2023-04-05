let tongue 
let x=0
function setup()
{
  createCanvas(400, 400);
  
}

function draw() {
  background ("#97BC6C");
  scale(2)
 strokeWeight(1);
  translate(-100,-100)
  // skincolor
  fill("rgb(222,193,154)")
  rect(100,100,200);
  fill("rgb(42,42,42)")
  rect(110,150,71,10);
   rect(210,150,70,10);
  fill("rgb(18,28,137)")
  rect(228,160,30,20);
   rect(130,160,30,20);
  //nose and pupils 
  fill("rgb(41,38,38)")
  rect(176,160,5,65);
  rect(170,160,5,20);
  rect(164,170,5,10);
  rect(160,160,5,10);
  rect(214,160,5,25);
  rect(219,170,4,10);
   rect(224,160,4,10);
  rect(235,160,17,14);
  rect(136,160,17,14);
  rect(176,220,25,8)
  rect(146,255,100,3)
  // whites of eyes
  fill("rgb(355,255,255)")
  rect(135,172,5,5);
  rect(132,165,5,5);
  rect(231,173,5,5);
  rect(258,160,16,20);
  rect(115,160,15,20);
  //pink rgb(209,162,169)
  fill(" rgb(214,151,160)")
  rect(220,160,4,10);
    rect(223,170,4,10);
    rect(165,160,4,10);
      rect(160,170,4,10);
  //mouth
  rect(170,259,50,13)
  rect(170,250,50,5)
  //mouth highlights 
  fill("rgb(218,181,186)")
  rect(175,250,5,5)
  rect(175,265,13,5)
  //eyebrows
  fill("rgb(255,255,177)") 
  rect(120,130,60,10)
  rect(210,130,65,10)
  //piercings
  fill("rgb(233,233,233)")
  rect(200,228,7,7)
  fill("rgb(224,224,224)")
  rect(179,228,7,7)
  rect(265,123,7,7)
  rect(260,140,7,7)
  fill("rgb(255,255,255)")
  rect(255,123,7,7)
  rect(250,140,7,7);
  //hair 
  strokeWeight(0)
  fill("rgb(201,98,36)")
  rect(100,120,60,10) 
  rect(100,90,20,95)
  rect(120,170,10,40)
  rect(240,120,100,10)
 rect(280,100,100)
  rect(280,200,10)
   rect(270,200,10);
 fill("rgb(139,73,33)")
  rect(290,260,100)
  rect(280,290,100)
  fill("rgb(178,106,63)")
  rect(100,290,30)
   rect(100,270,10,30)
  fill("rgb(219,127,72)")
  rect(220,100,20,40)
  rect(260,100,20,35)
  rect(220,100,100,20)
  rect(100,100,80,20)
   rect(160,100,10,40)
  rect(170,130,10,15)
  rect(210,100,10,15)
   rect(240,130,10,15)
  rect(140,100,10,45); 
  rect(130,120,10,10)
  rect(120,120,10,5)
  rect(100,100,30,50)
  rect(270,100,30,60)
  //skin highlight 
   fill("rgb(236,222,202)")
  rect(181,180,3,40)
  rect(182,210,20,10)
  fill("red")
  let addtongue= rect(x,x,50,50)
}
function addtongue(){
  if(mouseIsPressed){  
  translate(addtongue(x+200,x+200,50,50))
    
  }
  
}
