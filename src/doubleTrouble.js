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
  const arrayForCheck = [];
  array.forEach(item => arrayForCheck.push(item));
  for (let i = 0; i < arrayForCheck.length; i++) {
    while (arrayForCheck[i] + arrayForCheck[Number(i) + 1] === target) {
      arrayForCheck.splice(Number(i) + 1, 1);
    }
  }
  return arrayForCheck;
}

module.exports = doubleTrouble;
