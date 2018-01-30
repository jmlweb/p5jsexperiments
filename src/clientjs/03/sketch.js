let counter = 0;

function setup() {
  createDefaultCanvas();
  frameRate(60);
}

function draw() {
  stroke(random(117, 137), random(202, 212), 150 + counter / 10, counter);
  line(0 + random(0, 15), height - counter, width, 0 + counter + random(0, 15));
  stroke(random(117, 137), random(202, 212), 150 + counter / 10, counter);
  line(0 + random(0, 15), 0 + counter, width, height - counter + random(0, 15));
  counter += 1;
  translate(counter, counter);
  arc(10, 10);
}

function windowResized() {
  defaultResizeAction();
}