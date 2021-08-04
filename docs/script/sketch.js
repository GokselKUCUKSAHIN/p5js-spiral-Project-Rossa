const width = 600;
const height = width;
const R = width * 0.45;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  background(51);
  fill(240);
  noStroke();
  ellipse(0, 0, 10, 10);
  noLoop();
}

function draw() {
  translate(width * 0.5, height * 0.5);
  ellipse(0, 0, 10, 10);
  background(51);
  drawSpiral(vueInstance.fraction, vueInstance.numberOfPoints, vueInstance.dotsize, R);
}

function drawBall(x, y, size) {
  ellipse(x, y, size);
}

function drawSpiral(fraction, numberOfPoints, dotsize, radius) {
  for (let i = 0; i < numberOfPoints; i++) {
    const dist = i / (numberOfPoints - 1);
    const angle = TWO_PI * fraction * i;
    const x = dist * cos(angle) * radius;
    const y = dist * sin(angle) * radius;
    drawBall(x, y, dotsize);
  }
}

function p5redraw() {
  redraw();
}