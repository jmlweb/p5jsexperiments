const MIN_STEPS = 1;
const MAX_STEPS = 100;
let walker;

const generateRandom = (x = 1) => round(random(x * -1000, x * 1000) / 1000);

class Walker {
  constructor() {
    this.coords = {
      x: width / 2,
      y: height / 2,
    };
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
    if (lightness(color(...this.color)) > 50) {
      background('#000');
    }
  }
  setNewCoords() {
    const generateMoveCoord = currentCoordValue => {
      const newDirection = Array.from({ length: 3 }).map(() => random([-1, 0, 1]));
      return currentCoordValue + random(newDirection) * random(MIN_STEPS, MAX_STEPS);
    };
    const { x, y } = this.coords;
    this.newCoords = {
      x: constrain(generateMoveCoord(x), 0, width - 1),
      y: constrain(generateMoveCoord(y), 0, height - 1),
    };
  }
  setColor() {
    const randomColor = Array.from({ length: 3 }).map(() => generateRandom(random(0, 20)));
    this.color = this.color.map((v, k) => constrain(v + randomColor[k], 10, 245));
  }
  setCurrentCoords() {
    this.coords = this.newCoords;
  }
  render() {
    const strokeColor = color(this.color);
    stroke(strokeColor);
    strokeWeight(random([1, 1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 10, 15, 15]));
    line(this.coords.x, this.coords.y, this.newCoords.x, this.newCoords.y);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enableMenu();
  frameRate(60);
  walker = new Walker();
}

function draw() {
  walker.setColor();
  walker.setNewCoords();
  walker.render();
  walker.setCurrentCoords();
}
