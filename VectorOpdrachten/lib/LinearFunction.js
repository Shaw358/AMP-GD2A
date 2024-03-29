class LinearFunction{
    constructor(slope,intercept){
      this.slope = slope;
      this.intercept = intercept;
  
    }
  
    y(x)
    {
      return x * this.slope + this.intercept;
    }
  
    defineLineWithTwoPoints(A,B){
      this.slope = (B.position.dy-A.position.dy)/(B.position.dx-A.position.dx);
      this.intercept = A.position.dy - A.position.dx * this.slope;
  
    }

    draw(context){
      context.beginPath();
      context.moveTo(0, this.y(0));
      context.lineTo(width, this.y(width));
      context.closePath();
      context.stroke();
    }

    intersection(m){
      let ans = {};
      ans.x = (this.intercept - m.intercept)/(m.slope - this.slope);
      ans.y = this.slope * ans.x + this.intercept;
      return ans;
    }
  
  }