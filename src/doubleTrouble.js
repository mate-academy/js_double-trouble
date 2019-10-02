'use strict';

/**
 * Implement doubleTrouble function:
 *
 * Function takes an array of integers (array), and a target (target), you must
 * find out if any two consecutive numbers in the array sum to target. If so,
 * remove the second number. Work through the array from left to right.
 *
 * Example:
 *
 * const array = [1, 2, 3, 4, 5]
 * const target = 3
 *
 * 1+2 = target, so remove 2. No other pairs = target, so rest of array remains:
 *
 * [1, 3, 4, 5]
 *
 * Return the resulting array.
 *
 * @param {number[]} numbers
 * @param {number} target
 *
 * @return {number[]} - array of remained numbers
 */
function doubleTrouble(numbers, target) {
  const returnArray = [...numbers];

  for (let i = 0; i < returnArray.length;) {
    const secondValue = returnArray[i + 1];
    const sum = returnArray[i] + secondValue;
    if (sum === target) {
      returnArray.splice(++i, 1);
      i = 0;
    } else {
      i++;
    }
  }

  return returnArray;
}

module.exports = doubleTrouble;
