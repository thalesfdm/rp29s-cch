const readline = require("readline");
const checkHats = require("./checkHats");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Enter the number of hats: ", (n) => {
  if (n % 1 !== 0) {
    console.log("Input must be an integer.");
  } else {
    console.log(`The result is ${checkHats(n)}`);
  }
  process.exit(0);
});
