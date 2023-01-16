/*
 * This function is using Pythagorean theorem
 * to calculate the distance between two dots.
 *
 * It requires two arrays with coordinates passed
 * as parameters.
 *
 * Returns number: integer or float.
 */
module.exports = ([x, y], [x2, y2]) => {
  return Math.sqrt((x - x2) ** 2 + (y - y2) ** 2);
};
