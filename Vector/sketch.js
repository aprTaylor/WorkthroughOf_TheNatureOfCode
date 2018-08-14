/* jslint esversion: 6 */
class Mover {
  constructor(location, velocity){
    this.velocity = velocity;
    this.location = location;
  }

  move(){
    this.location.add(this.velocity); 
    if ((this.location.x > width) || (this.location.x < 0)) {
      this.velocity.x = this.velocity.x * -1;
    }
    if ((this.location.y > height) || (this.location.y < 0)) { 
      this.velocity.y = this.velocity.y * -1; 
    }
  }
}
let ball;
function setup() {
  createCanvas(720, 400);

  ball = new Mover(createVector(100,100), createVector(2.5,5));
}


function draw() {
  background(255);

  ball.move();

  stroke(0);
  fill(175);
  ellipse(ball.location.x,ball.location.y,16,16);
  
}
