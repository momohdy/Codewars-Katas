// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

// function zeros(n) {
//     if(!(n)) return 0
//   let factorial = getFactorial(n, {});
//   let arrofDigits = String(factorial).split(""),
//     counter = 0;
//   let i = arrofDigits.length - 1;

//   if (arrofDigits[i] == 0) {
//     counter++;
//     --i;
//     while (arrofDigits[i] == 0) {
//       counter++;
//       --i;
//     }
//   }

//   return counter;
// }



// let getFactorial = (num, memo) => {
//   if (num === 1 || num === 0) return num;
//   else {
//     if (memo[num] === undefined) {
//       memo[num] = num * getFactorial(num - 1, memo);
//       return memo[num];
//     } else {
//       return memo[num];
//     }
//   }
// };

function zeros(n) {
    if (n <= 0) return 0;
  
    let counter = 0;
    while (n > 0) {
      n = Math.floor(n / 5);
      counter += n;
    }
  
    return counter;
  }

console.log(zeros(12));
