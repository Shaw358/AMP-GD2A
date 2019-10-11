
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let grid = new Grid();

let A = new Point(new Vector2d(200,200), 15, "red", "A", true);
let B = new Point(new Vector2d(300,200), 15, "green", "B", true);
let C = new Point(new Vector2d(400,200), 15, "blue", "C", true);
let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0, width, height);
  grid.draw(context);
  A.draw(context);
  B.draw(context);
  l.defineLineWithTwoPoints(A,B);
  m.slope = -1/l.slope;
  m.intercept = C.position.dy - m.slope * C.position.dx;

  l.draw(context);
  m.draw(context);
  C.draw(context);
}

animate();