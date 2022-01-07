require('dotenv').config()
import got from 'got';
const {WEATHER_API_KEY} = process.env

class Weather {  
  fetchWeatherData(city, callback) {
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${WEATHER_API_KEY}`;
    got(apiUrl).then((response) => {
      let data = JSON.parse(response.body);
      callback(data);
    });
  }
}


const weather = new Weather();
weather.fetchWeatherData('London', (data) => {
  console.log(data);
})