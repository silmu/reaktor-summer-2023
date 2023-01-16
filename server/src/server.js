const app = require("express")();
const cors = require("cors");
// dotenv for reading variables from .env file
require("dotenv").config();

// bodyParser for parsing requests to get data
const bodyParser = require("body-parser").json;
// Import all routes
const routes = require("./routes");

// cors
app.use(cors());

app.use(bodyParser());

app.use(routes);

module.exports = app;
