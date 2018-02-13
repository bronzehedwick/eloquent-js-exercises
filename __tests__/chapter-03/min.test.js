const min = require('../../src/chapter-03/min.js');

test('takes the smaller number', () => {
  expect(min(2, 10)).toBe(2);
  expect(min(30, 6)).toBe(6);
});
