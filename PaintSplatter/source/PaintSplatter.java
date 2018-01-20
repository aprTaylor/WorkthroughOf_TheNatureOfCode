import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.Random; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class PaintSplatter extends PApplet {


Paint dot;
public void setup(){
  
  
  dot = new Paint(random(width-10), random(height-10), 20);
}

public void draw() {
 
  dot.drawPoint();
}
public class Colors {
  private int r, g, b;
  private int baseR, baseG, baseB, dev;
  private Guass guass;
  
  Colors(int baseR, int baseG, int baseB, int dev) {
    guass = new Guass();
    this.baseR = baseR;
    this.baseG = baseG;
    this.baseB = baseB;
    this.dev = dev;
  }
  
  Colors(int dev) {
    this((int)random(255), (int)random(255), (int)random(255), dev);
  } 
  
  Colors(int baseR, int baseG, int baseB){
    this(baseR, baseG, baseB, (int)random(10, 15));
  }
  
  Colors(){
    this((int)random(255), (int)random(255), (int)random(255));
  }
  
  public void genColor() {
    r = (int)guass.getGuass(baseR, dev);
    g = (int)guass.getGuass(baseG, dev);
    b = (int)guass.getGuass(baseB, dev);
  }
  
  
}

public class Guass {
  private Random gen;
  
  Guass() {
    gen = new Random();
  }
  
  public float getGuass(float mean, float dev) {
    float h = (float) gen.nextGaussian();
    return h * dev + mean;
  }
}

public class Paint {
  private float xMean;
  private float yMean;
  private float deviation;
  private float size;
  private Guass guass;
  private Colors colors;
  
  Paint(float xMean, float yMean, float dev, int size) {
    this.xMean = xMean;
    this.yMean = yMean;
    this.deviation = dev;
    this.size = size;
    guass = new Guass();
    colors = new Colors();
  }
  
  Paint(float xMean, float yMean, float dev) {
    this(xMean, yMean, dev, 10);
  }
  
  public void drawPoint() {
    colors.genColor();
    noStroke();
    fill(colors.r, colors.g, colors.b);
    ellipse(guass.getGuass(xMean, deviation), guass.getGuass(yMean, deviation), size, size);
  }
  
}
  public void settings() {  size(400, 300); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "PaintSplatter" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
