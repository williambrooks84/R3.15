//1)
//Luminosité
/*
function changeLum(image, x, y, p) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] *= p;
  image.pixels[index + 1] *= p;
  image.pixels[index + 2] *= p;
}

let img;

function preload() {
  img = loadImage("pebbles.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      changeLum(img, x, y, 1.2);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//2) Changer contraste
/*
function changeContrast(image, x, y, p) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] += p*(image.pixels[index]-128);
  image.pixels[index + 1] += p*(image.pixels[index+1]-128);
  image.pixels[index + 2] += p*(image.pixels[index+2]-128);
}

let img;

function preload() {
  img = loadImage("pebbles.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      changeContrast(img, x, y, 1);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//3) gris
/*
function greyLevel(image, x, y) {
  let index = (x + y * image.width) * 4;
  let r = image.pixels[index];
  let g = image.pixels[index + 1];
  let b = image.pixels[index + 2];

  image.pixels[index] = 0.299*r + 0.587*g + 0.114*b;
  image.pixels[index+1] = 0.299*r + 0.587*g + 0.114*b;
  image.pixels[index+2] = 0.299*r + 0.587*g + 0.114*b;
}

let img;

function preload() {
  img = loadImage("pebbles.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      greyLevel(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//4) sepia
/*
function sepia(image, x, y) {
  let index = (x + y * image.width) * 4;
  let r = image.pixels[index];
  let g = image.pixels[index + 1];
  let b = image.pixels[index + 2];

  image.pixels[index] = r * 0.393 + g * 0.769 + b * 0.189;
  image.pixels[index + 1] = r * 0.349 + g * 0.686 + b * 0.168;
  image.pixels[index + 2] = r * 0.272 + g * 0.534 + b * 0.131;
}

let img;

function preload() {
  img = loadImage("pebbles.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      sepia(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//5)

// Fonction pour modifier la luminosité
function changeLum(image, x, y, p) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] *= p;
  image.pixels[index + 1] *= p;
  image.pixels[index + 2] *= p;
}

// Fonction pour modifier le contraste
function changeContrast(image, x, y, p) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] += p * (image.pixels[index] - 128);
  image.pixels[index + 1] += p * (image.pixels[index + 1] - 128);
  image.pixels[index + 2] += p * (image.pixels[index + 2] - 128);
}

let img, imgModif;

function preload() {
  img = loadImage("pebbles.png");
}

function setup() {
  imgModif = createImage(img.width, img.height);
  createCanvas(img.width, img.height);
  img.loadPixels();
}

function draw() {
  imgModif.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  imgModif.loadPixels();

  let modifLum = map(mouseX, 0, width, 0, 2)
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      changeLum(imgModif, x, y, modifLum);
    }
  }
  
  let mofifContrast = map(mouseY, 0, height, 0, 2)
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      changeContrast(imgModif, x, y, mofifContrast);
    }
  }

  imgModif.updatePixels();
  image(imgModif, 0, 0);
}
