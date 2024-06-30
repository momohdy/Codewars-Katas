// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
//  ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13.
// if there are numbers or special characters included in the string, they should be returned as they are.
// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

let ARR = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
  arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

function rot13(message) {
  return message
    .split("")
    .map((x) => {
      if (isNaN(x) && !( /[~!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(x))) {
        if (ARR.indexOf(x) !== -1)
          return ARR[(ARR.indexOf(x) + 13) % ARR.length];
        else return arr[(arr.indexOf(x) + 13) % arr.length];
      } else {
        return x;
      }
    })
    .join("");
}

console.log(rot13("*:0~;k?wH@\-k"));
