'use strict';

/**
 * Implement doubleTrouble function:
 *
 * Function takes an newArray of integers (newArray), and a target (target), you
 * must
 * find out if any two consecutive numbers in the newArray sum to target. If so,
 * remove the second number. Work through the newArray from left to right.
 *
 * Example:
 *
 * const newArray = [1, 2, 3, 4, 5]
 * const target = 3
 *
 * 1+2 = target, so remove 2. No other pairs = target, so rest of newArray
 * remains:
 *
 * [1, 3, 4, 5]
 *
 * Return the resulting newArray.
 *
 * @param {number[]} array
 * @param {number} target
 *
 * @return {number[]} - newArray of remained numbers
 */
function doubleTrouble(array, target) {
  const newArray = array;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] + newArray[i + 1] === target) {
      newArray.splice(i + 1, 1);
      i--;
    }
  }
  return newArray;
}

module.exports = doubleTrouble;
