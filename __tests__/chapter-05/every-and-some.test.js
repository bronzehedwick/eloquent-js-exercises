const every = require('../../src/chapter-05/every-and-some.js').every;
const some = require('../../src/chapter-05/every-and-some.js').some;

function greaterThan10(val) {
    return val > 10;
}

test('every behaves like the builtin', () => {
    expect(every([11,22,33], greaterThan10)).toEqual(true);
    expect(every([1,2,3], greaterThan10)).toEqual(false);
});

test('some behaves like the builtin', () => {
    expect(some([9,22,33,44], greaterThan10)).toEqual(true);
    expect(some([9,2,3,6], greaterThan10)).toEqual(false);
});
