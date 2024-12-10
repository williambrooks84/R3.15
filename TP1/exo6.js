//a)
/*
let P0, P1, P2;
function setup() {
    createCanvas(windowWidth, windowHeight);
    P0 = createVector(100, 600);
    P1 = createVector(width / 2.0, 100);
    P2 = createVector(400, 800);
    background(200);
    textSize(15);
}

function drawControlPoints() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(P0.x, P0.y, 15);
    circle(P1.x, P1.y, 15);
    circle(P2.x, P2.y, 15);
    text("P0", P0.x, P0.y - 20);
    text("P1", P1.x, P1.y - 20);
    text("P2", P2.x, P2.y - 20);
}

function drawControlCage() {
    stroke(0, 0, 0);
    line(P0.x, P0.y, P1.x, P1.y);
    line(P1.x, P1.y, P2.x, P2.y);
}

function draw() {
    P2.x = mouseX;
    P2.y = mouseY;
    background(255);
    drawControlCage();
    drawControlPoints();
    push();
    strokeWeight(3);
    noFill();
    stroke(0, 0, 0);
    bezier(P0.x, P0.y, P1.x, P1.y, P1.x, P1.y, P2.x, P2.y);
    pop();
}
*/
//b)
/*
let P0, P1, P2, P3;
function setup() {
    createCanvas(windowWidth, windowHeight);
    P0 = createVector(100, 600);
    P1 = createVector(width / 2.0, 100);
    P2 = createVector(400, 800);
    P3 = createVector(800, 600);
    background(200);
    textSize(15);
}

function drawControlPoints() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(P0.x, P0.y, 15);
    circle(P1.x, P1.y, 15);
    circle(P2.x, P2.y, 15);
    circle(P3.x, P3.y, 15);
    text("P0", P0.x, P0.y - 20);
    text("P1", P1.x, P1.y - 20);
    text("P2", P2.x, P2.y - 20);
    text("P3", P3.x, P3.y - 20);
}

function drawControlCage() {
    stroke(0, 0, 0);
    line(P0.x, P0.y, P1.x, P1.y);
    line(P1.x, P1.y, P2.x, P2.y);
    line(P2.x, P2.y, P3.x, P3.y);
}

function draw() {
    P3.x = mouseX;
    P3.y = mouseY;
    background(255);
    drawControlCage();
    drawControlPoints();
    push();
    strokeWeight(3);
    noFill();
    stroke(0, 0, 0);
    bezier(P0.x, P0.y, P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
    pop();
}
*/

//c)
/*
let P0, P1, P2, P3;
function setup() {
    createCanvas(windowWidth, windowHeight);
    P0 = createVector(100, 600);
    P1 = createVector(width / 2.0, 100);
    P2 = createVector(400, 800);
    P3 = createVector(800, 600);
    background(200);
    textSize(15);
}

function drawControlPoints() {
    stroke(255, 0, 0);
    fill(255, 0, 0);
    circle(P0.x, P0.y, 15);
    circle(P1.x, P1.y, 15);
    circle(P2.x, P2.y, 15);
    circle(P3.x, P3.y, 15);
    text("P0", P0.x, P0.y - 20);
    text("P1", P1.x, P1.y - 20);
    text("P2", P2.x, P2.y - 20);
    text("P3", P3.x, P3.y - 20);
}

function drawControlCage() {
    stroke(0, 0, 0);
    line(P0.x, P0.y, P1.x, P1.y);
    line(P1.x, P1.y, P2.x, P2.y);
    line(P2.x, P2.y, P3.x, P3.y);
}

function draw() {
    strokeWeight(1);
    background(255);
    drawControlPoints();
    noFill();
    strokeWeight(3);
    stroke(50, 24, 2);
    beginShape();
    curveVertex(P0.x, P0.y);
    curveVertex(P0.x, P0.y);
    curveVertex(P1.x, P1.y);
    curveVertex(P2.x, P2.y);
    curveVertex(P3.x, P3.y);
    curveVertex(P3.x, P3.y);
    endShape();

}
function mouseDragged() {
    if (dist(mouseX, mouseY, P0.x, P0.y) < 30) {
        P0.x = mouseX;
        P0.y = mouseY;
    } else if (dist(mouseX, mouseY, P1.x, P1.y) < 30) {
        P1.x = mouseX;
        P1.y = mouseY;
    } else if (dist(mouseX, mouseY, P2.x, P2.y) < 30) {
        P2.x = mouseX;
        P2.y = mouseY;
    } else if (dist(mouseX, mouseY, P3.x, P3.y) < 30) {
        P3.x = mouseX;
        P3.y = mouseY;
    }
}
*/
//d)

let vSpace = 16;
let hSpace = 25;
let heightMax = 120;
let span = 100;
let bigSize = 20;

let lines = [];

function drawOneLine(alt, line) {
  beginShape();
  for (let i = hSpace; i < width - hSpace; i += hSpace) {
    let r = line[i];
    curveVertex(i, alt - r);
  }
}

function drawAllLines() {
  let count = 0;
  for (let i = 0; i < height; i += vSpace) {
    drawOneLine(i, lines[i]);
    ++count;
  }
}

function createLine() {
  let oneLine = [];
  for (let i = hSpace; i < width - hSpace; i += hSpace) {
    oneLine.push(random(-10, 10));
  }
  return oneLine;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let j = vSpace; j < height - vSpace; j += vSpace) {
    let line = createLine();
    lines.push(line);
  }
}

let update = 0;
function draw() {
  background(20, 25, 12);
  stroke(169, 251, 215);
  strokeWeight(2);
  fill(20, 25, 12);
  let indexLine = 0;
  for (let j = update + 10 * vSpace; j < height - vSpace; j += vSpace) {
    let line = lines[indexLine];
    let indexR = 0;
    beginShape();
    for (let i = hSpace; i < width - hSpace; i += hSpace) {
      let r = line[indexR++];
      curveVertex(i, j - r);
    }
    endShape();
  }
  ++update;
  if (update > height) {
    update = 0;
    lines.pop();
    lines.unshift(createLine());
  }
}
