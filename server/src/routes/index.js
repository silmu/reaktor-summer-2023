const router = require("express").Router();
const { getDronesController } = require("../controllers");

router.get("/", getDronesController);

module.exports = router;
