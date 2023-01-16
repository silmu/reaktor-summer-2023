const calcDistance = require("./calcDistance");

module.exports = data => {
  /* The no-fly zone is a circle with a 100 meter
   * radius (100000 ml), origin at position 250000,250000
   */
  const circleX = 250000;
  const circleY = 250000;
  const radius = 100000;
  const violators = [];

  data.forEach(entry => {
    /*
     * Pythagorean theorem can be used to calculate
     * the distance between the center of the circle
     * and the drone coordinates
     */
    const distance = calcDistance(
      [entry.positionX, entry.positionY],
      [circleX, circleY]
    );
    // If the distance > radius of the cirle
    // the drone is outside of it.
    if (distance <= radius) {
      // Add drone to violaters list for 10 minutes
      violators.push(entry.serialNumber);
    }
  });
  return violators;
};
