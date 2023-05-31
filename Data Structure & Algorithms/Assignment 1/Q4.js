/**
 * Author: Raja Gupta
 * Date: 5/31/23
 * Question:
💡 You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.

Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

 */

function plusOne(digits) {
    const n = digits.length;
  
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
      // If the digit is less than 9, increment it and return the updated array
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
      
      // If the digit is 9, set it to 0 and continue to the next digit
      digits[i] = 0;
    }
  
    // If we reach this point, all digits were 9
    // Add a new most significant digit of 1 at the start of array using unshift method
    digits.unshift(1);
    
    return digits;
  }
  
  // Test Function
  const digits = [9, 9, 9, 9];
  const result = plusOne(digits);
  console.log(result);
  