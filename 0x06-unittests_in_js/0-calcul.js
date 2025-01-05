/**
 * function calculateNumber -> calculates the sum of two rounded numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @return {number} - The sum of the two rounded numbers
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
