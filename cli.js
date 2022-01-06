const Thermostat = require("./thermostat");

thermostat = new Thermostat();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Temperature is ${thermostat.getTemperature()}`)

const recursiveAsyncReadLine = () => {
  rl.question('Enter command => ', (answer) => {
    if (answer === 'up') thermostat.up();
    if (answer === 'down') thermostat.down();
    if (answer === 'psm on') {
      thermostat.setPowerSavingMode(true);
      console.log("PSM on")
    }
    if (answer === 'psm off') {
      thermostat.setPowerSavingMode(false);
      console.log("PSM off")
    }
    if (answer === "exit") return rl.close();
    
    let tempMessage = "";
    if (thermostat.getTemperature() === thermostat.maxTemperature) { tempMessage = " (maximum reached)" }
    if (thermostat.getTemperature() === thermostat.minTemperature) { tempMessage = " (minimum reached)" }

    console.log(`Temperature is ${thermostat.getTemperature()}${tempMessage}`);
    recursiveAsyncReadLine();
});}

recursiveAsyncReadLine();
