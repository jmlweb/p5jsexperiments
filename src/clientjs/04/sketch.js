const BG = '#047';
const INTERVAL = 5;
const FX_SIZE = 600;
let counter = 0;
let drops = [];

const createDrop = () => {
  const COLORS = [
    color(45, 224, 209),
    color(55, 234, 219),
    color(65, 244, 229),
    color(75, 254, 239),
    color(85, 255, 249),
  ];
  const speed = random(8, 16) / 10;
  return {
    color: COLORS[parseInt(random(0, COLORS.length - 1), 10)],
    x: random(0, width),
    y: 0,
    yStart: counter * speed,
    width: random(2, 4),
    height: random(5, 12),
    speed,
  };
};

const addDropIfNeeded = () => (counter % INTERVAL === 0 ? [...drops, createDrop(counter)] : drops);

function setup() {
  createDefaultCanvas();
  frameRate(60);
}

function draw() {
  background(BG);
  noStroke();
  drops = addDropIfNeeded().map(drop => ({ ...drop, y: drop.y + 1 }));

  drops.forEach(drop => {
    const y = drop.y - drop.yStart + counter * drop.speed;
    if (drop.color) {
      fill(drop.color);
    }
    rect(drop.x, y, drop.width, drop.height, 0, 0, 15, 15);
  });
  fill(`rgba(255, 255, 255, ${random(0, 0.1)})`);
  if (mouseIsPressed) {
    scale(random(10, 50));
    rect(0 - FX_SIZE / 2, 0 - FX_SIZE / 2, FX_SIZE, FX_SIZE, FX_SIZE / 4);
  }
  counter += 1;
}

function windowResized() {
  defaultResizeAction();
}
