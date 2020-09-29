/**
 * Checks whether any permutation of an input string is a palindrome.
 * @param {string} input - String with a word to validate.
 * @return {boolean} - Returns result of the validation
 */

module.exports = function isPermutationPalindrome(input) {
  const characterRepeats = input
    .toLowerCase()
    .split('')
    .reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1
      return acc;
    }, {});
  const oddCharacterRepeats = Object
    .values(characterRepeats)
    .filter(function (repeat) {
      return repeat % 2 !== 0;
    });
  return oddCharacterRepeats.length <= 1;
}
