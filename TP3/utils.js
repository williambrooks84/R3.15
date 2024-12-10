function getPixel(image, x, y) {
    let index = (x + y * image.width) * 4;
    return {
        r: image.pixels[index],
        g: image.pixels[index + 1],
        b: image.pixels[index + 2]
    };
}

function setPixel(image, x, y, p) {
    let index = (x + y * image.width) * 4;
    image.pixels[index] = p.r;
    image.pixels[index + 1] = p.g;
    image.pixels[index + 2] = p.b;
    image.pixels[index + 3] = 255;
}