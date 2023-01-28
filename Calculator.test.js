const Calculator = require('./Calculator');

describe('calculator functionality', () => {

  const num1 = 4;
  const num2 = 2;
  const testCalculator = new Calculator(num1, num2);
    test('add function', () => {
        expect(testCalculator.add()).toBe(6);
      });

    test('subtract function', () => {
      expect(testCalculator.subtract()).toBe(2);
    })

    test('divide function', () => {
      expect(testCalculator.divide()).toBe(2);
    })
    test('multiply function', () => {
      expect(testCalculator.multiply()).toBe(8);
    })
})