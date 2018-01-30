const MAX_GRADES = 720;
const SLOW_FACTOR = 1;
const FAST_FACTOR = 2;

let grades = 0;
let isBacking = false;

function setup() {
  createDefaultCanvas();
  frameRate(60);
}

function draw() {
  background(127 + random(-1, 1));
  noStroke();
  for (let i = 0; i < height; i += 20) {
    // fill(155, 226, 15 + Math.abs(grades));
    fill(random(10, 255), random(127, 226), 115);

    rect(0, i + random(-2, 2), width + grades, 10);
    fill(255 - random(-3, 3));
    rect(i, -grades, 10, height + grades);
    rotate(grades / 180000);
  }
  if (grades > 100 || grades < -100) {
    if (isBacking) {
      grades -= SLOW_FACTOR;
    } else {
      grades += SLOW_FACTOR;
    }
  } else if (isBacking) {
    grades -= FAST_FACTOR;
  } else {
    grades += FAST_FACTOR;
  }
  if (grades > MAX_GRADES) {
    isBacking = true;
  }
  if (grades < MAX_GRADES * -1) {
    isBacking = false;
  }
}

function windowResized() {
  defaultResizeAction();
}
