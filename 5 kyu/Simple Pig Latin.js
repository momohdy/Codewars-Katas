// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    // Split string into array of words
  let arrOfStrs = str.split(" "),
    arrOfChars = [];
  for (let i = 0; i < arrOfStrs.length; i++) {
    
    // Split every word into array of Characters
    arrOfChars[i] = arrOfStrs[i].split("");
    arrOfChars[i].push(arrOfChars[i].shift());

    // Case of Punctuation Marks
    if (arrOfChars[i] != "!" && arrOfChars[i] != "?") {
      console.log(arrOfChars[i]);
      arrOfChars[i].push("ay");
    }

    arrOfChars[i] = arrOfChars[i].join("");
  }
  return arrOfChars.join(" ");
}

console.log(pigIt("Pig latin is cool !"));
