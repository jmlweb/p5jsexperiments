const MIN_STEPS = 3;
const MAX_STEPS = 24;
const DEFAULT_MOVES = {
  x: 0,
  y: 0,
};
let walker;
let squares;

const getSquareSize = () => ({
  x: width / 3,
  y: height / 3,
});

const generateRandom = (x = 1) => round(random(x * -1000, x * 1000) / 1000);

class Squares {
  constructor() {
    this.reload();
  }
  coordEnabled(v, mouseCoord, coordKey) {
    return (
      mouseCoord >= v[`${coordKey}`] &&
      mouseCoord <= v[`${coordKey}`] + this.squareSize[`${coordKey}`]
    );
  }
  isEnabled(v) {
    if (this.coordEnabled(v, mouseX, 'x') && this.coordEnabled(v, mouseY, 'y')) {
      return true;
    }
    return false;
  }
  reload() {
    this.squareSize = getSquareSize();
    this.squares = Array.from({ length: 9 }).map((v, k) => ({
      x: (k % 3) * this.squareSize.x,
      y: int(k / 3) * this.squareSize.y,
      moves: {
        x: k % 3 - 1,
        y: int(k / 3) - 1,
      },
    }));
  }
  getMoves() {
    const filteredSquare = this.squares.filter(v => this.isEnabled(v));
    return filteredSquare[0] ? filteredSquare[0].moves : null;
  }
  render() {
    this.squares.forEach(v => {
      if (this.isEnabled(v)) {
        fill('#f0f0f0');
      } else {
        fill('#ffffff');
      }
      return rect(v.x, v.y, this.squareSize.x, this.squareSize.y);
    });
  }
}

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
  squares = new Squares();
  walker = new Walker();
}

function draw() {
  walker.setMoves(squares.getMoves());
  walker.step();
  walker.render();
}
