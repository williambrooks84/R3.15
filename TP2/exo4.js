//a)

//code de base
/*
let hauteurs = [];
let ecart = 10;


function setup() {
   createCanvas(windowWidth, windowHeight);
   for (let i = 0; i < windowWidth; i += ecart)
       hauteurs.push(random(windowHeight));
}


function draw() {
   background(100);
   for (let i = 0; i < hauteurs.length; i++) {
       rect(i * ecart, 0, ecart, hauteurs[i]);
       hauteurs[i] += random(-ecart, ecart);
   }
}
*/

//correction a)
/*
let largeurs = [];
let ecart = 10;

function setup() {
   createCanvas(windowWidth, windowHeight);
   for (let i = 0; i < height; i += ecart)
       largeurs.push(0);
}

function draw() {
   background(100);
   for (let i = 0; i < largeurs.length; i++) {
       rect(width/2, i * ecart, largeurs[i], ecart);
       largeurs[i] += random(-ecart, ecart);
   }
}
*/

/*
let hauteurs = [];
let ecart = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < windowHeight; i += ecart)
    hauteurs.push(random(windowWidth / 3));
}

function draw() {
  background(100);
  translate(windowWidth / 2, 0);
  for (let i = 0; i < hauteurs.length; i++) {
    rect(0, i * ecart, hauteurs[i], ecart); //partie droite
    rect(-hauteurs[i], i * ecart, hauteurs[i], ecart); //partie gauche
    hauteurs[i] += random(-ecart, ecart);
  }
}
*/

//b)
/*
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(100);
  if (frameCount % 10 === 0) {
    let point = createVector(random(windowWidth), 0); //Créer un cercle tous les 10 frames n'importe où sur le haut de la fenêtre
    points.push(point);
  }

  for (let i = points.length - 1; i >= 0; i--) {
    noStroke();
    ellipse(points[i].x, points[i].y, 15, 15); //changer la taille des cercles
    points[i].y += 1; //Déplacer le cercle vers le bas

    if (points[i].y > windowHeight) {
      points.splice(i, 1); //Enlever le cercle si il est en bas de l'écran
    }
  }
}
*/

//c)

let N = 100;   // nombre de bugs
let bugs = []; // tableaux des bugs 
let speed = 1; // vitesse des bugs


//Fonction createOneBug
//Fabrique et retourne un objet "bug" en tout point identique aux   objets Jitter de l'exemple de la documentation de P5.js.
//Note : cette fonction est appelée dans la fonction setup

let createOneBug = function () {


   // déclaration d'un objet bug
   let bug = {
       // PROPRIETES (données caractéristiques de l'objet bug)
       x: random(windowWidth), // abscisse
       y: random(windowHeight), // ordonnée
       diameter: random(10, 30), // diamètre aléatoire entre 10 et 30


       // METHODES (fonctions qui s'appliquent à l'objet bug)
       // méthode move : déplace aléatoirement les coordonnées du bug
       move: function () {
           // modification aléatoire de l'abscisse en fct de speed
           bug.x += random(-speed, speed);
           // modification aléatoire de l'ordonnée en fct de speed
           bug.y += random(-speed, speed);
       },


       // méthode display : affiche un bug
       display: function () {
           // représentation graphique du bug par un disque
           circle(bug.x, bug.y, bug.diameter);
       }
   }; // fin de la déclaration d'un objet bug


   return bug; // la fonction renvoie l’objet bug créé
}


function setup() {
   createCanvas(windowWidth, windowHeight);
   // Créations des objets (les  bugs). 50 par défaut
   for (let i = 0; i < N; i++) {
       // on fabrique un bug
       let bug = createOneBug();
       // ajout de l'objet bug dans le tableau global bugs
       bugs.push(bug);
   }
}


function draw() {
   background(50, 89, 100);
   for (let i = 0; i < bugs.length; i++) {
       let iemeBug = bugs[i];
       iemeBug.move(); // modification de la position
       iemeBug.display(); // affichage
   }
}