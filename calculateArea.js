/**
 * Calculates total area of two overlapping rectangles.
 * @param {Object} rectOne - First rectangle.
 * @param {number} rectOne.xLeft - x coordinate of left corner of rectangle.
 * @param {number} rectOne.yBottom - y coordinate of bottom corner of rectangle.
 * @param {number} rectOne.width - Width of first rectangle.
 * @param {number} rectOne.height - Height of first rectangle.
 * @param {Object} rectTwo - Second rectangle.
 * @param {number} rectTwo.xLeft - x coordinate of left corner of rectangle.
 * @param {number} rectTwo.yBottom - y coordinate of bottom corner of rectangle.
 * @param {number} rectTwo.width - Width of second rectangle.
 * @param {number} rectTwo.height - Height of second rectangle.
 * @return {number} - Function returns the area that two rectangles span together.
 */

module.exports = function calculateArea(rectOne, rectTwo) {
  const rectOneRight = rectOne.xLeft + rectOne.width;
  const rectOneTop = rectOne.yBottom + rectOne.height;
  const rectTwoRight = rectTwo.xLeft + rectTwo.width;
  const rectTwoTop = rectTwo.yBottom + rectTwo.height;

  const totalArea = rectOne.width * rectOne.height + rectTwo.width * rectTwo.height;
  const intersectionArea = (Math.min(rectOneRight, rectTwoRight) - Math.max(rectOne.xLeft, rectTwo.xLeft)) * (Math.min(rectOneTop, rectTwoTop) - Math.max(rectOne.yBottom, rectTwo.yBottom));

  return totalArea - intersectionArea;
}
