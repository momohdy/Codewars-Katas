// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
//  Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// My Solution

let arr = ["0", 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function rgb(...nums) {
  let i = 0,
    res = "",
    remainder = [],
    j = 0;
  while (nums != undefined && i != nums.length) {
    if (nums[i] > 0 && nums[i] < 16 ) {
      remainder[i] = [];
      remainder[i][0] = nums[i] % 16;
      remainder[i][1] = "0";
    } else if (nums[i] <= 0 ) {
      nums[i] = 0;
      remainder[i] = [];
      remainder[i][0] = "0";
      remainder[i][1] = "0";
    } else {
      if (nums[i] > 255) {
        nums[i] = 255;
      }
      // console.log(nums[i]);
      remainder[i] = [];
      while (nums[i] != 0) {
        remainder[i][j] = nums[i] % 16;
        //   console.log(remainder[i][j]);
        nums[i] = parseInt(nums[i] / 16);
        j++;
      }
      // console.log(`remainders of ${nums[i]} is :  ${remainder[i].join("")} `);
    }

    i++;
  }

  for (let i = 0; i < remainder.length; i++) {
    for (let j = 0; j < remainder[i].length; j++) {
      //   console.log(remainder[i][j]);
      remainder[i][j] != undefined && (remainder[i][j] = arr[remainder[i][j]]);
    }
    remainder[i] = remainder[i].reverse();
    res += remainder[i].join("");
    // console.log(remainder[i]);
    // console.log("////////////////////");
  }

  //   console.log(remainder);

  return res;
}

// Best Practise
// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }

console.log(rgb(0, 0, -20));
