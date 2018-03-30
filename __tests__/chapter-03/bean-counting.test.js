const countBs = require('../../src/chapter-03/bean-counting.js');

test('correctly counts number of letter "B"s', () => {
    expect(countBs('ABRAHAB LINCOLB')).toBe(3);
});
