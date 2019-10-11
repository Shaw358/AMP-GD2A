
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
let d = new Point(new Vector2d(200,200), 15, "black", "d", false);
let e = new Point(new Vector2d(300,200), 15, "black", "e", false);
let f = new Point(new Vector2d(400,200), 15, "black", "f", false);

let S = new Point(700,400,5,"white");

let l = new LinearFunction(0,0);
let m = new LinearFunction(0,0);
let n = new LinearFunction(0,0);
let o = new LinearFunction(0,0);
let p = new LinearFunction(0,0);
let q = new LinearFunction(0,0);

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0, width, height);
  grid.draw(context);
  A.draw(context);
  B.draw(context);
  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(B,C);
  n.defineLineWithTwoPoints(A,C);

  o.defineLineWithTwoPoints(B,f);
  p.defineLineWithTwoPoints(C,e);
  q.defineLineWithTwoPoints(A,d);


  d.position.dx = (B.position.dx + C.position.dx)/2;
  d.position.dy = (B.position.dy + C.position.dy)/2;

  e.position.dx = (A.position.dx + B.position.dx)/2;
  e.position.dy = (A.position.dy + B.position.dy)/2;

  f.position.dx = (C.position.dx + A.position.dx)/2;
  f.position.dy = (C.position.dy + A.position.dy)/2;
  //m.slope = -1/l.slope;
  //m.intercept = C.position.dy - m.slope * C.position.dx;
  
  S.position.dx = p.intersection(o).x;
  S.position.dy = p.intersection(o).y;
  console.log(p.intersection(o).x);
  console.log(p.intersection(o).y);
  S.draw(context);

  l.draw(context);
  m.draw(context);
  n.draw(context);
  C.draw(context);
  d.draw(context);
  e.draw(context);
  f.draw(context);
  o.draw(context);
  p.draw(context);
  q.draw(context);


  
}

animate();