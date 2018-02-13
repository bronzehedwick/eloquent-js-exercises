const isEven = require('../../src/chapter-03/recursion.js');

test('identifies even numbers', () => {
  expect(isEven(0)).toBe(true);
  expect(isEven(1)).toBe(false);
  expect(isEven(50)).toBe(true);
  expect(isEven(75)).toBe(false);
  expect(isEven(-1)).toBe(false);
  expect(isEven(-0)).toBe(true);
});
