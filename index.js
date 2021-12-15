const readline = require("readline");
const checkHats = require("./checkHats");

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

r.question("Enter the number of hats: ", (n) => {
  console.log(`The result is ${checkHats(n)}`);
  process.exit(0);
});
