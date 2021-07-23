class Creature{
  constructor(location, world, velocityLimit = 5){
    this.location = location;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.velocityLimit = velocityLimit;
    this.world = world;
    this.lastPrint = millis();
  }

  applyForce(force) {
    this.acceleration = force;
  }

  animate() {
    this.acceleration = createVector(0.05, 0);
  }

  update() {
    let timeElapsed = millis() - this.lastPrint;
    this.lastPrint = millis();
    this.animate(timeElapsed);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.velocityLimit);
    this.location.add(this.velocity);
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

class Rabbit extends Creature {
  constructor(location, world, velocityLimit = 5){
    super(location, world, velocityLimit);
    this.dir = createVector(1, -0.9);
  }

  animate(delta) {
    let accelVel = 1 * delta;
    if(this.velocity.y >= 3.3 || this.velocity.y <= -3.3) this.dir.y *= -1;
    this.acceleration = this.dir;

  }
}

class Fly extends Creature{
  constructor(location, world, velocityLimit = 5){
    super(location, world, velocityLimit);
    this.TIMER_LAND = 1000;
    this.timer= {land: undefined};
    this.stop = false;
  }
  animate() {
    if(!this.stop){
      this.acceleration = p5.Vector.random2D();
      this.acceleration.setMag(0.5);
    }
    else
      this.acceleration = createVector(0, 0);  
  }

  checkEdges() {
    super.checkEdges()
     
    if(this.location.y == this.world.land && this.timer.land > 0){
      this.stop = true;
      this.timer.land--;
      if(this.timer.land <= 0){
        this.timer = this.TIMER_LAND;
      }
    }
    else if (this.location.y > this.world.land.y|| this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }
}
class Bird extends FlyingCreature {
  constructor(location, world, velcoityLimit){
    super(location, world, velcoityLimit);
    this.flags = {birdDip: false, doBirdDipDown: true}
    this.birdDipHeight = 100;
    this.dipChance = 3;
    this.dip = true;
    this.frames = 200;
    this.setAcc();
  }
  setAcc(){
    this.acceleration = createVector(0.1, 0.1);
    this.acceleration.setMag(2);
  }
  animate(){
    //this.acceleration = createVector(0, 0);
    //this.setAcc();
    this.acceleration.y *= this.dip?1:-1;
    this.frames--;
    if(this.frames < 0){
      this.frames = 1000;
      this.dip = !this.dip;
      this.dir.y *= -1;
    }
    /*
    if(this.flags.birdDip){
      let dipMult =  this.flags.doBirdDipDown?1:-1; 
      this.acceleration = createVector(0, this.birdDipHeight*dipMult);
      this.flags.birdDip = this.doBirdDipDown;
      this.doBirdDipDown = !this.doBirdDipDown;
    }
    else {
      this.acceleration = p5.Vector.random2D();
      this.acceleration.setMag(0.5);
      this.flags.birdDip = random(this.dipChance) == this.dipChance;
    }*/
  }
}