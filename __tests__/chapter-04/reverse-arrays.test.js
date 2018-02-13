const reverses = require('../../src/chapter-04/reverse-arrays.js');
const reverseArray = reverses.reverseArray;
const reverseArrayInPlace = reverses.reverseArrayInPlace;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const expectedOutput = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

test('reversing arrays should work', () => {
  expect(reverseArray(arr)).toEqual(expectedOutput);
  expect(reverseArrayInPlace(arr)).toEqual(expectedOutput);
});
