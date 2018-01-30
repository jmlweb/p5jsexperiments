let maxCounter = 1;
let isReversed = false;
let availableHeight;

const getFillByHeight = i => i * (255 / availableHeight);

function setup() {
  createDefaultCanvas();
  frameRate(30);
  availableHeight = getAvailableHeight();
}

function draw() {
  noStroke();
  background(255 - maxCounter / 100);
  const rand = random(-5, 5);
  for (let i = 0; i < maxCounter; i += 1) {
    fill(126, 102, 255 - getFillByHeight(i), i * 5 - maxCounter + rand);
    rect(mouseX + i - 15 - rand, mouseY + i - 15 - rand, 15 + i + rand, 15 + i + rand, i / 5);
    rotate(i * 15);
  }
  if (isReversed) {
    maxCounter -= 1;
  } else {
    maxCounter += 1;
  }
  if (maxCounter > availableHeight) {
    isReversed = true;
  } else if (maxCounter < 0) {
    isReversed = false;
  }
}

function windowResized() {
  defaultResizeAction();
  availableHeight = getAvailableHeight();
}
