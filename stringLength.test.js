const stringLength = require('./stringLength');

test('Length of string', () => {
  expect(stringLength ('Eating')).toBe(6);
});