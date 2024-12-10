//a)

/*function setup() {
    createCanvas(windowWidth, windowHeight);
    fill("red");
    beginShape();
    stroke("blue");
    vertex(30, 20);
    vertex(85, 20);
    vertex(85, 75);
    endShape(CLOSE);
}*/

//b)

/*function setup(){
    createCanvas(windowWidth, windowHeight);
    drawGrid(20);
    fill("red");
    beginShape();
    stroke("blue");
    strokeWeight(2);
    vertex(50, 25);
    vertex(60, 45);
    vertex(80, 45);
    vertex(65, 55);
    vertex(70, 75);
    vertex(50, 65);
    vertex(30, 75);
    vertex(35, 55);
    vertex(20, 45);
    vertex(40, 45);

    endShape(CLOSE);
}*/


//c)

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(230);
    stroke(0); noFill();
    beginShape();
    let precision = map(mouseX, 0, windowWidth, 1, 50);
    let y = map(mouseY, 0, windowHeight, 0, height); 
    for (let x = 0; x <= width + precision; x += precision) {
        y = height - y;
        vertex(x, y);
    }
    endShape(); // Attention à ne pas utiliser CLOSE ici
 }
 


 //grid
function drawGrid(delta) {
    noFill();
    stroke(100, 100, 100);
    textSize(10);
    for (let x = 0; x <= width; x += delta) {
        for (let y = 0; y <= height; y += delta) {
            line(x, 0, x, height);
            line(0, y, width, y);
            if (y == 0) text(x, x + 1, y + 10);
            if (x == 0) text(y, x + 1, y - 1);
        }
    }
 }