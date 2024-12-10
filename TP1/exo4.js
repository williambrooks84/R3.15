//a)

/*
// variable globale slider
let sliderRed;
let sliderGreen;
let sliderBlue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // slider avec une valeur initiale de 50
  // et qui peut varier entre 0 et 100
  sliderRed = createSlider(0, 100, 50);
  sliderGreen = createSlider(0, 100, 50);
  sliderBlue = createSlider(0, 100, 50);
  // positionnement du slider
  sliderRed.position(100, 100);
  sliderGreen.position(100, 150);
  sliderBlue.position(100, 200);
  // taille de texte par défaut (pour l'affichage)
  textSize(20);
  // utilisation des valeurs pour définir la couleur de fond
}
function draw() {
  // lecture de la valeur du slider et conversion en pourcentage (entre 0 et 1)
  let pourcentageRed = sliderRed.value() / 100;
  let pourcentageGreen = sliderGreen.value() / 100;
  let pourcentageBlue = sliderBlue.value() / 100;
  let min = 0;
  let max = 255;
  let red = lerp(min, max, pourcentageRed);
  let green = lerp(min, max, pourcentageGreen);
  let blue = lerp(min, max, pourcentageBlue);
  background(red, green, blue);
  text("Red", sliderRed.x * 2 + sliderRed.width, 115);
  text("Green", sliderGreen.x * 2 + sliderGreen.width, 165);
  text("Blue", sliderBlue.x * 2 + sliderBlue.width, 215);
}*/

//b)

/*
// Variables globales
let slider;
let circleA, circleB;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 100, 50);
    slider.center();
    // définition d'un objet cercle
    circleA = {
         c: { x: 100, y: 100 }, // centre
         r: 50, // rayon
         color: { r: 43, g: 255, b: 123 }
    }
    // définition d'un autre cercle
    circleB = {
         c: { x: width - 100, y: 100 },
         r: 100,
         color: { r: 176, g: 52, b: 200 }
    }
}
function draw() {
    background(200);
    // Affichage du cercle A
    fill(circleA.color.r, circleA.color.g, circleA.color.b);
    circle(circleA.c.x, circleA.c.y, circleA.r);
    // Affichage du cercle B
    fill(circleB.color.r, circleB.color.g, circleB.color.b);
    circle(circleB.c.x, circleB.c.y, circleB.r);
    let pourcentage = slider.value() / 100;
    // Calcul d'un troisième cercle dont la position x et le rayon sont
    // l'interpolation des positions x et des rayons des cercles A et B
    let circleX = {
         c: { x: lerp(circleA.c.x, circleB.c.x, pourcentage), y: 100 },
         r: lerp(circleA.r, circleB.r, pourcentage),
         color: { r: 0, g: 0, b: 0 }
    }
    // Affichage du cercle X
    fill(circleX.color.r, circleX.color.g, circleX.color.b);
    circle(circleX.c.x, circleX.c.y, circleX.r);
}*/

//c)

/*
// Variables globales
let slider;
let circleA, circleB;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 100, 50);
    slider.center();
    // définition d'un objet cercle
    circleA = {
         c: { x: 100, y: 100 }, // centre
         r: 50, // rayon
         color: { r: 43, g: 255, b: 123 }
    }
    // définition d'un autre cercle
    circleB = {
         c: { x: width - 100, y: 100 },
         r: 100,
         color: { r: 176, g: 52, b: 200 }
    }
}
function draw() {
    background(200);
    // Affichage du cercle A
    fill(circleA.color.r, circleA.color.g, circleA.color.b);
    circle(circleA.c.x, circleA.c.y, circleA.r);
    // Affichage du cercle B
    fill(circleB.color.r, circleB.color.g, circleB.color.b);
    circle(circleB.c.x, circleB.c.y, circleB.r);
    let pourcentage = slider.value() / 100;
    // Calcul d'un troisième cercle dont la position x, le rayon et la couleur sont
    // l'interpolation des positions x, des rayons et des couleurs des cercles A et B
    let circleX = {
         c: { x: lerp(circleA.c.x, circleB.c.x, pourcentage), y: 100 },
         r: lerp(circleA.r, circleB.r, pourcentage),
         color: { 
             r: lerp(circleA.color.r, circleB.color.r, pourcentage),
             g: lerp(circleA.color.g, circleB.color.g, pourcentage),
             b: lerp(circleA.color.b, circleB.color.b, pourcentage)
         }
    }
    // Affichage du cercle X
    fill(circleX.color.r, circleX.color.g, circleX.color.b);
    circle(circleX.c.x, circleX.c.y, circleX.r);
}
*/

//d)

// Variables globales
let slider;
let circleA, circleB;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider = createSlider(0, 100, 50);
    slider.center();
    // définition d'un objet cercle
    circleA = {
         c: { x: 100, y: 100 }, // centre
         r: 50, // rayon
         color: { r: 43, g: 255, b: 123 }
    }
    // définition d'un autre cercle
    circleB = {
         c: { x: width - 100, y: 400 },
         r: 100,
         color: { r: 176, g: 52, b: 200 }
    }
}
function draw() {
    background(200);
    // Affichage du cercle A
    fill(circleA.color.r, circleA.color.g, circleA.color.b);
    circle(circleA.c.x, circleA.c.y, circleA.r);
    // Affichage du cercle B
    fill(circleB.color.r, circleB.color.g, circleB.color.b);
    circle(circleB.c.x, circleB.c.y, circleB.r);
    let pourcentage = slider.value() / 100;
    // Calcul d'un troisième cercle dont la position x, y, le rayon et la couleur sont
    // l'interpolation des positions x, y, des rayons et des couleurs des cercles A et B
    let circleX = {
         c: { 
             x: lerp(circleA.c.x, circleB.c.x, pourcentage), 
             y: lerp(circleA.c.y, circleB.c.y, pourcentage) 
         },
         r: lerp(circleA.r, circleB.r, pourcentage),
         color: { 
             r: lerp(circleA.color.r, circleB.color.r, pourcentage),
             g: lerp(circleA.color.g, circleB.color.g, pourcentage),
             b: lerp(circleA.color.b, circleB.color.b, pourcentage)
         }
    }
    // Affichage du cercle X
    fill(circleX.color.r, circleX.color.g, circleX.color.b);
    circle(circleX.c.x, circleX.c.y, circleX.r);
}