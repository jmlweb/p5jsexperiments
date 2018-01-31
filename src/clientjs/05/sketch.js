let walker;

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  render() {
    point(this.x, this.y);
  }
  step() {
    this.x = this.x + round(random(-1000, 1000)) / 1000;
    this.y = this.y + round(random(-1000, 1000)) / 1000;
  }
}

function setup() {
  createDefaultCanvas();
  frameRate(60);
  walker = new Walker();
}

function draw() {
  stroke('#0066cc');
  walker.step();
  walker.render();
}

function windowResized() {
  defaultResizeAction();
}
