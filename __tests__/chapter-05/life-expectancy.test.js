const lifeExpectancy = require('../../src/chapter-05/life-expectancy.js');
const expectedResult = {
    '16': 43.5,
    '17': 51.2,
    '18': 52.78947368421053,
    '19': 54.833333333333336,
    '20': 84.66666666666667,
    '21': 94
};

test('averages life expectancy by century', () => {
    expect(lifeExpectancy()).toEqual(expectedResult);
});
