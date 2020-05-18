class Duck {
    constructor(flyBehavior, quackBehavior) {
      this._flyBehavior = flyBehavior;
      this._quackBehavior = quackBehavior;
    }
  
    fly() {
      this._flyBehavior.fly();
    }
  
    quack() {
      this._quackBehavior.quack();
    }
  
    swim() {
      console.log('Chop!');
    }
  
    display() {
      throw new Error("This method must be overwritten!");
    }
}
  
export default Duck;