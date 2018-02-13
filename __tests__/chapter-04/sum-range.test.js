const sumRange = require('../../src/chapter-04/sum-range.js');
const sum = sumRange.sum;
const range = sumRange.range;

describe('sum range', () => {

  test('arrays are added correctly', () => {
    expect(sum(range(1, 10))).toBe(55);
  });

  test('range arrays can skip steps', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  })

});
