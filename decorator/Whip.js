import CondimentDecorator from './CondimentDecorator';

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super();
    this._beverage = beverage;
  }

  getDescription() {
    return this._beverage.getDescription() + ', Whip';
  }

  cost() {
    return 0.60 + this._beverage.cost();
  }
}

export default Whip;