const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

rl.question("Enter temperature: ", function (temperature) {
  rl.question("Choose conversion (CtoF / FtoC): ", function (choice) {
    temperature = Number(temperature);

    if (isNaN(temperature)) {
      console.log("Invalid temperature.");
    } else if (choice === "CtoF") {
      console.log(
        "Converted Temperature:",
        celsiusToFahrenheit(temperature)
      );
    } else if (choice === "FtoC") {
      console.log(
        "Converted Temperature:",
        fahrenheitToCelsius(temperature)
      );
    } else {
      console.log("Invalid conversion option.");
    }

    rl.close();
  });
});