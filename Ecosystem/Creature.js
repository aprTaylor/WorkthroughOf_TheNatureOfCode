class Creature{
    constructor(location, world, velcoityLimit = 5){
        this.location = location;
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.velcoityLimit = velcoityLimit;
        this.world = world;
    }

    animate(){
        this.acceleration = createVector(0.05, 0);
    }

    update() {
        this.animate();
    
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        this.velocity.limit(this.velcoityLimit);
      }

    display() {
        stroke(0);
        fill(175);
        ellipse(this.location.x,this.location.y,16,16);
      }

    checkEdges() {
        if (this.location.x > width) {
          this.location.x = width;
        } else if (this.location.x < 0) {
          this.location.x = 0;
        }
     
        if (this.location.y > height) {
          this.location.y = height;
        } else if (this.location.y < 0) {
          this.location.y = 0;
        }
      }
}

class FlyingCreature extends Creature {
  checkEdges() {
    if (this.location.x > width || this.location.x < 0) {
      this.velocity.x *= -1;
    }
    /*
    if(this.location.y == this.world.land && !this.stop){
      this.stop = true;
      this.timer.land = setTimeout(function(){this.stop = false}, this.TIME_LAND);
    }
    else*/ 
    if (this.location.y > this.world.land.y|| this.location.y < 0) {
      this.velocity.y *= -1;
    }
  }
}

class Fly extends FlyingCreature{
    constructor(location, world, velcoityLimit){
      super(location, world, velcoityLimit);
      this.TIMER_LAND = 1000;
      this.timer= {land: undefined};
      this.stop = false;
    }
    animate(){
      if(!this.stop){
        this.acceleration = p5.Vector.random2D();
        this.acceleration.setMag(0.5);
      }
      else
        this.acceleration = createVector(0, 0);
        
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
    this.acceleration.setMag(0.5);
  }
  animate(){
    if(this.dip){
      this.dip = false;
    }
    else
    this.acceleration = createVector(0, 0);
    //this.setAcc();
    /*
    this.acceleration = createVector(0.005, 0.02);
    this.acceleration.y *= this.dip?1:-1;
    this.frames--;
    if(this.frames < 0){
      this.frames = 10;
      this.dip = !this.dip;
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