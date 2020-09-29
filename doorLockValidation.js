const readline = require('readline-sync');

/**
 * Checks if the entered code is valid
 * @return {boolean} - Returns result of the validation
 */

module.exports = function doorLockValidation() {
  const validCode = [1, 2, 3, 4, 5].join('');
  const enteredCodes = []

  console.log('Enter the 5-digit code');

  while (validCode !== enteredCodes.slice(-5).join('')) {
    enteredCodes.push(parseInt(readline.question(), 10))
  }

  console.log('Code correct, welcome.');

  return true;
}