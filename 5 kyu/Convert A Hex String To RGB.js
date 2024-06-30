const hexaToDecimal = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  "a": 10,
  "b": 11,
  "c": 12,
  "d": 13,
  "e": 14,
  "f": 15,
};
const BASE = 16;

const convertToDecimal = (array) => {
    for (let i = 1; i < 6; i++) {
        array[i] = array[i].reduce((a,b)=> hexaToDecimal[a] * BASE +hexaToDecimal[b]);
        i++;
      }
      return array
}

const divideIntoThreeArrays = (hexString) => {
  hexString = hexString.toLowerCase().split("");
  let arr = [];
  for (let i = 1; i < 6; i++) {
    arr[i] = [hexString[i], hexString[i + 1]];
    i++;
  }
  return arr;
};

function hexStringToRGB(hexString) {
  let arr = divideIntoThreeArrays(hexString);
  arr = convertToDecimal(arr)
  return {
    r : arr[1],
    g : arr[3],
    b : arr[5],
  }
}

console.log(hexStringToRGB("#FF9933"));


// function hexStringToRGB(h) {
//   return {
//     r: parseInt(h.slice(1, 3), 16),
//     g: parseInt(h.slice(3, 5), 16),
//     b: parseInt(h.slice(5, 7), 16),
//   };
// }