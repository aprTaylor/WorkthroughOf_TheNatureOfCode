let mover;
 
function setup() {
	createCanvas(640,360);

	//Create Mover object.
	mover = new Mover();
}
 
function draw() {
	  background(255);
 
    //Call functions on Mover object.
    mover.update();
	  mover.checkEdges();
    mover.display();
}
 
class Mover {
	/**
   *Our object has two PVectors: location and velocity.
   * @memberof Mover
   */
  constructor() {
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0)
    this.off = createVector(0, 0); 
  }
 
  update() {
    this.acceleration = createVector(noise(this.off.x), noise(this.off.y));

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(5);

    this.off.add(createVector(0.1, 0.01));
  }
 
  display() {
    stroke(0);
    fill(175);
    ellipse(this.location.x,this.location.y,16,16);
  }
 
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }
 
    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}