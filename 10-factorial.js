function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

const num = parseInt(process.argv[2]);
const result = isNaN(num) ? 1 : factorial(num);
console.log(result);