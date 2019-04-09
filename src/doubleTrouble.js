'use strict';

/**
 * Implement doubleTrouble function:
 *
 * Function takes an array of integers (array), and a target (target), you must
 * find out if any two consecutive numbers in the array sum to target. If so,
 * remove the second number.
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
 * Work through the array from left to right.
 *
 * Return the resulting array.
 *
 * @param {number[]} array
 * @param {number} target
 *
 * @return {number[]} - array of remained numbers
 */

// function doubleTrouble(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] + array[i + 1] === target) {
//       array.splice(i + 1, 1);
//       i--;
//     }
//   } return array;
// };

function doubleTrouble(array, target) {
  let i = 1;

  while (array[i] !== undefined) {
    if ((array[i - 1] + array[i] === target)) array.splice(i, 1);
    else i++;
  }
  return array;
}

module.exports = doubleTrouble;
