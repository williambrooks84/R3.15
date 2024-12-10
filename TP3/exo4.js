//1)

/*
function seuil(image, x, y, s){
    let index = (x+y*image.width)*4;
    let r = image.pixels[index];
    let g = image.pixels[index + 1];
    let b = image.pixels[index + 2];
    let gray = 0.299*r + 0.587*g + 0.114*b;
    if (gray<s){
        image.pixels[index] = 0;
        image.pixels[index + 1] = 0;
        image.pixels[index + 2] = 0;
    } else {
        image.pixels[index] = 255;
        image.pixels[index + 1] = 255;
        image.pixels[index + 2] = 255;
    }
  
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

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            seuil(imgModif, x, y, map(mouseX, 0, img.width, 0, 255));
        }
    }
    imgModif.updatePixels();
    image(imgModif, 0, 0);
}
*/

//2)
function seuil(image, x, y, s) {
  let index = (x + y * image.width) * 4;
  image.pixels[index] = image.pixels[index] < s ? 0 : 255;
  image.pixels[index + 1] = image.pixels[index + 1] < s ? 0 : 255;
  image.pixels[index + 2] = image.pixels[index + 2] < s ? 0 : 255;
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

  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      seuil(imgModif, x, y, map(mouseX, 0, img.width, 0, 255));
    }
  }
  imgModif.updatePixels();
  image(imgModif, 0, 0);
}
