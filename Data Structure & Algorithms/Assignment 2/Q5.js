/**
 * Author: Raja Gupta
 * Date: 6/1/23
 * Question:

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

 */

function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
  const product2 = nums[0] * nums[1] * nums[n - 1];
  return Math.max(product1, product2);
}

//Test Function
const nums = [1, 2, 3, 4, 5, 6];
const maxProduct = maximumProduct(nums);
console.log(maxProduct);
