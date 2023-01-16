const axios = require("axios");
const { parseXML, getViolators } = require("../utils");

module.exports = async (req, res) => {
  try {
    const drones = await axios.get(`${process.env.BASEURL}/drones`);

    // Check if drones violate the border
    const violators = getViolators(await parseXML(drones.data));
    // res.send(await parseXML(drones.data));
    res.send(violators);
  } catch (err) {
    res.status(500).send(`Server error ${err}`);
  }
};
