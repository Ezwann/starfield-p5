var stars;
var zSlider;
var text;

function Star() {
    this.pos = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2), width);

    this.update = function() {
        this.pos.z -= zSlider.value();
    }
    this.show = function() {
        fill(this.color);
        noStroke();
        this.sx = map(this.pos.x / this.pos.z, 0, 1, 0, width);
        this.sy = map(this.pos.y / this.pos.z, 0, 1, 0, height * 2);
        ellipse(this.sx, this.sy, 2);
    }

    this.color = color(random(1, 255), random(1, 255), random(1, 255));
}

function setup() {
    createCanvas(windowWidth * 0.97, windowHeight * 0.97, '3D');
    createSpan("Z increment control : ");
    zSlider = createSlider(1, 20, 1, 1);
    text = createSpan(floor(frameRate()));
    stars = new Array(800);
    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    translate(width / 2, height / 2);
    background(0);
    text.html(floor(frameRate()))
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
        if (abs(stars[i].sx) > width / 2 || abs(stars[i].sy) > height / 2) {
            stars[i] = new Star();
        }
    }
}
