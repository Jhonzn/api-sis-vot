const express = require("express");
const router = express.Router();
const { votar, getVotes, getStats} = require("../controllers/votesControllers");
const { authenticateToken } = require("../middleware/auth");


router.post("/votar", authenticateToken, votar);
router.get("/getVotes", authenticateToken, getVotes);
router.get("/statistics", authenticateToken, getStats);

module.exports = router;