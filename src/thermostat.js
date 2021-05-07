'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF= 32;    
    this.temperature = 20;
    this.powerSavingMode = true;
  }
  
  getCurrentTemp() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemp()) {
      return;
    }
    this.temperature++
  }

  down() {
    if (this.isMinimumTemp()) {
      return;
    }
    this.temperature--
  }

  resetTemperature() {
    this.temperature = 20;
  }

  isMinimumTemp() {
    return this.temperature === this.MINIMUM_TEMP;
  }

  isMaximumTemp() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchOffPowerSavingMode() {
    return this.powerSavingMode = false;
  }

  switchOnPowerSavingMode() {
    return this.powerSavingMode = true;
  }
};