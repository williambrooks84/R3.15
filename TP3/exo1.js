//0)
// 255 255 0 255 - 0 0 255 255 - 255 0 0 255 - 0 255 0 255 - 255 255 0 255 - 0 0 255 255

//1)

// Que fait cette fonction ? 
//Elle dessine un carré avec des pixels jaunes en remplissage. Modifie les valeurs RGBA pour un pixel en position (x, y) dans l'image.

/*
function writeColor(image, x, y, red, green, blue) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = 255;
 }
 
 
 function setup() {
    let img = createImage(100, 100);
    // Que fait cette fonction ?
    // Charger les pixels de l'image (si on veut les modifier ensuite)
    img.loadPixels();
    createCanvas(100, 100);
 
 
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            writeColor(img, x, y, 255, 0, 0); 
        }
    }
    // Que fait cette fonction ?
    // Met à jour les pixels de l'image (si on veut l'afficher ensuite)
    img.updatePixels();
    //Affichage de l'image
    image(img, 0, 0);
 }
*/

//5)
//Pays Bas
/*
function writeColor(image, x, y, red, green, blue) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = 255;
 }
 
 
 function setup() {
    let img = createImage(100, 100);
    // Que fait cette fonction ?
    // Charger les pixels de l'image (si on veut les modifier ensuite)
    img.loadPixels();
    createCanvas(100, 100);
 
 
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            if (y < img.height / 3) {
                writeColor(img, x, y, 255, 0, 0);
            }
            else if (y < img.height * 2 / 3) {
                writeColor(img, x, y, 255, 255, 255);
            }
            else {
                writeColor(img, x, y, 0, 0, 255);
            }
        }
    }
    // Que fait cette fonction ?
    // Met à jour les pixels de l'image (si on veut l'afficher ensuite)
    img.updatePixels();
    //Affichage de l'image
    image(img, 0, 0);
 }
*/

//France

function writeColor(image, x, y, red, green, blue) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = 255;
 }
 
 
 function setup() {
    let img = createImage(100, 100);
    // Que fait cette fonction ?
    // Charger les pixels de l'image (si on veut les modifier ensuite)
    img.loadPixels();
    createCanvas(100, 100);
 
 
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            if (x < img.width / 3) {
                writeColor(img, x, y, 0, 0, 255);
            }
            else if (x < img.width * 2 / 3) {
                writeColor(img, x, y, 255, 255, 255);
            }
            else {
                writeColor(img, x, y, 255, 0, 0);
            }
        }
    }
    // Que fait cette fonction ?
    // Met à jour les pixels de l'image (si on veut l'afficher ensuite)
    img.updatePixels();
    //Affichage de l'image
    image(img, 0, 0);
 }


