// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b

// Note that a and b may be very large!

// For example, the last decimal digit of 9^7

//   is 999, since 97=47829699^7 = 47829699
//  =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2
// 200
//  )
// 2
// 300

//  , which has over 109210^{92}10
// 92
//   decimal digits, is 666. Also, please take 000^00
// 0
//   to be 111.

// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n
// lastDigit(10n,10000000000n)  // returns 0n

function lastDigit(n, m) {
  let str = String(n ** m);
  return `${str.charAt(str.length - 1)}n`;
}

console.log(lastDigit(7741917, 0));
