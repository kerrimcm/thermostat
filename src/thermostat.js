'use strict';

class Thermostat {
  constructor() {
    this.MINIMUM_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF= 32;    
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
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
    this.temperature = this.DEFAULT_TEMP;
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

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    } else if (this.temperature >= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'high-usage';
    } else {
      return 'medium-usage';
    }
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
