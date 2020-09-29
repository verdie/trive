/**
 * Multiplicates all input arguments.
 * @param {number} args - Arguments of the function
 * @return {number} - Multiplication of all numeric arguments
 */

module.exports = function multiInput(...args) {
  return args.reduce(function(accumulator, currentValue) {
    if(isNaN(currentValue) === false && typeof currentValue === 'number') {
      return accumulator * currentValue;
    }
    else {
      return accumulator;
    }
  }, 1) 
}
