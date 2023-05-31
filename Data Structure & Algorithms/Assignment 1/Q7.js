/**
 * Author: Raja Gupta
 * Date: 5/31/23
 * Question:
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

 */

function moveZeroes(nums) {
  let i = 0; // Pointer for non-zero elements

  // Iterate through the array
  for (let j = 0; j < nums.length; j++) {
    // If the current element is non-zero
    if (nums[j] !== 0) {
      // Move the non-zero element to the current position of i
      nums[i] = nums[j];
      i++;
    }
  }

  // Fill the remaining positions with zeros
  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }
}

// Test Function
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
