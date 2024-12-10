//1)
/*
function miroir(image, x, y) {
  let pHaut = getPixel(image, x, y);
  let pBas = getPixel(image, x, image.height - y - 1);
  setPixel(image, x, y, pBas);
  setPixel(image, x, image.height - y - 1, pHaut);
}

let img;

function preload() {
  img = loadImage("bonjour.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (var y = 0; y < img.height / 2; y++) {
    for (var x = 0; x < img.width; x++) {
      miroir(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//2)
/*
function miroir(image, x, y) {
  let pGauche = getPixel(image, x, y);
  let pDroite = getPixel(image, image.width - x - 1, y);
  setPixel(image, x, y, pDroite);
  setPixel(image, image.width - x - 1, y, pGauche);
}

let img;

function preload() {
  img = loadImage("bonjour.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width / 2; x++) {
      miroir(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//3)
/*
function miroirH(image, x, y) {
  let pGauche = getPixel(image, x, y);
  setPixel(image, image.width - x - 1, y, pGauche);
}

let img;

function preload() {
  img = loadImage("bonjour.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width / 2; x++) {
      miroirH(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/
//4)
/*
function miroirV(image, x, y) {
    let pBas = getPixel(image, x, image.height - y - 1);
    setPixel(image, x, y, pBas);
}

let img;

function preload() {
    img = loadImage("bonjour.png");
}

function setup() {
    createCanvas(img.width, img.height);
    img.loadPixels();
    for (var y = 0; y < img.height / 2; y++) {
        for (var x = 0; x < img.width; x++) {
            miroirV(img, x, y);
        }
    }
    img.updatePixels();
    image(img, 0, 0);
}
*/

//5)


let img;

function preload() {
  img = loadImage("bonjour.png");
}

function setup() {
  createCanvas(img.width, img.height);
  img.loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width/2; x++) {
      let p = getPixel(img, x, y);
      setPixel(img, img.width-x-1, y, p);
    }
  }
  for (var y = 0; y < img.height/2; y++) {
    for (var x = 0; x < img.width; x++) {
      let p = getPixel(img, x, y);
      setPixel(img, x, img.height-y-1, p);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
