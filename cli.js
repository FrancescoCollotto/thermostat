const Thermostat = require("./thermostat");

thermostat = new Thermostat();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(`Temperature is ${thermostat.getTemperature()}`)

var recursiveAsyncReadLine = function () {rl.question('Enter up or down ', (answer) => {
    if (`${answer}` == 'up'){
        thermostat.up()
    }else if(`${answer}` == 'down'){
        thermostat.down()
    }
  console.log(`${thermostat.getTemperature()}`);
  recursiveAsyncReadLine();
});}

recursiveAsyncReadLine();

