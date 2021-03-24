const Group = require('../../src/chapter-06/group.js');
const group = Group.from([10, 20]);

test('has correct values', () => {
    expect(group.has(10)).toBe(true);
    expect(group.has(30)).toBe(false);
});

test('adds/deletes values', () => {
    group.add(10);
    group.delete(10);
    expect(group.has(10)).toBe(false);
});
