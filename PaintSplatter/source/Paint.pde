
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
  
  void drawPoint() {
    colors.genColor();
    noStroke();
    fill(colors.r, colors.g, colors.b);
    ellipse(guass.getGuass(xMean, deviation), guass.getGuass(yMean, deviation), size, size);
  }
  
}