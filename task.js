const { log } = require("console");

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let sorted = nums.sort((a,b)=>a-b)
    
    for (let first = 0 , last = sorted.length-1 ; first < last;) {
        if (sorted[first] + sorted[last] > target) {
            last--;
        }
        else if(sorted[first] + sorted[last] < target){
            i++;
        }
        else{
            return [first,last]
        }
    }
};
console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,3], 6));
// console.log(twoSum([3,2,4], 6));



// first => 0
// last => 3
// first + last > target 
// last--
// // 
// first + last < target 
// first++

// sum > target 