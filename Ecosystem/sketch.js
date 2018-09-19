let creatures;
let world;

function setup() {
	createCanvas(windowWidth, windowHeight);

	world = {
		land: {y: height-100, x: 0, height: 100, width: width, color: color(34,139,34)}  	
	}

	creatures = [/*new Bird(createVector(100, 100), world)*/new Fly(createVector(150, 100), world)];
}

function draw() {
	background(color(135, 206, 235));
	fill(world.land.color);
	noStroke();
	rect(world.land.x, world.land.y, world.land.width, world.land.height);

	creatures.forEach(creature => {
		creature.update();
		creature.checkEdges();
		creature.display();
	});
}