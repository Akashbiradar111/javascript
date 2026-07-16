const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Reusable function
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

rl.question("Enter your birth year: ", function (birthYear) {
  birthYear = Number(birthYear);
  const currentYear = new Date().getFullYear();

  // Validation
  if (isNaN(birthYear)) {
    console.log("Invalid year.");
  } else if (birthYear <= 0) {
    console.log("Please enter a valid birth year.");
  } else if (birthYear > currentYear) {
    console.log("Birth year cannot be in the future.");
  } else {
    const age = calculateAge(birthYear);
    console.log("Your age is:", age);
  }

  rl.close();
});