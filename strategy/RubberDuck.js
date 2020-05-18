import Duck from './Duck';
import FlyNoWay from './FlyNoWay';
import Squeak from './Squeak';

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display() {
    console.log("RubberDuck show");
  }
}

export default RubberDuck;