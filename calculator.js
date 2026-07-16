const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter first number: ", function (num1) {
  rl.question("Enter second number: ", function (num2) {
    rl.question("Choose operation (+, -, *, /): ", function (operation) {
      num1 = Number(num1);
      num2 = Number(num2);

      if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid number.");
      } else {
        switch (operation) {
          case "+":
            console.log("Result:", num1 + num2);
            break;

          case "-":
            console.log("Result:", num1 - num2);
            break;

          case "*":
            console.log("Result:", num1 * num2);
            break;

          case "/":
            if (num2 === 0) {
              console.log("Division by zero is not allowed.");
            } else {
              console.log("Result:", num1 / num2);
            }
            break;

          default:
            console.log("Invalid operation.");
        }
      }

      rl.close();
    });
  });
});