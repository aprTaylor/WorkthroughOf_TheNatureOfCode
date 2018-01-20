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