
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;
let x1 = 600;
let x2 = 500;
let y1 = 200;
let y2 = 300;
let z1 = 900;
let z2 = 600;
let o1 = 700;
let o2 = 800;

let f = new LinearFunction(0,0)

let A = new Point(new Vector2d(x1,y1),20,"nibba","1",true);
let B = new Point(new Vector2d(x2,y2),20,"nibba","2",true);
let C = new Point(new Vector2d(z1,z1),20,"nibba","3",true);
let D = new Point(new Vector2d(o2,o2),20,"nibba","4",true);
let l = new LinearFunction(1,1);
let m = new LinearFunction(1,1);

function animate(){
  requestAnimationFrame(animate);


  context.clearRect(0,0,width,height);
  l.defineLineWithTwoPoints(A,B);
  m.defineLineWithTwoPoints(C,D);
  A.draw(context); B.draw(context); C.draw(context); D.draw(context);
  l.draw(context); m.draw(context);
}

animate();