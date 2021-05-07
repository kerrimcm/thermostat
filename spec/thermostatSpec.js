'use strict';

describe ('Thermostat', () => {
  let thermostat;

  beforeEach(function() {
      thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });
});