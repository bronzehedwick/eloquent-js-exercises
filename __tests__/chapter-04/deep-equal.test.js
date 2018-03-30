const deepEqual = require('../../src/chapter-04/deep-equal.js');
const arr = [1,2,3];
const num = 5;
const obj = {
    p1: 4,
    p2: {
        p1: 'hello'
    },
    p3: false,
    p4: 'hi there',
    p5: function addOne(num) { return num + 1; }
};
const bool = true;
const str = 'Why hello dere';
const func = function funFunc(num1, num2) {
    return (num1 * num2) + ' Fun!';
};

describe('Deep equality', () => {

    test('The same array is equal to itself', () => {
        expect(deepEqual(arr, arr)).toBe(true);
    });

    test('The same number is equal to itself', () => {
        expect(deepEqual(num, num)).toBe(true);
    });

    test('The same string is equal to itself', () => {
        expect(deepEqual(str, str)).toBe(true);
    });

    test('The same object is equal to itself', () => {
        expect(deepEqual(obj, obj)).toBe(true);
    });

    test('The same boolean is equal to itself', () => {
        expect(deepEqual(bool, bool)).toBe(true);
    });

    test('The same function is equal to itself', () => {
        expect(deepEqual(func, func)).toBe(true);
    });


    test('A different array to not equal itself', () => {
        expect(deepEqual(arr, [4,5,6])).toBe(false);
    });

    test('A different number to not equal itself', () => {
        expect(deepEqual(num, 10)).toBe(false);
    });

    test('A different string to not equal itself', () => {
        expect(deepEqual(str, 'Well I never')).toBe(false);
    });

    test('A different object to not equal itself', () => {
        expect(deepEqual(obj, {plop: '5', hop: {alive: 55}})).toBe(false);
    });

    test('A different boolean to not equal itself', () => {
        expect(deepEqual(bool, false)).toBe(false);
    });

    test('A different function to not equal itself', () => {
        expect(deepEqual(func, function someday(p3){return p3;})).toBe(false);
    });

    test('An object is not equal to null', () => {
        expect(deepEqual({}, null)).toBe(false);
    });

});
