export class Weather {
  #temperature;

  getTemperature() {
    return this.#temperature;
  }

  setTemperature(temperature) {
    this.#temperature = temperature;
  }
}
