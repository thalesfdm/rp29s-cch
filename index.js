const readline = require("readline");
const checkHats = require("./checkHats");
const validateInput = require("./validateInput");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Enter the number of hats: ", (n) => {
  if (validateInput(n)) {
    console.log(`The result is ${checkHats(n)}`);
  } else {
    console.log("Input must be an integer.");
  }
  process.exit(0);
});
