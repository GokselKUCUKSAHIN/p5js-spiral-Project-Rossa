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
}