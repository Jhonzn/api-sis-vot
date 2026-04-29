const express = require("express");
const router = express.Router();
const { registerCandidate, obtCandidates, obtDetCandi, deleteCandi, getCandid } = require("../controllers/candidatesControllers");
const { authenticateToken } = require("../middleware/auth");

router.post("/", authenticateToken, registerCandidate);
router.get("/", authenticateToken, obtCandidates);
router.get("/filter", authenticateToken, getCandid);
router.get("/:idCandidate", authenticateToken, obtDetCandi);
router.delete("/:idCandidate", authenticateToken, deleteCandi);

module.exports = router;