const lines = ["C is fun", "Python is cool", "JavaScript is amazing"];
let result = "";

for (let i = 0; i < lines.length; i++) {
  result += lines[i] + "\n"; // add a newline after each line
}

console.log(result.trim()); // .trim() removes the last extra newline