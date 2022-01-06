const Thermostat = require("./thermostat");

thermostat = new Thermostat();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Temperature is ${thermostat.getTemperature()}`)

const recursiveAsyncReadLine = () => {
  rl.question('Enter up or down ', (answer) => {
    if (answer === 'up') thermostat.up();
    if (answer === 'down') thermostat.down();
    if (answer === "exit") return rl.close();
    console.log(`${thermostat.getTemperature()}`);
    recursiveAsyncReadLine();
});}

recursiveAsyncReadLine();
