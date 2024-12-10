let cRef;

function almostGreen(image, x, y, s) {
  let index = (x + y * image.width) * 4;
  let r = image.pixels[index];
  let g = image.pixels[index + 1];
  let b = image.pixels[index + 2];
  let color = createVector(r, g, b);
  let dist = p5.Vector.dist(cRef, color);
  return dist < s;
}

function replace(srcImage, destImage, x, y) {
  let index = (x + y * srcImage.width) * 4;
  destImage.pixels[index] = srcImage.pixels[index];
  destImage.pixels[index + 1] = srcImage.pixels[index + 1];
  destImage.pixels[index + 2] = srcImage.pixels[index + 2];
  destImage.pixels[index + 3] = srcImage.pixels[index + 3];
}

let img, imgbg;

function preload() {
  img = loadImage("jcvd.png");
  imgbg = loadImage("pebbles.png");
}

function setup() {
  cRef = createVector(74, 160, 59);
  createCanvas(img.width, img.height);
  img.loadPixels();
  imgbg.loadPixels();
  for (var y = 0; y < img.height; y++) {
    for (var x = 0; x < img.width; x++) {
      if (almostGreen(img, x, y, 50)) {
        replace(imgbg, img, x, y);
      }
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
