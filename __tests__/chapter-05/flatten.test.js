const flatten = require('../../src/chapter-05/flatten.js');
const nested_array = [
  1, 2, 3,
  [ 4, 5, 6, [ 7, 8, 9 ] ],
  10, 11, 12, 13,
  [ 14, 15, [ 16, [ 17, 18, [ 19, 20 ] ] ] ]
];
const flat_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

test('flattens a nested array', () => {
  expect(flatten(nested_array)).toEqual(flat_array);
});
