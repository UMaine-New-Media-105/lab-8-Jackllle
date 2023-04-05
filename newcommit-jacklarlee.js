function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Easier to write arcs and rotations in degrees.
  //STEP 2: Add a new object for the first flower here, eg:
      flower1 = {
      x:50,
      y:200,
      stemColor : "darkturquoise",
      flowerSize:0.4,
      segments:8
      }
  
   //STEP 3: Paste the 6 addFlower parameters inside the object you made in Step 2.
  //For each property, add a colon, comma, and a return so each is on a new line.
  //(Leave the values for each property blank for now.)
  //Then copy this object to make a template for all four flowers, eg:
      flower1 = {
        x:50,
        y:200 ,
        stemColor: "darkturquoise" ,
        petalColor:"powderblue",
        flowerSize:0.4,
        numberOfPetals: 8
        
      }
      flower2 = {
        x:130,
        y:300,
        stemColor:"palegreen",
        petalColor:"plum",
        flowerSize:0.5,
        numberOfPetals:5,
      }
        
      flower3 = {
        x:180,
        y:160,
        stemColor:"olivedrab",
        petalColor:"fuchsia",
        flowerSize:0.3,
        numberOfPetals:12,
      }
      flower4 ={
        x:320,
        y:70,
        stemColor:"lime",
        petalColor:"pink",
        flowerSize:0.5,
        numberOfPetals:6,
      }
  catipill1 ={
    x:100,
    y:100,
    bodyColor:"gold",
    antennaColor:"orangered",
    catipillSize:0.6,
    numberOfSegments:8,
  }
  catipill2 = {
    x:210,
    y:330,
    bodyColor:"yellow",
    antennaColor: "orange",
    catipillSize:0.8,
    numberOfSegments:6
  }
  catipill3 = {
    x:280,
    y:240,
    bodyColor:"sandybrown",
    antennaColor:"brown",
    catipillSize:0.5,
    numberOfSegments:4
  }
        
        
      
      

  /* STEP 4: Copy the values for each set of addFlower() parameters in draw()
  into its corresponding object here in setup(), eg:
      flower1 = {
        x: 50,
        y: 200,
        stemColor: "darkturquoise",
        ...
      };
      flower2 = {
        x: 130,
        y: 300,
        stemColor: "palegreen",
        ...
      };
      ...
*/
}
function draw() {
  background("yellowgreen");
  /* STEP 5: Replace the 6 parameters in each addFlower() below 
  with its corresponding object name, eg:
    addFlower(flower1);
    addFlower(flower2);
    ..
  (This step will temporarily cause an error.)
  */
  // Add flowers.
  addFlower(flower1);
  addFlower(flower2);
  addFlower(flower3);
  addFlower(flower4);
  // Add catipillerpillars.
  addcatipillerpillar(catipill1);
  addcatipillerpillar(catipill2);
  addcatipillerpillar(catipill3);
}
/* STEP 1: Copy the 6 addFlower parameters inside the parentheses for future reference. */
  /* STEP 6: Replace the 6 addFlower with a single object name inside the parentheses, eg:
    function addFlower(flower) {...}
  */
function addFlower(flower) {
  /* STEP 7: Replate all naked variables below with object properties, eg:
    x becomes flower.x
    stemColor becomes flower.stemColor
    ...
  Do NOT replace local variables defined with "let"—only parameters passed to the function.
  When you're done, you should see all four flowers like the original sketch.
  */
  push();
  translate(flower.x, flower.y);
  noStroke();
  scale(flower.flowerSize);
  // Draw stem.
  fill(flower.stemColor);
  rect(-3, 30, 6, 70) ;
  // Decide angle between petals.
  let addAngle = 360/flower.numberOfPetals;
  // Draw petals.
  fill(flower.petalColor);
  for( let petalsDrawn = 0; petalsDrawn < flower.numberOfPetals; petalsDrawn++ ) { 
    rotate(addAngle); // Rotate each petal to form the flower.
    ellipse(0, 0, 100, 30); // Position at upper left to ease rotation.
  }
  pop();
}
/* STEP 8: If you have time, perform steps 1-6 for the addcatipillerpillar function as well. */
function addcatipillerpillar(catipill) {
  push();
  translate(catipill.x, catipill.y);
  noStroke();
  scale(catipill.catipillSize);
  let addX = 22; // Decrease this to make the catipillerpiller more compact.
  // Draw antennae.
  noFill();
  stroke(catipill.antennaColor);
  strokeWeight(3);
  arc(-25, -18, 30, 30, 270, 360); // Left antenna.
  arc(-14, -23, 30, 30, 270, 360); // Right antenna.
  // Draw head.
  noStroke();
  fill(catipill.bodyColor);
  ellipse(0, -10, 30, 30); // The head sticks up a bit.
  // Draw body.
  for( let segmentsDrawn = 0; segmentsDrawn < catipill.numberOfSegments; segmentsDrawn++ ) { 
    translate(addX, 0); // Move each successive segment to the right.
    ellipse(0, 0, 30, 30);
  }
  pop();
}
