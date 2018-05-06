let squares;
let squareSize;

function buildSquare(v, k) {
  const position = {
    x: k % 3,
    y: int(k / 3),
  };
  return {
    text: k + 1,
    posX: position.x,
    posY: position.y,
    x: position.x * squareSize.x,
    y: position.y * squareSize.y,
    color: color([random(0, 255), random(0, 255), random(0, 255)]),
  };
}

function setup() {
  createDefaultCanvas();
  squareSize = {
    x: width / 3,
    y: height / 3,
  };
  squares = Array.from({ length: 9 }).map(buildSquare);
}

function isEnabled(v) {
  function coordEnabled(mouseCoord, coordKey) {
    return mouseCoord >= v[coordKey] && mouseCoord <= v[coordKey] + squareSize[coordKey];
  }
  if (coordEnabled(mouseX, 'x') && coordEnabled(mouseY, 'y')) {
    return true;
  }
  return false;
}

function draw() {
  squares.forEach(v => {
    if (isEnabled(v)) {
      fill(v.color);
    } else {
      fill('#ffffff');
    }
    return rect(v.x, v.y, squareSize.x, squareSize.y);
  });
}
