
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


let f = new LinearFunction(0,0)

let A = new Point(new Vector2d(x1,y1),20,"nibba","1",true);
let B = new Point(new Vector2d(x2,y2),20,"nibba","2",true);

function animate(){
  requestAnimationFrame(animate);


  context.clearRect(0,0,width,height);
  f.defineLineWithTwoPoints(A,B);
      A.draw(context); B.draw(context);
      C.draw(context); D.draw(context);


}

animate();