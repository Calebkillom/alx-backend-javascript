const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 2.6), 4);
      assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
      assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 2.6), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 2.5), -1);
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.6), 2);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.6), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 9.7, 3.3), 3);
    });

    it('should return "Error" when dividing by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });

  describe('Invalid Type', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1.4, 2.6), Error);
    });
  });
});
