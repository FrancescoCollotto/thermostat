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

  it('should have a maximum temperature of 25', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  })

  it('should have a maximum temperature of 32 when PSM is off', () => {
    thermostat.setPowerSavingMode(false)
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  })

  it('should reset temperature to 20', () => {
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20);
  })

  it('should have a minimum temperature of 10', () => {
    thermostat.reset()
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  })

  it('should print a low energy usage', () => {
    expect(thermostat.energyUse()).toBe('low-usage')
  })

  it('should print medium energy usage', () => {
    for (let i = 0 ; i < 10 ; i++){
      thermostat.up();
    }
    expect(thermostat.energyUse()).toBe('medium-usage')
  })

  it('should print high energy usage', () => {
    for (let i = 0 ; i < 10 ; i++){
      thermostat.up();
    }
    expect(thermostat.energyUse()).toBe('high-usage')
  })
})