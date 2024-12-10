//a)
/*
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
    rotate(PI/3);
    rect(0, 0, 160, 20);
}
*/

//b)
/*
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

function draw() {
    //V1
    //rotate(PI/6);
    //rect(0, 0, 160, 20);
    //rotate(PI/6);
    //rect(0, 0, 160, 20);

    //V2
    push();
    rotate(PI/6);
    rect(0, 0, 160, 20);
    pop();
    rotate(PI/3);
    rect(0, 0, 160, 20);
}
*/

//c)
/*
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

// fonction qui dessine un rectangle de 100 pixels de large et
// 50 de haut avec le texte label à peu près au centre
function rectWithLabel(label) {
  rect(0, 0, 100, 50);
  text(label, 50, 25);
}

function draw() {
  translate(100, 100);
  rectWithLabel("R1");
  push();
  translate(width - 200, 0);
  rotate(HALF_PI);
  rectWithLabel("R2");
  pop();
  push();
  translate(width - 200, height - 200);
  rotate(PI);
  rectWithLabel("R3");
  pop();
  translate(0, height-200);
  rotate(PI+HALF_PI)
  rectWithLabel("R4");
}
*/

//d)

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function rectWithLabel(label) {
  rect(0, 0, 100, 50);
  text(label, 50, 25);
}

function draw() {
  //V1
  //translate(100, 100);
  //scale(4);

  //V2
  //scale(4);
  //translate(100, 100);

  //rectWithLabel("R1");

  //Cercles
  translate(20, 100);
  circle(0, 0, 10);
  translate(40, 0);
  scale(2);
  circle(0, 0, 10);
  translate(40, 0);
  scale(2);
  circle(0, 0, 10);
  translate(40, 0);
  scale(2);
  circle(0, 0, 10);
  translate(40, 0);
  scale(2);
  circle(0, 0, 10);
}
