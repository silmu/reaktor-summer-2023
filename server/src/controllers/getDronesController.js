const axios = require("axios");
const { parseXML, getViolators } = require("../utils");
const NodeCache = require("node-cache");
const myCache = new NodeCache({ stdTTL: 600 });

module.exports = async (req, res) => {
  try {
    const drones = await axios.get(`${process.env.BASEURL}/drones`);

    // Check if drones violate the border
    const violators = getViolators(await parseXML(drones.data));

    violators.forEach(async id => {
      try {
        let pilotInfo = await axios.get(`${process.env.BASEURL}/pilots/${id}`);
        pilotInfo = pilotInfo.data;

        // Check if pilot info exists
        if (pilotInfo) {
          const { pilotId, firstName, lastName, phoneNumber, email } =
            pilotInfo;
          // Save only necessary pilot info
          const toStore = {
            pilot_id: pilotId,
            first_name: firstName,
            last_name: lastName,
            phone: phoneNumber,
            email: email,
          };
          // Store pilot info to cache
          myCache.set(id, toStore);
        }

        // "pilotId": "P-kXrMCixYG6",
        // "firstName": "Clarissa",
        // "lastName": "Bednar",
        // "phoneNumber": "+210144136493",
        // "createdDt": "2022-08-12T20:30:18.698Z",
        // "email": "clarissa.bednar@example.com"
      } catch (err) {
        console.log(`Server error: ${err}`);
      }
    });

    const allPilotsIds = myCache.keys();
    res.json(myCache.mget(allPilotsIds));
    // res.send(allPilotsIds);
  } catch (err) {
    res.status(500).send(`Server error ${err}`);
  }
};
