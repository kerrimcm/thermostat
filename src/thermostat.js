'use strict';

class Thermostat {
  constructor() {
    this.temperature = 20;
  }
  
  getCurrentTemp() {
    return this.temperature;
  }

  up() {
    this.temperature++
  }
};