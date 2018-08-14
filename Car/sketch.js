let car;
function setup() {
	createCanvas(windowWidth, windowHeight);
	car = new Car();

}

function draw() {
	background(255);

	car.toNormSpeed()

	car.update();
	car.checkEdges();
	car.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  car.acc();
	} else if (keyCode === DOWN_ARROW) {
	  car.decc();
	}
}

class Car{
	constructor(){
		this.location = createVector(10, 10);
		this.velocity = createVector(2, 0);
		this.acceleration = createVector(0,0);
		this.topSpeed = 10;
		this.width = 100;
		this.height = 50;
	}

	toNormSpeed(){
		if(!keyIsPressed){
			this.acceleration = createVector(0, 0);
		}
	}

	acc(limit = this.topSpeed){
		if(this.velocity.x < limit)
			this.acceleration.add(createVector(.1, 0));
	}

	decc(limit = 0){
		if(this.velocity.x > limit)
			this.acceleration.sub(createVector(.1, 0));
	}

	update() {
		this.velocity.add(this.acceleration);
		this.velocity.limit(this.topSpeed);
		if(this.velocity.x < 0)
			this.velocity.x = 0;
		this.location.add(this.velocity);
	}

	display() {
		stroke(0);
		fill(174);
		rect(this.location.x, this.location.y, this.width, this.height);
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