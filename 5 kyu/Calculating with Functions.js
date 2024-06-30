// This time we want to write calculations using functions and get the results.
//  Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(callback) {
  const value = 0;
  return callback ? callback(value) : value;
}
function one(callback) {
  const value = 1;
  return callback ? callback(value) : value;
}
function two(callback) {
  const value = 2;
  return callback ? callback(value) : value;
}
function three(callback) {
  const value = 3;
  return callback ? callback(value) : value;
}
function four(callback) {
  const value = 4;
  return callback ? callback(value) : value;
}
function five(callback) {
  const value = 5;
  return callback ? callback(value) : value;
}
function six(callback) {
  const value = 6;
  return callback ? callback(value) : value;
}
function seven(callback) {
  const value = 7;
  return callback ? callback(value) : value;
}
function eight(callback) {
  const value = 8;
  return callback ? callback(value) : value;
}
function nine(callback) {
  const value = 9;
  return callback ? callback(value) : value;
}

function plus(b) {
  return (a) => a + b;
}

function minus(b) {
  return (a) => a - b;
}

function times(b) {
  return (a) => a * b;
}

function dividedBy(b) {
  return (a) => parseInt(a / b);
}

console.log(eight(times(two())));
