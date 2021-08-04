const width = 600;
const height = 600;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  background(51);
  fill(255, 0, 0);
  noStroke();
  ellipse(300, 300, 10, 10);
  noLoop();
}

function draw() {
  drawRandomBall();
}

function drawBall(x, y) {
  ellipse(x, y, 5, 5);
}

function drawRandomBall() {
  const x = Math.random() * 600;
  const y = Math.random() * 600;
  drawBall(x, y);
}

function p5redraw(fraction, wingcount, dotsize) {
  console.log(fraction, wingcount, dotsize);
  redraw();
}