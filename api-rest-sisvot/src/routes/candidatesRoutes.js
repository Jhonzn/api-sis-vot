const express = require("express");
const router = express.Router();
const { registerCandidate, obtCandidates, obtDetCandi, deleteCandi } = require("../controllers/candidatesControllers");
const { authenticateToken } = require("../middleware/auth");

router.post("/registerCandidate", authenticateToken, registerCandidate);
router.get("/obtCandidates", authenticateToken, obtCandidates);
router.get("/obtDetCandi/:idCandidate", authenticateToken, obtDetCandi);
router.delete("/deleteCandi/:idCandidate", authenticateToken, deleteCandi);

module.exports = router;