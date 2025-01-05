const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for inputs (1.4, 2.6)', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 for inputs (1.5, 2.5)', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return -4 for inputs (-1.4, -2.6)', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should return 0 for inputs (0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1234.7, 5678.3), 6913);
  });

  it('should return the rounded sum when one input is negative', () => {
    assert.strictEqual(calculateNumber(-1.4, 2.6), 1);
  });

  it('should round to nearest integer correctly when input is exactly halfway', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7); // Both round up
    assert.strictEqual(calculateNumber(-2.5, -3.5), -6); // Both round down
  });
});
