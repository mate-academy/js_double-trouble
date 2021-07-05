'use strict';

function doubleTrouble(numbers, target) {
  const newArray = [];
  numbers.forEach(
    value => {
      if (value + newArray[newArray.length - 1] !== target) {
        newArray.push(value);
      }
    }
  );
  return newArray;
}

module.exports = doubleTrouble;
