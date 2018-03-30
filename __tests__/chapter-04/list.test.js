const lists = require('../../src/chapter-04/list.js');
const arrayToList = lists.arrayToList;
const listToArray = lists.listToArray;
const expectedList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

describe('lists', () => {

    test('converts arrays to lists', () => {
        expect(arrayToList([1,2,3])).toEqual(expectedList);
    });

    test('converts lists to arrays', () => {
        expect(listToArray(expectedList)).toEqual([1,2,3]);
    });

});
