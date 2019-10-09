const Vector = require('../../src/chapter-06/vector.js');
const addingVector = Vector(10, 200);
const subtractingVector = Vector(10, 200);

test('adds to vector', () => {
    expect(addingVector.plus({x: 5, y: 100})).toEqual({x: 15, y: 300});
    expect(addingVector.x).toBe(10);
    expect(addingVector.y).toBe(200);
});

test('subtracts from vector', () => {
    expect(subtractingVector.minus({x: 15, y: 150})).toEqual({x: -5, y: 50});
    expect(subtractingVector.x).toBe(10);
    expect(subtractingVector.y).toBe(200);
});

test('computes vector length', () => {
    expect(addingVector.length).toBe(200.24984394500785);
    expect(addingVector.plus({x: 5, y: 100}).length).toBe(300.3747659175118);
    expect(subtractingVector.minus({x: 5, y: 150}).length).toBe(50.24937810560445);
});
