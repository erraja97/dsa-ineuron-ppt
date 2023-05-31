/**
 * Author: Raja Gupta
 * Date: 5/31/23
 * Question:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

 */

function checkRepeatedNum(nums) {
  const newMap = new Map();
  let flag = false;

  for (let i = 0; i < nums.length; i++) {
    if (newMap.has(nums[i])) {
      newMap.set(nums[i], newMap.get(nums[i]) + 1);
      flag = true;
    } else {
      newMap.set(nums[i], 1);
    }
  }

  console.log(newMap);
  return flag;
}

const nums = [1, 2, 3, 0, 6, 9, 9];
const hasDuplicate = checkRepeatedNum(nums);
console.log(hasDuplicate);
