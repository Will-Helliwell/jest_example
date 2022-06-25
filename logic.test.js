const logic = require('./logic');

test('returns correctly given multiple valid monarchs', () => {
    expect(logic.sortRoman(['Steven XL', 'Steven XVI', 'David IX', 'Mary XV', 'Mary XIII', 'Mary XX'])).toBe(['David IX', 'Mary XIII', 'Mary XV', 'Mary XX', 'Steven XVI', 'Steven XL']);
});