function setup() {
  createDefaultCanvas();
}

function draw() {
  if (mouseIsPressed) {
    const style =
      Math.random() >= 0.5
        ? {
          fill: getRandomValue(3),
          size: 30 - getRandomValue(2),
        }
        : {
          fill: 255 - getRandomValue(),
          size: 80 - getRandomValue(3),
        };
    fill(style.fill);
    ellipse(mouseX, mouseY, style.size, style.size);
  }
}

function windowResized() {
  defaultResizeAction();
}
