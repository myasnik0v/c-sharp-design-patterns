import CondimentDecorator from './CondimentDecorator';

class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ", Mocha";
  }

  cost() {
    return 0.20 + this._beverage.cost();
  }
}

export default Mocha;