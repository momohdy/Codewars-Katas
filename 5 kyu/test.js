function scramble(str1, str2) {
  const charCount = {};

  // Count characters in str1
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Check if characters in str2 can be formed from str1
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Examples
console.log(scramble("rkqodlw", "world")); // True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // True
console.log(scramble("katas", "steak")); // False
