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
 * @param {number[]} array
 * @param {number} target
 *
 * @return {number[]} - array of remained numbers
 */
function doubleTrouble(array, target) {
  // write code here
  for (let i = 0; i < array.length; i++) {
    let firstSummand = array[i];
    let secondSummand = array[i + 1];
    if (firstSummand + secondSummand === target) {
      array.splice(i + 1, 1);
      i--;
    }
  }
  return array;
}

module.exports = doubleTrouble;
