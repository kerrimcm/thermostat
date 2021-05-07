'use strict';

describe ('Thermostat', () => {
  let thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  it('increases the temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });

  it('decreases the temperature with down()', function() {
    thermostat.down();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemp()).toEqual(10);
  });

  it('defaults to power saving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch off power saving mode', function() {
    thermostat.switchOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch power saving mode back on', function() {
    thermostat.switchOffPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchOnPowerSavingMode();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function() {
    it('has a max temperature of 25 degrees', function() {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemp()).toEqual(25);
    });
  });
});