"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString = inputStdin;
});
process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
  main();
});

function readLine() {
  return inputString[currentLine++];
}
function print(args) {
  console.log(args);
}

//  cat input.txt | node index.js > output.txt
function main() {
  ("use strict");
  //   note that every input here is a string , not a number.
  //   Also some values are to be converted to array of strings or numbers by
  //   inputs.split(" ").map(Number)

  const inputs = readLine();
  const values = inputs.split(" ").map(Number);
  print(values);
}
