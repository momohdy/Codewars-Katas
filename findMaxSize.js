const findMaxTeamSize = (skills) => {
  let sorted = skills.sort((a, b) => a - b);
  let listOfArrays = [];
  let j = 0;
  listOfArrays[j] = [];
  for (let i = 0; i < sorted.length; i++) {
    listOfArrays[j].push(sorted[i]);

    // CASE OF THE LAST ITEM
    if (i === sorted.length - 1) {
      let max = Math.max(...listOfArrays.map((item) => item.length));
      return max;
    }

    // CREATE NEW ARRAY 
    if (sorted[i + 1] - sorted[i] > 1) {
      j++;
      listOfArrays[j] = [];
    }

  }
};

console.log(findMaxTeamSize([10, 12, 13, 9, 14]));
