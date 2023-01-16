const { XMLParser, XMLValidator } = require("fast-xml-parser");

/*
 * This function parses XML data.
 *
 * It requires data string as parameter.
 *
 * Returns JSON object.
 */

module.exports = data => {
  const parser = new XMLParser();

  if (XMLValidator.validate(data) === true) {
    return parser.parse(data).report.capture.drone;
  } else {
    res.send("XML parser: Bad format");
  }
};
