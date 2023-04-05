function setup() {
  createCanvas(400, 400);
ballzSpeed=1;
ballX=5;
}


function draw() {
  background(100,150,300);
drawBallz(0,200,100)
drawBallz(100+ballzSpeed,100,100)
drawBallz(ballX+ballzSpeed);
ballX= ballX+ballzSpeed
if(mouseY>100){
translate(50,0,10)}

}






function drawBallz(x,y,size){ 
push();
fill("rgb(240,176,176)")
translate(x,y,size)
fill("rgb(0,0,0)")
rect(100,100,100,100)
fill("#A685DF")
triangle(200,200,180,100,100,200)
fill("#795548")
ellipse(150,100,100,100,100,100)
fill("black")
rect(100,80,30)
rect(150,80,30)
rect(120,96,30,7)
rect(140,96,60,7)
rect(120,130,40,7)
rect(160,125,6,7)
pop();
}
