//a)

/*
// Variables globales (les points de contrôle)
let P0, P1, P2;
function setup() {
   createCanvas(windowWidth, windowHeight);
   // On peut créer des points/vecteurs directement
   // avec la fonction createVector
   P0 = createVector(100, 600);
   P1 = createVector(width / 2.0, 100);
   P2 = createVector(400, 800);
   background(200);
   textSize(15);
}
// fonction qui dessine les points de contrôle P0, P1, P2
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
// fonction qui dessine les segments [P0P1] et [P1P2]
function drawControlCage() {
   stroke(0, 0, 0)
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
}
function draw() {
   background(255);
   drawControlCage();
   drawControlPoints();
   let t = 0.3; // variable pour stocker un pourcentage [0, 1]
   let X01, X12; // respectivement un point sur [P0P1] et sur [P1P2]
   // on peut interpoler directement deux points/vecteurs.
   // C'est plus simple que d'interpoler séparément la composante x
   // et la composante y de chaque vecteur (mais ça revient au même)
   X01 = p5.Vector.lerp(P0, P1, t);
   X12 = p5.Vector.lerp(P1, P2, t);
   // dessin des point X01 et X12
   stroke(12, 43, 223);
   fill(12, 43, 223);
   circle(X01.x, X01.y, 5);
   circle(X12.x, X12.y, 5);
   line(X01.x, X01.y, X12.x, X12.y);
}
*/

//b)
/*
let P0, P1, P2;
function setup() {
   createCanvas(windowWidth, windowHeight);
   // On peut créer des points/vecteurs directement
   // avec la fonction createVector
   P0 = createVector(100, 600);
   P1 = createVector(width / 2.0, 100);
   P2 = createVector(400, 800);
   textSize(15);
}
// fonction qui dessine les points de contrôle P0, P1, P2
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
// fonction qui dessine les segments [P0P1] et [P1P2]
function drawControlCage() {
   stroke(0, 0, 0)
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
}
function draw() {
   background(200);
   drawControlCage();
   drawControlPoints();
   // on peut interpoler directement deux points/vecteurs.
   // C'est plus simple que d'interpoler séparément la composante x
   // et la composante y de chaque vecteur (mais ça revient au même)
   for (let t = 0.1; t <=0.9; t += 0.1) {
      let X01 = p5.Vector.lerp(P0, P1, t);
      let X12 = p5.Vector.lerp(P1, P2, t);
      stroke(12, 43, 223);
      fill(12, 43, 223);
      circle(X01.x, X01.y, 5);
      circle(X12.x, X12.y, 5);
      line(X01.x, X01.y, X12.x, X12.y);
   }
}
*/

//c)
/*
let P0, P1, P2;
function setup() {
   createCanvas(windowWidth, windowHeight);
   // On peut créer des points/vecteurs directement
   // avec la fonction createVector
   P0 = createVector(100, 600);
   P1 = createVector(width / 2.0, 100);
   P2 = createVector(400, 800);
   background(200);
   textSize(15);
}
// fonction qui dessine les points de contrôle P0, P1, P2
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
// fonction qui dessine les segments [P0P1] et [P1P2]
function drawControlCage() {
   stroke(0, 0, 0)
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
}
function draw() {
   P2.x = mouseX;
   P2.y = mouseY;
   background(255);
   drawControlCage();
   drawControlPoints();
   // on peut interpoler directement deux points/vecteurs.
   // C'est plus simple que d'interpoler séparément la composante x
   // et la composante y de chaque vecteur (mais ça revient au même)
   for (let t = 0; t <= 1; t += 0.01) {
      let X01 = p5.Vector.lerp(P0, P1, t);
      let X12 = p5.Vector.lerp(P1, P2, t);
      stroke(12, 43, 223);
      fill(12, 43, 223);
      circle(X01.x, X01.y, 5);
      circle(X12.x, X12.y, 5);
      line(X01.x, X01.y, X12.x, X12.y);
   }
}
*/

//d)
/*
let P0, P1, P2;
function setup() {
   createCanvas(windowWidth, windowHeight);
   // On peut créer des points/vecteurs directement
   // avec la fonction createVector
   P0 = createVector(100, 600);
   P1 = createVector(width / 2.0, 100);
   P2 = createVector(400, 800);
   background(200);
   textSize(15);
}
// fonction qui dessine les points de contrôle P0, P1, P2
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
// fonction qui dessine les segments [P0P1] et [P1P2]
function drawControlCage() {
   stroke(0, 0, 0)
   line(P0.x, P0.y, P1.x, P1.y);
   line(P1.x, P1.y, P2.x, P2.y);
}
function draw() {
   P2.x = mouseX;
   P2.y = mouseY;
   background(255);
   drawControlCage();
   drawControlPoints();
   // on peut interpoler directement deux points/vecteurs.
   // C'est plus simple que d'interpoler séparément la composante x
   // et la composante y de chaque vecteur (mais ça revient au même)
   for (let t = 0; t <= 1; t += 0.1) {
      let X01 = p5.Vector.lerp(P0, P1, t);
      let X12 = p5.Vector.lerp(P1, P2, t);
      stroke(12, 43, 223);
      fill(12, 43, 223);
      //circle(X01.x, X01.y, 5);
      //circle(X12.x, X12.y, 5);
      //line(X01.x, X01.y, X12.x, X12.y);

      let X012 = p5.Vector.lerp(X01, X12, t);
      fill('250, 143, 23');
      circle(X012.x, X012.y, 10);
   }
}
*/
//e)
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
   beginShape();
   for (let t = 0; t <= 1; t += 0.01) {
      stroke(0, 0, 0);
      let X01 = p5.Vector.lerp(P0, P1, t);
      let X12 = p5.Vector.lerp(P1, P2, t);
      let X012 = p5.Vector.lerp(X01, X12, t)
      vertex(X012.x, X012.y);

   }
   endShape();
   pop();
}