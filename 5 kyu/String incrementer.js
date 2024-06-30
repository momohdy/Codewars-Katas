// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString(strng) {
  let numbers = strng.match(/\d+$/),
    counter = 0;

  strng = strng.replace(/\d+$/g, "");

  numbers &&
    String(numbers)
      .split("")
      .map((x) => x === "0" && counter++);

  // use zeros
  numbers ? (numbers[0] = +numbers[0] + 1) : (numbers = 1);

  String(numbers).split("")[0] === "1" && counter--;
  // print zeros

  return strng + (counter > 0 ? "0".repeat(counter) : "") + (numbers[0] || numbers) 
}

// console.log(incrementString("foobar000"));
console.log(incrementString("foo"));


// Another Solution 

// const incrementString = strng =>
//   strng.replace(/[0-8]?9*$/, val => ++val);
