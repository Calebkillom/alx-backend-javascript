/**
 * function calculateNumber -> performs arithmetic operations on two numbers
 * @param {string} type - The type of operation (SUM, SUBTRACT, or DIVIDE)
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @return {number|string} - The result of the operation or "Error" for division by 0
 * @example
 * calculateNumber('SUM', 1.4, 2.6); // 4
 * calculateNumber('SUBTRACT', 1.4, 2.6); // -2
 * calculateNumber('DIVIDE', 1.4, 0); // 'Error'
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;
    case 'SUBTRACT':
      return roundedA - roundedB;
    case 'DIVIDE':
      if (roundedB === 0) return 'Error';
      return roundedA / roundedB;
    default:
      throw new Error('Invalid type');
  }
}

module.exports = calculateNumber;
