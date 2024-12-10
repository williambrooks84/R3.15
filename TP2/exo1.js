//a), b), c)
/*
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  fill(255);
  translate(width / 2 - 15, height / 2 - 15);
  rect(0, 0, 30, 30);
  fill(200);
  translate(35, 10);
  rect(0, 0, 30, 30);
}
*/

//d)
/*
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  push();
  translate(50, 50);
  fill(255);
  rect(0, 0, 30, 30);
  pop();
  translate(35, 10);
  fill(150);
  rect(0, 0, 15, 15);
}
*/


//e)    

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
    stroke(0);
    strokeWeight(1);
    fill(255);
    //body
    push();
    translate(85, 90);
    rect(0, 0, 30, 70);
    pop();

    //head
    push();
    translate(100, 70);
    circle(0, 0, 60);
    pop();

    //eyes
    push();
    translate(119, 70);
    ellipse(0, 0, 16, 32);
    pop();
    push();
    translate(81, 70);
    ellipse(0, 0, 16, 32);
    pop();

    //legs
    push();
    translate(85, 160);
    line(0, 0, -10, 20);
    pop();
    push();
    translate(115, 160);
    line(0, 0, 10, 20);
    pop();
}