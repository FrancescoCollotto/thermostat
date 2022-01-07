require('dotenv').config()

class Thermostat {
  constructor(weatherApi) {
    this.temperature = 20;
    this.maxTemperature = 25;
    this.minTemperature = 10;
    this.weather = weatherApi;
  }

  setCity(city) {
    this.weather.fetchWeatherData(city, (data) => {
      this.temperature = data.main.temp;
      console.log(this);

    })
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemperature) {
    this.temperature++;
  }
}

  down() {
   if (this.temperature > this.minTemperature) {
    this.temperature--;
  }}

  setPowerSavingMode(set) {
    if (set) {
      this.maxTemperature = 25;
    }else {
      this.maxTemperature = 32;
    }
  }

  reset() {
    this.temperature = 20;
  }

  energyUse() {
    if (this.temperature < 18) {
      return 'low-usage'
    }else if(this.temperature <= 25) {
      return 'medium-usage'
    }else {
      return 'high-usage'}
  }
}

module.exports = Thermostat;