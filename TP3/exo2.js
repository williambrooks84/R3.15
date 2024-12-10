//1)
/*
function keepRed(image, x, y) {
  let index = (x + y * image.width) * 4;
  image.pixels[index + 1] = 0;
  image.pixels[index + 2] = 0;
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
        keepRed(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/

//2)
/*
function inverseRGB(image, x, y) {
  let index = (x + y * image.width) * 4;
  let r = image.pixels[index];
  image.pixels[index] = image.pixels[index + 1];
  image.pixels[index + 1] = image.pixels[index + 2];
  image.pixels[index + 2] = r;
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
      inverseRGB(img, x, y);
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
*/


//3)

function keepRed(image, x, y) {
    let index = (x + y * image.width) * 4;
    image.pixels[index + 1] = 0;
    image.pixels[index + 2] = 0;
}

function keepGreen(image, x, y) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = 0;
    image.pixels[index + 2] = 0;
}

function keepBlue(image, x, y) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = 0;
    image.pixels[index + 1] = 0;
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
        if (x < img.width / 3) {
            keepRed(img, x, y);
        }
        else if (x < img.width * 2 / 3) {
            keepGreen(img, x, y);
        }
        else {
            keepBlue(img, x, y);
        }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
