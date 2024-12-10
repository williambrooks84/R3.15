//a)

/*function setup() {
    // Création du canvas
    createCanvas(windowWidth, windowHeight);
    // couleur de fond
    background(100);
 }
 
 
 function draw() {
    // Ajout des cercles
    circle(mouseX, mouseY, 20);
 }*/


//b)
/*function setup() {
   // Création du canvas
   createCanvas(400, 400);
   // couleur de fond
   background('blue');
}


function draw() {
   // Ajout des cercles
   let randomValue = random(10, 100);
   circle(mouseX, mouseY, randomValue);
}*/

//c)

/*
function setup() {
   // Création du canvas
   createCanvas(windowWidth, windowHeight);
}


function draw() {
   // couleur de fond
   background(100);

   // Ajout des cercles
   circle(mouseX, mouseY, 20);
}

//Le cerle n'apparait qu'une seule fois parce que la fonction redessine le fond de l'écran avec une couleur grise à chaque frame.
*/

//d)

function setup() {
   // Création du canvas
   createCanvas(windowWidth, windowHeight);

   background('yellow');

   circle(width / 2, height / 2, 100);
}