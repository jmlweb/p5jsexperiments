const INTERVAL = 5;
let counter = 0;
const drops = [];

const createDrop = () => {
  const speed = random(8, 16) / 10;
  return {
    x: random(0, width),
    y: 0,
    yStart: counter * speed,
    width: random(2, 4),
    height: random(5, 12),
    speed,
  }
};

function setup() {
  createDefaultCanvas();
  frameRate(60);
}

function draw() {
  background(9, 62, 155);
  drops.forEach(drop => ({ ...drop, y: drop.y + 1 }));
  if (counter % INTERVAL === 0) {
    drops.push(createDrop(counter));
  }
  noStroke();
  fill(65, 244, 229);
  drops.forEach(drop => {
    return rect(drop.x, drop.y - drop.yStart + counter * drop.speed, drop.width, drop.height);
  });
  counter += 1;
}

function windowResized() {
  defaultResizeAction();
}