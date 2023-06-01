/**
 * Author: Raja Gupta
 * Date: 6/1/23
 * Question:
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.

**Example 1:**
Input: nums = [1,4,3,2]
Output: 4

**Explanation:** All possible pairings (ignoring the ordering of elements) are:

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
So the maximum possible sum is 4

 */

function findMaxSum(nums) {
  const pairs = [];
  const sumOfPairs = [];
  let sum;

  //creating pairs from nums
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      pairs.push([nums[i], nums[j]]);
    }
  }

  console.log(pairs);

  //create 2 set of pairs
  for (let i = 0; i < pairs.length; i++) {
    for (let j = i + 1; j < pairs.length; j++) {
      if (
        pairs[i][0] != pairs[j][0] &&
        pairs[i][0] != pairs[j][1] &&
        pairs[i][1] != pairs[j][0] &&
        pairs[i][1] != pairs[j][1]
      ) {
        sum =
          Math.min(pairs[i][0], pairs[i][1]) +
          Math.min(pairs[j][0], pairs[j][1]);
        console.log(sum);
        sumOfPairs.push(sum);
      }
    }
  }

  return Math.max(...sumOfPairs);
}

//Test Function
const nums = [1, 4, 3, 6];
const result = findMaxSum(nums);
console.log(result);
