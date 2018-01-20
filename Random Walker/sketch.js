
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
    strokeWeight(4);
    stroke(random(this.color[0]), random(this.color[1] ), random(this.color[2]));
    point(this.x, this.y);

    this.updateColor();
  }

  step(right, up) {
    let r = random(1);

    if (r < right) {
      this.x += random(1, 4);
    } else if (r < .5) {
      this.x -= random(1, 4);
    } else if (r < up) {
      this.y += random(1, 4);
    } else {
      this.y -= random(1, 4);
    }

    //Bound
    this.y = constrain(this.y, 0, height - 1);
    this.x = constrain(this.x, 0, width - 1);
  }
}

let walker;
var rSlider, lSlider, uSlider;

function setup() {
  createCanvas(720, 400);
  background(127);

  rSlider = createSlider(0, 50, 25);
  rSlider.position(20, 20);
  uSlider = createSlider(50, 100, 75);
  uSlider.position(20, 60);

  text("Left/Right", rSlider.x * 2 + rSlider.width, 35);
  text("Up/Down", uSlider.x * 2 + uSlider.width, 65);

  walker = new Walker();

}


function draw() {
  walker.draw();
  walker.step((rSlider.value()/100), (uSlider.value()/100));
}
