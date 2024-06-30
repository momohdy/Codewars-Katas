// Write a function named first_non_repeating_letter that takes a string input,
//  and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't',
//  since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character,
//  but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

const firstNonRepeatingLetter = (s) => {
  let arr = s.toLowerCase().split("") , fixed_Length =arr.length

  for (let i = 0; i < fixed_Length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[0] === arr[j]) {
        arr.splice(j, 1);
        arr.shift();
      }
    }
  }

  return arr[0] || "";
};

console.log(
  firstNonRepeatingLetter(
    "bm92ubm92unvgtgnvgtggkiegkie4w4ho4w4hopjmyhpjmyhgjhbfgjhbf83uja83ujae0dre0dr27zls27zls8xib8xibtzi5tzi5c"    
  )
);
