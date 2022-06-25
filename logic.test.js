const logic = require('./logic');

test('should return the word test', () => {
    expect(logic.sortRoman()).toBe('hi');
});