const Thermostat = require('./thermostat');
const thermostat = new Thermostat();

describe('Thermostat', () => {
  it('should return a default temperature of 20', () => {
    expect(thermostat.getTemperature()).toBe(20);
  })

  it('should increase temperature by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  })

  it('should decrease temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(20);
  })
})