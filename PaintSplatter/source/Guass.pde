import java.util.Random;
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