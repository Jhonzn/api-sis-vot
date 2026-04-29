const express = require("express");
const router = express.Router();
const { generate_token } = require("../controllers/tokenControllers");

router.get("/", generate_token);

module.exports = router;