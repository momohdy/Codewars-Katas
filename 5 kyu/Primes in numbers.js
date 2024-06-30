// Given a positive number n > 1 find the prime factor decomposition of n.
//  The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n) {
  let before_Power = Array.from(new Set(generatePrimesFactors(n)));

  let after_Power = before_Power.map((x) => {
    let j = 0;
    while (n % Math.pow(x, j + 1) === 0) {
      j++;
    }

    return [x, j];
  });

  let lastForm = after_Power.map((x) => {
    if (x[1] > 1) return `(${x[0]}**${x[1]})`;
    else return `(${x[0]})`;
  });

  return lastForm.join("");
}



function generatePrimesFactors(limit) {
  const primes = [];
  let divisor = 2;

  while (limit > 1) {
    while (limit % divisor === 0) {
      primes.push(divisor);
      limit /= divisor;
    }
    divisor++;
  }
  return primes;
}



console.log(primeFactors(86240));
