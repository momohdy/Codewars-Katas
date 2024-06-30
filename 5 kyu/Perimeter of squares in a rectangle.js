// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8
// . It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle
// when there are n + 1 squares disposed in the same manner as in the drawing:

// alternative text

// Hint:
// See Fibonacci sequence

// Ref:
// http://oeis.org/A000045

// The function perimeter has for parameter n
//  where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

// perimeter(5)  should return 80
// perimeter(7)  should return 216



// AFTER Memoization
function perimeter(n) {
  return 4 * middleware(n + 1, {});
}

const middleware = (n, memo) => {
  var sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += fibonacci(i, memo);
  }
  return sum;
};

const fibonacci = (n, memo) => {
  if (n === 1 || n === 0) return n;
  if (memo[n] !== undefined) {
    return memo[n];
  }
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

console.log(perimeter(5));
//

//

// Time Erorr in big Number param
