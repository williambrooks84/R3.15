//a)
/*
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100); //en le mettant ici les anciennes ellipses ne sont pas effacés
 }
 
 
 let angle = 0;
 
 
 function draw() {

    translate(windowWidth / 2, windowHeight / 2);
    rotate(angle);
    ellipse(0, 0, 160, 20);
    angle += 0.1; //à changer pour modifier la vitesse de rotation
 }
 */

//b)
/*
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let angle = 0;

function draw() {
  background(100);
  translate(mouseX, mouseY); // Position de la souris
  scale(sin(angle) + 1.5); // Changer la taille de l'ellipse
  rotate(angle);
  ellipse(0, 0, 160, 20);
  angle += 0.1; //à changer pour modifier la vitesse de rotation
}
*/

//c)

function setup() {
   createCanvas(windowWidth, windowHeight);
 }
 
 let angleBlue = 0;
 let angleGrey = 0;

 
 function draw() {
   let lumiere = map(sin(angleGrey), -1, 1, 100, 255);
   //let lumiere = 125+125*Math.cos(angleBlue%(2*Math.PI));
   background(lumiere);
   translate(windowWidth / 2, windowHeight / 2);
   fill('yellow');
   circle(0, 0, 100);
   push();
   rotate(angleBlue);
   translate(200, 0); // Distance du centre du cercle jaune
   fill('blue');
   circle(0, 0, 25);
   push()
   rotate(angleGrey);
   translate(35, 0); // Distance du centre du cercle bleu
   fill('grey');
   circle(0, 0, 20);
   pop();
   pop();
   angleBlue += 0.02;
   angleGrey += 0.05;
}