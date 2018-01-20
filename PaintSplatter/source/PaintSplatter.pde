
Paint dot;
void setup(){
  size(400, 300);
  
  dot = new Paint(random(width-10), random(height-10), 20);
}

void draw() {
 
  dot.drawPoint();
}