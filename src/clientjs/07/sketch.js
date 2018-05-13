const MIN_STEPS = 3;
const MAX_STEPS = 24;
const DEFAULT_MOVES = {
  x: 0,
  y: 0,
};
let walker;

const generateRandom = (x = 1) => round(random(x * -1000, x * 1000) / 1000);

class Walker {
  constructor() {
    this.moves = DEFAULT_MOVES;
    this.steps = random(MIN_STEPS, MAX_STEPS);
    this.counter = 0;
    this.setRandom();
    this.x = width / 2;
    this.y = height / 2;
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
    if (lightness(color(...this.color)) > 50) {
      background('#000');
    }
  }
  getMoves() {
    return {
      x: random(0, mouseX < this.x ? -1 : 1),
      y: random(0, mouseY < this.y ? -1 : 1),
    };
  }
  setMoves(newMoves) {
    this.moves = newMoves;
  }
  setRandom() {
    this.random = {
      x: Math.min(1, Math.max(-1, generateRandom() + this.moves.x)),
      y: Math.min(Math.max(-1, generateRandom() + this.moves.y)),
      color: [
        generateRandom(random(0, 100)),
        generateRandom(random(0, 100)),
        generateRandom(random(0, 100)),
      ],
      steps: random(MIN_STEPS, MAX_STEPS),
    };
  }
  getColor() {
    return [
      this.color[0] + this.random.color[0],
      this.color[1] + this.random.color[1],
      this.color[2] + this.random.color[2],
    ];
  }
  render() {
    const strokeColor = color(...this.getColor());
    stroke(strokeColor);
    point(this.x, this.y);
  }
  step() {
    this.x = constrain(this.x + this.random.x, 0, width - 1);
    this.y = constrain(this.y + this.random.y, 0, height - 1);
    this.counter += 1;
    if (this.counter >= this.steps) {
      this.counter = 0;
      this.setRandom();
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enableMenu();
  frameRate(60);
  walker = new Walker();
}

function draw() {
  walker.setMoves(walker.getMoves());
  walker.step();
  walker.render();
}
