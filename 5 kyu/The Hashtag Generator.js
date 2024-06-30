// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  let finalResult = str
    .split("")
    .map((x, i, array) =>
      i === 0 || array[i - 1] === " " ? x.toUpperCase() : x
    )
    .filter((x) => x !== " ")
    .join("");
  return finalResult.length > 139 || !finalResult.length
    ? false
    : `#${finalResult}`;
}

console.log(generateHashtag("a".repeat(140)));
