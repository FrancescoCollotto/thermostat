class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.minTemperature = 10;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature<this.maxTemperature){
    this.temperature++;
  }
}

  down() {
   if (this.temperature>this.minTemperature){
    this.temperature--;
  }}

  setPowerSavingMode(set) {
    if (set == true){
      this.maxTemperature = 25
    }else {
      this.maxTemperature = 32
    }
  }

  reset() {
    this.temperature = 20
  }

  energyUse() {
    if (this.temperature< 18){
      return 'low-usage'
    }else if(this.temperature <= 25){
      return 'medium-usage'
    }else {
      return 'high-usage'}
  }
}

module.exports = Thermostat;