
class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.color = [
      random(255),
      random(255),
      random(255)
    ]
  }

  //Adds a value
  updateColor() {
    this.color[Math.floor(random(1, 4))] += random(-5, 5);
  }

  draw() {
    strokeWeight(1);
    stroke(random(this.color[0]), random(this.color[1] ), random(this.color[2]));
    point(this.x, this.y);

    this.updateColor();
  }

  step() {
    let stepsize = this.getStepSize();

    let stepx = random(-stepsize,stepsize);
    let stepy = random(-stepsize,stepsize);

    this.x += stepx;
    this.y += stepy;
    //Bound
    this.y = constrain(this.y, 0, height - 1);
    this.x = constrain(this.x, 0, width - 1);
  }

  getStepSize() {
    while (true) {
      // Pick a random value.
      let r1 = random(0, 10);
      // Assign a probability.
      let probability = r1*r1;
      // Pick a second random value.
      let r2 = random(0, 10);

      //Does it qualify?  If so, we’re done!
      if (r2 < probability) {
        return r1;
      }
    }
  }
}

let walker;

function setup() {
  createCanvas(720, 400);
  background(127);

  walker = new Walker();

}


function draw() {
  walker.draw();
  walker.step();
}
