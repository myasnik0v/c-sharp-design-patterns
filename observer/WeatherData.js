import Subject from './Subject';

class WeatherData extends Subject {
  constructor() {
    super();
    this._observers = {};
    this._temperature = 0;
    this._humidity = 0;
    this._pressure = 0;
  }

  registerObserver(observer) {
    this._observers[observer.id] = observer;
  }

  removeObserver(observer) {
    delete this._observers[observer.id];
  }

  notifyObservers() {
    Object.values(this._observers)
        .forEach((observer) => observer.update(this._temperature, this._humidity, this._pressure))
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature, humidity, pressure) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._pressure = pressure;

    this.measurementsChanged();
  }
}

export default WeatherData;