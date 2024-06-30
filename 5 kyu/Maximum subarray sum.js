// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
//  If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


// Kadane's algorithm


var maxSequence = function (arr) {
  // Empty Array || ALL Negatives
  if (arr == "" || arr.every((v) => v < 0)) return 0;

  //   All Positives
  if (arr.every((v) => v > 0)) return arr.reduce((a, b) => a + b);
  //

  let maximum_Sum = arr[0],
    sum_Of_Sub_Array = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (sum_Of_Sub_Array + arr[i] > arr[i]) sum_Of_Sub_Array += arr[i];
    else sum_Of_Sub_Array = arr[i];
    maximum_Sum = Math.max(maximum_Sum, sum_Of_Sub_Array);
  }

  return maximum_Sum;
};





// Another   
// var maxSequence = function(arr){
//     var min = 0, ans = 0, sum = 0;
//     for (let i = 0; i < arr.length; ++i) {
//       sum += arr[i];   // tmam 
//       min = Math.min(sum, min);
//       ans = Math.max(ans, sum - min );
//     }
//     return ans;
//   }

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
