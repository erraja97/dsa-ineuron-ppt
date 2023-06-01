/**
 * Author: Raja Gupta
 * Date: 6/1/23
 * Question:

You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

 */

function canPlaceFlowers(flowerbed, n) {
  let i = 0;
  const len = flowerbed.length;

  while (i < len && n > 0) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === len - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }

  return n === 0;
}
// Test Function
const flowerbed = [1, 0, 0, 1, 0, 0];
const n = 3;
const canBePlanted = canPlaceFlowers(flowerbed, n);
console.log(canBePlanted);
