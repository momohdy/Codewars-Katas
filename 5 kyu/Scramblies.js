// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  const charCount = {}

  for(let char of str1){
    charCount[char] = (charCount[char] || 0 ) + 1 
  }

  for(let char of str2){
    if(!charCount[char]){
        return false
    }
    console.log(charCount[char]);
    charCount[char]--;
  }
  return true
}

// console.log(scramble("rkqodlw", "world"));
// console.log(scramble("cedewaraaossoqqyt", "codewars"));
// console.log(scramble("katas", "steak"));
// console.log(scramble("scriptingjava", "javascript"));
// console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("javscripts", "javascript")); //
// console.log(scramble("jscripts", "javascript"));
// console.log(scramble("aabbcamaomsccdd", "commas"));
// console.log(scramble("commas", "commas"));
// console.log(scramble("sammoc", "commas"));
