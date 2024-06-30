// My friend John and I are members of the "Fat to Fit Club (FFC)".
// John is worried because each month a list with the weights of members is published
// and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more,
//  I will modify the order of the list". It was decided to attribute a "weight" to numbers.
//  The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string
// ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight",
// let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9),
// it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading,
// trailing whitespaces and more than a unique whitespace between two consecutive numbers
// For C: The result is freed.

function BubbleSort(array) {
  for (i = 0; i < arr2.length; i++)
    for (j = 0; j < arr2.length - i - 1; j++)
      if (str1 > str2) {
        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
      }
}

function orderWeight(strng) {
  let arr = strng.split(" ");
  let arr2 = arr.map((x) => [...x]);
  arr2 = arr2.map((x) => x.reduce((a, b) => parseInt(a) + parseInt(b)));
  arr2 = arr2.map((x, i) => [x, i]);
  console.log(arr2);
  arr2.sort((a, b) => a[0] - b[0]);
  arr = arr.map((_, i) => arr[arr2[i][1]]);

  return arr.join(" ");
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
// console.log(orderWeight("1 2 200 4 4 6 6 7 7 27 72 18 81 9 91"));

// NOTE 
// Bubble Sort doesnt exist  && Not Handled
