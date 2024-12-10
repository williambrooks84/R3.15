//a)

/*function setup() {
    createCanvas(windowWidth, windowHeight);
 }
 
 
 function draw() {
    background(100);
    stroke(0, 0, 200); // couleur du contour RGB
    strokeWeight(4); // épaisseur du contour
    circle(windowWidth/2, windowHeight/2, 100);
 }*/

//b)

/*function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  stroke(0, 0, 200); // couleur du contour RGB
  strokeWeight(4); // épaisseur du contour
  fill(255, 20, 0); // couleur de remplissage RGB
  //noFill(); // pas de remplissage
  circle(mouseX, mouseY, 20);
}*/

//c)

/*function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background('yellow');
  stroke(0, 0, 200); // couleur du contour RGB
  strokeWeight(1); // épaisseur du contour
  //fill(255, 20, 0); // couleur de remplissage RGB
  noFill(); // pas de remplissage
  circle(mouseX, mouseY, 20);
  stroke(255, 0, 0); // couleur du contour RGB
  strokeWeight(1);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY); // ligne horizontale
  line(mouseX, mouseY - 20, mouseX, mouseY + 20); // ligne verticale
}*/

//d)

/*function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("yellow");
    stroke(0, 0, 200); // couleur du contour RGB
    strokeWeight(1); // épaisseur du contour
    //fill(255, 20, 0); // couleur de remplissage RGB
    noFill(); // pas de remplissage
    rect(mouseX - 10, mouseY - 10, 20, 20); // Center the rectangle around the mouse
    stroke(255, 0, 0); // couleur du contour RGB
    strokeWeight(1);
    line(mouseX - 20, mouseY, mouseX + 20, mouseY); // ligne horizontale centrée
    line(mouseX, mouseY - 20, mouseX, mouseY + 20); // ligne verticale centrée
}*/


//e)

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(240);
    drawGrid(20);
    stroke(0);
    strokeWeight(1);
    fill(255);
    rect(85, 90, 30, 70);
    circle(100, 70, 60);
    ellipse(119, 70, 16, 32);
    ellipse(81, 70, 16, 32);
    line(85, 160, 75, 180);
    line(115, 160, 125, 180);

}


 function mousePressed() {
    console.log("{x: " + mouseX + ", y:" + mouseY + "}");
 }


 function drawGrid(delta) {
    noFill();
    stroke(100, 100, 100);
    textSize(10);
    for (let x = 0; x <= width; x += delta) {
        for (let y = 0; y <= height; y += delta) {
            line(x, 0, x, height);
            line(0, y, width, y);
            if (y == 0) text(x, x + 1, y + 10);
            if (x == 0) text(y, x + 1, y - 1);
        }
    }
 }