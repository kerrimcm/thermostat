'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  
  getCurrentTemp() {
    return this.temperature;
  }

  up() {
    this.temperature++
  }

  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temperature--
  }

  isMinimumTemp() {
    return this.temperature === this.MINIMUM_TEMP;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchOffPowerSavingMode() {
    return this.powerSavingMode = false;
  }
};