//code to generate the fibonacci series up to 'n' terms
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1.
// After that, the next term is defined as the sum of the previous two terms.

const number = parseInt(prompt("Enter the number of terms:"));
//parseInt() function parses a string argument and returns an integer.

let n1 = 0,
  n2 = 1,
  nextTerm;
console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
