/**
 * Author: Raja Gupta
 * Date: 6/1/23
 * Question:
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].

 */

function findLHS(nums) {
  let numCount = new Map();
  let maxLen = 0;

  // Count the frequency of each number in the array
  for (let num of nums) {
    if (!numCount.has(num)) {
      numCount.set(num, 0);
    }
    numCount.set(num, numCount.get(num) + 1);
    // console.log(numCount); //for testing only
  }

  // Calculate the length of the longest harmonious subsequence
  for (let [num, count] of numCount) {
    if (numCount.has(num + 1)) {
      maxLen = Math.max(maxLen, count + numCount.get(num + 1));
    }
  }

  return maxLen;
}

// Test Function
let nums = [4, 2, 1, 3, 2, 4];
let longestSubsequenceLength = findLHS(nums);
console.log(longestSubsequenceLength);
