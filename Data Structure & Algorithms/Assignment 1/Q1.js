/**
 * Author: Raja Gupta
 * Date: 5/31/23
 * Question:
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example:**
Input: nums = [2,7,11,15], target = 9
Output0 [0,1]

**Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1][

 */

function twoSum(nums, target) {
  //using map object(built-in data structure) to store key value pairs
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    //complement is the number, that when added gives us target
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

// Test Function
const nums = [15, 11, 5, 2, 7, 9, 8];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
