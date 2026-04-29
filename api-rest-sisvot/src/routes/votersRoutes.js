const express = require("express");
const router = express.Router();
const { registerVoter, obtVoters, obtDetVoter, deleteVoter, getVoters } = require("../controllers/votersControllers");
const { authenticateToken } = require("../middleware/auth");

router.post("/", authenticateToken, registerVoter);
router.get("/", authenticateToken, obtVoters);
router.get("/filter", authenticateToken, getVoters);
router.get("/:idVoter", authenticateToken, obtDetVoter);
router.delete("/:idVoter", authenticateToken, deleteVoter);

module.exports = router;