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
  let j = 0;
  return numbers.filter(function(el, i, array) {
    if (i > 0 && array[j] + el === target) {
      return el !== array[i];
    } else if (i > 0) { j = i; }
    return array;
  });
}
doubleTrouble(
  [6, 4, 9, 6, 4, 5, 2, 2, 9, 6, 4, 1, 9, 8, 7, 7, 5, 2, 5, 6, 3, 2,
    9, 5, 9, 7, 4, 3, 2], 9);
module.exports = doubleTrouble;
