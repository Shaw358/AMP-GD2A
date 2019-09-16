const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerHeight;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let balls = [];
let maxPoints = 10;

for(let i=0; i<maxPoints; i++){
    let  ball = new Point(new Vector2d(getRandomNumber(50, width),getRandomNumber(50, height)),100,"red");
    balls.push(ball);
    
}
    


window.addEventListener('click',(evt)=>{
let mouseVector = new Vector2d(evt.clientX,evt.clientY);
console.log(evt.clientX,evt.clientY);
let differenceMousePoint = new Vector2d(0,0);

console.log(mouseVector);

differenceMousePoint.differenceVector(balls.position,mouseVector);
console.log(differenceMousePoint);

console.log(differenceMousePoint.magnitude);

if(differenceMousePoint.magnitude<100){
    A.color = "black";
    A.draw(context);
}
});

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function animate(){
      requestAnimationFrame(animate);
      for(let i=0; i<balls.length; i++){
          balls[i].draw(context);
          
      }
  }
  animate();

  window.addEventListener('click', (evt)=>{
    let mouseVector = new Vector2d(evt.clientX,evt.clientY);
    for(let i=0; i < balls.length; i++){
      let distanceMouseBall = new Vector2d(0,0);
      distanceMouseBall.differenceVector(mouseVector,balls[i].position)
      if(distanceMouseBall.magnitude < 20){
        balls[i].color = "pink";
      }
    }
  })