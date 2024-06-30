// Have the function StringChallenge(str) take the str parameter being passed and return a compressed version of the string using the Run-length encoding algorithm. This algorithm works by taking the occurrence of each repeating character and outputting that number along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// Once your function is working, take the final output string and combine it with your ChallengeToken, both in reverse order and separated by a colon.

// Your ChallengeToken: rvpqjode15
// Examples
// Input: "aabbcde"
// Output: 2a2b1c1d1e
// Final Output: e1d1c1b2a2:51edojqpvr
// Input: "wwwbbbw"
// Output: 3w3b1w
// Final Output: w1b3w3:51edojqpvr


function StringChallenge(str) {
  let count = {};

  let arr = str.split("");

  arr.map((char , i) => {
    if (count[char] && arr[i-1] === char) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  });

  let newArray = new Set(arr);

  newArray = [...newArray];

  let lastArr = newArray.map((char) => {
    console.log(count[char],char);
    return `${char}${count[char]}`;
  });

  let reversed = lastArr.reverse()

  
  return `${reversed.join("")}:51edojqpvr`;
}

// keep this function call here
console.log(StringChallenge("wwwbbbw"));
